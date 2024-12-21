import { IconButton } from '@lib/ui/buttons/IconButton'
import { DownloadIcon } from '@lib/ui/icons/DownloadIcon'

export const DownloadFile = () => {
  return (
    <IconButton
      kind="secondary"
      size="l"
      icon={<DownloadIcon />}
      title="Download file"
    />
  )
}
