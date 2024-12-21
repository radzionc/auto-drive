import { usePresentState } from '@lib/ui/state/usePresentState'
import { useAutoDriveApiKey } from './autoDriveApiKey'
import { useMemo } from 'react'
import { createAutoDriveApi } from '@autonomys/auto-drive'

export const useAutoDriveApi = () => {
  const [apiKey] = usePresentState(useAutoDriveApiKey())

  return useMemo(() => createAutoDriveApi({ apiKey }), [apiKey])
}
