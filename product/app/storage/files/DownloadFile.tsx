import { downloadFile } from '@autonomys/auto-drive'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { DownloadIcon } from '@lib/ui/icons/DownloadIcon'
import { useMutation } from '@tanstack/react-query'
import { useAutoDriveApi } from '../state/autoDriveApi'
import { useCurrentFile } from './state/currentFile'
import { initiateFileDownload } from '@lib/ui/utils/initiateFileDownload'

export const DownloadFile = () => {
  const { name, headCid, type } = useCurrentFile()
  const api = useAutoDriveApi()

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const stream = await downloadFile(api, headCid)

      let file = Buffer.alloc(0)
      for await (const chunk of stream) {
        file = Buffer.concat([file, chunk])
      }

      initiateFileDownload({ type, value: file, name: name ?? headCid })
    },
  })

  return (
    <IconButton
      kind="secondary"
      size="l"
      icon={<DownloadIcon />}
      title="Download file"
      onClick={() => mutate()}
      isPending={isPending}
    />
  )
}
