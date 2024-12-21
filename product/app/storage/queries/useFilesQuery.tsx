import { apiCalls, Scope } from '@autonomys/auto-drive'
import { useQuery } from '@tanstack/react-query'
import { useAutoDriveApi } from '../state/autoDriveApi'

export const filesQueryKey = ['files']

export const useFilesQuery = () => {
  const api = useAutoDriveApi()

  return useQuery({
    queryKey: filesQueryKey,
    queryFn: async () => {
      const { rows } = await apiCalls.getRoots(api, {
        scope: Scope.User,
        limit: 10,
        offset: 0,
      })

      return rows
    },
  })
}
