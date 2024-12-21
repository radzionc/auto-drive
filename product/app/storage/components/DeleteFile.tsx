import { IconButton } from '@lib/ui/buttons/IconButton'
import { TrashBinIcon } from '@lib/ui/icons/TrashBinIcon'
import { useMutation } from '@tanstack/react-query'
import { useAutoDriveApi } from '../state/autoDriveApi'
import { apiCalls } from '@autonomys/auto-drive'
import { ComponentWithValueProps } from '@lib/ui/props'
import { useInvalidateQueries } from '@lib/ui/query/hooks/useInvalidateQueries'
import { filesQueryKey } from '../queries/useFilesQuery'

export const DeleteFile = ({ value }: ComponentWithValueProps<string>) => {
  const api = useAutoDriveApi()

  const invalidate = useInvalidateQueries()

  const { mutate, isPending } = useMutation({
    mutationFn: () => apiCalls.markObjectAsDeleted(api, { cid: value }),
    onSuccess: () => {
      invalidate(filesQueryKey)
    },
  })

  return (
    <IconButton
      kind="alertSecondary"
      size="l"
      icon={<TrashBinIcon />}
      title="Delete file"
      onClick={() => mutate()}
      isPending={isPending}
    />
  )
}
