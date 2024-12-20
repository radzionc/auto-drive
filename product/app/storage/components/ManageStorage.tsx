import styled from 'styled-components'
import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { HStack } from '@lib/ui/css/stack'
import { ProductLogo } from '../../product/ProductLogo'
import { ExitStorage } from './ExitStorage'

export const Container = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 800,
  })}

  ${verticalPadding(80)}
`

export const ManageStorage = () => (
  <Container>
    <HStack fullWidth alignItems="center" justifyContent="space-between">
      <ProductLogo />
      <ExitStorage />
    </HStack>
  </Container>
)
