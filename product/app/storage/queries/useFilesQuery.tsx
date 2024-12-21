import { useInfiniteQuery } from '@tanstack/react-query'
import { apiCalls, ObjectSummary, Scope } from '@autonomys/auto-drive'
import { useAutoDriveApi } from '../state/autoDriveApi'
import { PaginatedResult } from '@autonomys/auto-drive/dist/api/models/common'

export const filesQueryKey = ['files']

const limit = 20

export const useFilesQuery = () => {
  const api = useAutoDriveApi()

  return useInfiniteQuery({
    queryKey: filesQueryKey,
    initialPageParam: 0,
    getNextPageParam: (
      { totalCount }: PaginatedResult<ObjectSummary>,
      allPages,
    ) => {
      const offset = allPages.length * limit
      return offset < totalCount ? offset : null
    },
    queryFn: async ({ pageParam }) => {
      const response = await apiCalls.getRoots(api, {
        scope: Scope.User,
        limit,
        offset: pageParam,
      })

      return response
    },
  })
}
