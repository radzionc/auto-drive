import styled from 'styled-components'
import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { HStack, VStack } from '@lib/ui/css/stack'
import { ProductLogo } from '../../product/ProductLogo'
import { ExitStorage } from './ExitStorage'
import { UploadFile } from './UploadFile'
import { ManageFiles } from './ManageFiles'

export const Container = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 600,
  })}

  ${verticalPadding(80)}
`

export const ManageStorage = () => (
  <Container>
    <VStack gap={60}>
      <HStack fullWidth alignItems="center" justifyContent="space-between">
        <ProductLogo />
        <ExitStorage />
      </HStack>
      <UploadFile />
      <ManageFiles />
    </VStack>
  </Container>
)
