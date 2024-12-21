import { ClientOnly } from '@lib/ui/base/ClientOnly'
import { AutoDriveApiKeyGuard } from './AutoDriveApiKeyGuard'
import { ManageStorage } from './ManageStorage'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

export const StoragePage = () => (
  <>
    <PageMetaTags
      title="Distributed Storage Manager"
      description="Upload, download, and manage files seamlessly on a Distributed Storage Network using Autonomy's Auto-Drive API."
    />
    <ClientOnly>
      <AutoDriveApiKeyGuard>
        <ManageStorage />
      </AutoDriveApiKeyGuard>
    </ClientOnly>
  </>
)
