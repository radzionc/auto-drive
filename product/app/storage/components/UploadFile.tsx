import { useDropzone } from 'react-dropzone'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'
import { centerContent } from '@lib/ui/css/centerContent'
import { Spinner } from '@lib/ui/loaders/Spinner'
import { Text } from '@lib/ui/text'
import { TakeWholeSpace } from '@lib/ui/css/takeWholeSpace'
import { interactive } from '@lib/ui/css/interactive'
import { transition } from '@lib/ui/css/transition'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { useMutation } from '@tanstack/react-query'
import { UploadFileInputContent } from './UploadFileInputContent'
import { CloudUploadIcon } from '@lib/ui/icons/CloudUploadIcon'
import { uploadFileFromInput } from '@autonomys/auto-drive'
import { useAutoDriveApi } from '../state/autoDriveApi'

const Container = styled.div`
  width: 100%;
  height: 280px;
`

const Input = styled(TakeWholeSpace)`
  ${centerContent};
  ${interactive};
  ${transition};
  font-weight: 500;
  &:hover {
    color: ${getColor('contrast')};
    background: ${getColor('mist')};
  }
  border: 2px dashed ${getColor('primary')};
  ${borderRadius.m};
`

const PendingContainer = styled(TakeWholeSpace)`
  ${centerContent};
  ${borderRadius.m};
  border: 2px dashed ${getColor('mistExtra')};
`

export const UploadFile = () => {
  const api = useAutoDriveApi()

  const { mutate, status } = useMutation({
    mutationFn: async (file: File) => {
      const result = await uploadFileFromInput(api, file).promise
      console.log(result)
    },
  })

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const [file] = acceptedFiles
      if (file) {
        mutate(file)
      }
    },
  })

  return (
    <Container>
      {status === 'pending' ? (
        <PendingContainer>
          <UploadFileInputContent
            title="Please wait"
            subTitle="Uploading the file..."
            icon={<Spinner />}
          />
        </PendingContainer>
      ) : (
        <Input {...getRootProps()}>
          <input {...getInputProps()} />
          <UploadFileInputContent
            title="Upload to Blockchain"
            subTitle="Drop it here or click to select"
            icon={<CloudUploadIcon />}
          >
            {status === 'error' && (
              <Text size={14} weight="500" color="alert">
                Failed to upload the file.
              </Text>
            )}
          </UploadFileInputContent>
        </Input>
      )}
    </Container>
  )
}
