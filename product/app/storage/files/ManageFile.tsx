import styled from 'styled-components'
import { Text } from '@lib/ui/text'
import { FileIcon } from '@lib/ui/icons/FileIcon'
import { getColor } from '@lib/ui/theme/getters'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { HStack, hStack } from '@lib/ui/css/stack'
import { DeleteFile } from './DeleteFile'
import { DownloadFile } from './DownloadFile'
import { useCurrentFile } from './state/currentFile'

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
  ${hStack({ alignItems: 'center', justifyContent: 'space-between', gap: 20 })};
`

export const ManageFile = () => {
  const { name, headCid } = useCurrentFile()

  return (
    <Container>
      <Text style={{ flexWrap: 'nowrap' }} centerVertically={{ gap: 8 }}>
        <Indicator />
        <Text as="span" cropped>
          {name ?? headCid}
        </Text>
      </Text>
      <HStack alignItems="center" gap={4}>
        <DownloadFile />
        <DeleteFile />
      </HStack>
    </Container>
  )
}
