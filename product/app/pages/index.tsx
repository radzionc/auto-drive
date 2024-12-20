import { AutoDriveApiKeyOnly } from '../storage/components/AutoDriveApiKeyOnly'
import { ManageStorage } from '../storage/components/ManageStorage'
import { ClientOnly } from '@lib/ui/base/ClientOnly'

export default () => (
  <AutoDriveApiKeyOnly>
    <ClientOnly>
      <ManageStorage />
    </ClientOnly>
  </AutoDriveApiKeyOnly>
)
