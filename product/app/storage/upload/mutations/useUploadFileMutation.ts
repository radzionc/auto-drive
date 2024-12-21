import { uploadFileFromInput } from '@autonomys/auto-drive'
import { useInvalidateQueries } from '@lib/ui/query/hooks/useInvalidateQueries'
import { useMutation } from '@tanstack/react-query'
import { filesQueryKey } from '../../files/queries/useFilesQuery'
import { useAutoDriveApi } from '../../state/autoDriveApi'

export const useUploadFileMutation = () => {
  const api = useAutoDriveApi()

  const invalidate = useInvalidateQueries()

  return useMutation({
    mutationFn: (file: File) => uploadFileFromInput(api, file).promise,
    onSuccess: () => {
      invalidate(filesQueryKey)
    },
  })
}
