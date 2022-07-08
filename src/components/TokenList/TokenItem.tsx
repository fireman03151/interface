import React from 'react'
import { FlexAlignType, Image, ImageStyle, Pressable } from 'react-native'
import { Box } from 'src/components/layout/Box'
import { Text } from 'src/components/Text'
import { RelativeChange } from 'src/components/text/RelativeChange'
import { Asset } from 'src/features/dataApi/zerion/types'
import { formatUSDPrice } from 'src/utils/format'
import { Flex } from '../layout'

interface TokenItemProps {
  token: Asset
  onPress: () => void
}

const tokenLogoStyle: ImageStyle = { width: 35, height: 35, borderRadius: 35 / 2 }
const boxTokenLogoStyle: ImageStyle = { width: 18, height: 18, borderRadius: 18 / 2 }

export function TokenItem({ token, onPress }: TokenItemProps) {
  return (
    // TODO add test
    <Pressable testID={`token-item-${token.symbol}`} onPress={onPress}>
      <Flex row alignItems="center" justifyContent="space-between">
        <Flex centered row flexShrink={1} gap="sm" overflow="hidden">
          <Image source={{ uri: token.icon_url }} style={tokenLogoStyle} />
          <Flex alignItems="flex-start" flexShrink={1} gap="xxs">
            <Flex row>
              <Text variant="mediumLabel">{token.name ?? ''}</Text>
            </Flex>
            <Flex row>
              <Text variant="caption">{token.symbol ?? ''}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex row justifyContent="flex-end">
          <TokenMetadata
            main={formatUSDPrice(token.price?.value)}
            sub={<RelativeChange change={token?.price?.relative_change_24h} />}
          />
        </Flex>
      </Flex>
    </Pressable>
  )
}

export function TokenItemBox({ token, onPress }: TokenItemProps) {
  return (
    <Pressable testID={`token-box-${token.symbol}`} onPress={onPress}>
      <Box bg="translucentBackground" borderRadius="lg" justifyContent="space-between">
        <Flex p="sm">
          <Flex row alignItems="center" justifyContent="space-between">
            <Text variant="body">{token.symbol ?? ''}</Text>
            <Image source={{ uri: token.icon_url }} style={boxTokenLogoStyle} />
          </Flex>
          <Flex row>
            <TokenMetadata
              align="flex-start"
              main={<Text variant="bodySmall">{formatUSDPrice(token.price?.value)}</Text>}
              sub={<RelativeChange change={token?.price?.relative_change_24h} />}
            />
          </Flex>
        </Flex>
      </Box>
    </Pressable>
  )
}

interface TokenMetadataProps {
  pre?: React.ReactNode
  main: React.ReactNode
  sub?: React.ReactNode
  align?: FlexAlignType
}

/** Helper component to format rhs metadata for a given token. */
function TokenMetadata({ pre, main, sub, align = 'flex-end' }: TokenMetadataProps) {
  return (
    <Flex row>
      {pre}
      <Box alignItems={align} minWidth={70}>
        <Text variant="body">{main}</Text>
        {sub && (
          <Text color="deprecated_gray400" variant="caption">
            {sub}
          </Text>
        )}
      </Box>
    </Flex>
  )
}
