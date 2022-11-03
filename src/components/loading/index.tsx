import MaskedView from '@react-native-masked-view/masked-view'
import React, { ComponentProps } from 'react'
import { Box, Flex } from 'src/components/layout'
import { BoxLoader } from 'src/components/loading/BoxLoader'
import { FavoriteLoader } from 'src/components/loading/FavoriteLoader'
import { HeaderLoader } from 'src/components/loading/HeaderLoader'
import { NftCardLoader } from 'src/components/loading/NftCardLoader'
import { PriceHeaderLoader } from 'src/components/loading/PriceHeaderLoader'
import { Shimmer } from 'src/components/loading/Shimmer'
import { TokenBalanceLoader } from 'src/components/loading/TokenBalanceLoader'
import { TokenLoader } from 'src/components/loading/TokenLoader'
import TransactionLoader from 'src/components/loading/TransactionLoader'
import { WalletLoader } from 'src/components/loading/WalletLoader'
import { WaveLoader } from 'src/components/loading/WaveLoader'

type SkeletonType =
  | 'box'
  | 'favorite'
  | 'graph'
  | 'grid'
  | 'header'
  | 'image'
  | 'nft'
  | 'text'
  | 'token'
  | 'transactions'
  | 'wallets'
  | 'price-header'
  | 'balance'

type LoadingProps = {
  type?: SkeletonType
  repeat?: number
  height?: number

  // use this instead of React.PropsWithChildren because MaskedView doesn't accept
  // every kind of ReactNode as a valid mask element
  children?: ComponentProps<typeof MaskedView>['maskElement']
}

const getChildFromType = (type: SkeletonType, repeat: number, height?: number) => {
  switch (type) {
    case 'header':
      return (
        <Box>
          {new Array(repeat).fill(null).map((_, i: number) => (
            <React.Fragment key={i}>
              <HeaderLoader />
            </React.Fragment>
          ))}
        </Box>
      )
    case 'graph':
      return <WaveLoader />
    case 'token':
      return (
        <Flex>
          {new Array(repeat).fill(null).map((_, i, { length }) => (
            <React.Fragment key={i}>
              <TokenLoader opacity={(length - i) / length} />
            </React.Fragment>
          ))}
        </Flex>
      )
    case 'wallets':
      return (
        <Flex gap="sm">
          {new Array(repeat).fill(null).map((_, i, { length }) => (
            <React.Fragment key={i}>
              <WalletLoader opacity={(length - i) / length} />
            </React.Fragment>
          ))}
        </Flex>
      )
    case 'favorite':
      return (
        <Flex row gap="xs">
          {new Array(repeat).fill(null).map((_, i, { length }) => (
            <FavoriteLoader key={i} flex={1 / repeat} opacity={(length - i) / length} />
          ))}
        </Flex>
      )
    case 'transactions':
      return <TransactionLoader />
    case 'image':
      if (repeat > 1) throw new Error('Loading placeholder for images does not support repeat')
      return <BoxLoader aspectRatio={1} borderRadius="none" />
    case 'grid':
      return (
        <Box>
          {new Array(repeat / 2).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              <Flex row gap="none">
                <BoxLoader aspectRatio={1} borderRadius="none" m="xxs" width="50%" />
                <BoxLoader aspectRatio={1} borderRadius="none" m="xxs" width="50%" />
              </Flex>
            </React.Fragment>
          ))}
        </Box>
      )
    case 'text':
      return <BoxLoader borderRadius="xs" height={height ?? 16} />
    case 'nft':
      return (
        <Box>
          {new Array(repeat / 2).fill(null).map((_, i) => {
            const firstColOpacity = (repeat - ((repeat / 2) * i + 1) + 1) / repeat
            const secondColOpacity = (repeat - ((repeat / 2) * i + 2) + 1) / repeat
            return (
              <React.Fragment key={i}>
                <Flex row gap="none" px="xs">
                  <NftCardLoader opacity={firstColOpacity} width="50%" />
                  <NftCardLoader opacity={secondColOpacity} width="50%" />
                </Flex>
              </React.Fragment>
            )
          })}
        </Box>
      )
    case 'price-header':
      return <PriceHeaderLoader />
    case 'balance':
      return <TokenBalanceLoader />
    case 'box':
    default:
      return (
        <Box>
          {new Array(repeat).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              <BoxLoader height={50} mb="sm" />
            </React.Fragment>
          ))}
        </Box>
      )
  }
}

export function Loading({ type = 'box', repeat = 1, height, children }: LoadingProps) {
  const child = children ?? getChildFromType(type, repeat, height)

  return <Shimmer>{child}</Shimmer>
}
