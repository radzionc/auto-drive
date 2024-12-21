import { ObjectSummary } from '@autonomys/auto-drive'
import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'

export const { useValue: useCurrentFile, provider: CurrentFileProvider } =
  getValueProviderSetup<ObjectSummary>('CurrentFile')
