import { AutoDriveApiKeyGuard } from '../storage/components/AutoDriveApiKeyGuard'
import { ManageStorage } from '../storage/components/ManageStorage'
import { ClientOnly } from '@lib/ui/base/ClientOnly'

export default () => (
  <ClientOnly>
    <AutoDriveApiKeyGuard>
      <ManageStorage />
    </AutoDriveApiKeyGuard>
  </ClientOnly>
)
