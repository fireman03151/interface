import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
  useApolloClient,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { relayStylePagination } from '@apollo/client/utilities'
import { MMKVWrapper, persistCache } from 'apollo3-cache-persist'
import { useCallback, useEffect, useState } from 'react'
import { MMKV } from 'react-native-mmkv'
import { config } from 'src/config'
import { uniswapUrls } from 'src/constants/urls'
import { isNonJestDev } from 'src/utils/environment'
import { logger } from 'src/utils/logger'

// Samples error reports to reduce load on backend
// Recurring errors that we must fix should have enough occurrences that we detect them still
const APOLLO_GRAPHQL_ERROR_SAMPLING_RATE = 0.1
const APOLLO_NETWORK_ERROR_SAMPLING_RATE = 0.01

const mmkv = new MMKV()
if (isNonJestDev()) {
  // requires Flipper plugin `react-native-mmkv` to be installed
  require('react-native-mmkv-flipper-plugin').initializeMMKVFlipper({ default: mmkv })
}

// ONLY for use once in App.tsx! If you add this in other places you will go to JAIL!
export const usePersistedApolloClient = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              // relayStylePagination function unfortunately generates a field policy that ignores args
              nftBalances: relayStylePagination(['ownerAddress']),

              // tell apollo client how to reference Token items in the cache after being fetched by queries that return Token[]
              token: {
                read(_, { args, toReference }) {
                  return toReference({
                    __typename: 'Token',
                    chain: args?.chain,
                    address: args?.address,
                  })
                },
              },
            },
          },
          Token: {
            // key by chain, address combination so that Token(chain, address) endpoint can read from cache
            keyFields: ['chain', 'address'],
            fields: {
              address: {
                read(address: string | null) {
                  // backend endpoint sometimes returns checksummed, sometimes lowercased addresses
                  // always use lowercased addresses in our app for consistency
                  return address?.toLowerCase() ?? null
                },
              },
            },
          },
        },
      })

      try {
        await persistCache({
          cache,
          storage: new MMKVWrapper(mmkv),
        })
      } catch (e) {
        // non-fatal error, simply log
        logger.error('data/hooks', 'init', `Error while restoring Apollo cache: ${e}`)
      }

      const httpLink = createHttpLink({
        uri: uniswapUrls.graphQLUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': config.uniswapApiKey,
          // TODO: remove once API gateway supports mobile origin URL
          Origin: uniswapUrls.apiBaseUrl,
        },
      })

      // Log any GraphQL errors or network error that occurred
      const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) => {
            if (Math.random() < APOLLO_GRAPHQL_ERROR_SAMPLING_RATE) return
            logger.error(
              'data/hooks',
              '',
              `[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          })
        }
        if (networkError) {
          if (Math.random() < APOLLO_NETWORK_ERROR_SAMPLING_RATE) return
          logger.error('data/hooks', '', `[Network error]: ${networkError}`)
        }
      })

      setClient(
        new ApolloClient({
          link: from([errorLink, httpLink]),
          cache,
          defaultOptions: {
            watchQuery: {
              // NOTE: when polling is enabled, if there is cached data, the first request is skipped.
              // `cache-and-network` ensures we send a request on first query, keeping queries
              // across the app in sync.
              fetchPolicy: 'cache-and-network',
              // ensures query is returning data even if some fields errored out
              errorPolicy: 'all',
            },
          },
        })
      )
    }

    init()
  }, [])

  useEffect(() => {
    if (isNonJestDev()) {
      // requires Flipper plugin `react-native-apollo-devtools` to be installed
      require('react-native-apollo-devtools-client').apolloDevToolsInit(client)
    }
  }, [client])

  return client
}

export function useRefetchQueries() {
  const client = useApolloClient()

  return useCallback(
    (
      include: Parameters<
        ApolloClient<NormalizedCacheObject>['refetchQueries']
      >[0]['include'] = 'active'
    ) => {
      client?.refetchQueries({ include })
    },
    [client]
  )
}
