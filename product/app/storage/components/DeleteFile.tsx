import { IconButton } from '@lib/ui/buttons/IconButton'
import { TrashBinIcon } from '@lib/ui/icons/TrashBinIcon'

export const DeleteFile = () => {
  return (
    <IconButton
      kind="alertSecondary"
      size="l"
      icon={<TrashBinIcon />}
      title="Delete file"
    />
  )
}
