import { ObjectSummary } from '@autonomys/auto-drive'
import { ComponentWithValueProps } from '@lib/ui/props'
import styled from 'styled-components'
import { Text } from '@lib/ui/text'
import { FileIcon } from '@lib/ui/icons/FileIcon'
import { getColor } from '@lib/ui/theme/getters'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { HStack, hStack } from '@lib/ui/css/stack'
import { DeleteFile } from './DeleteFile'
import { DownloadFile } from './DownloadFile'

const Indicator = styled(FileIcon)`
  color: ${getColor('textSupporting')};
  font-size: 20px;
`

const Container = styled.div`
  height: 56px;
  background: ${getColor('foreground')};
  ${borderRadius.m};
  ${horizontalPadding(16)};
  padding-right: 8px;
  ${hStack({ alignItems: 'center', justifyContent: 'space-between' })};
`

export const ManageFile = ({
  value,
}: ComponentWithValueProps<ObjectSummary>) => {
  return (
    <Container>
      <Text centerVertically={{ gap: 8 }}>
        <Indicator />
        {value.name}
      </Text>
      <HStack alignItems="center" gap={4}>
        <DownloadFile />
        <DeleteFile value={value.headCid} />
      </HStack>
    </Container>
  )
}
