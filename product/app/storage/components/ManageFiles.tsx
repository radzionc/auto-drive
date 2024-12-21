import { useQuery } from '@tanstack/react-query'
import { useAutoDriveApi } from '../state/autoDriveApi'
import { apiCalls, Scope } from '@autonomys/auto-drive'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { Text } from '@lib/ui/text'
import { getErrorMessage } from '@lib/utils/getErrorMessage'
import { Spinner } from '@lib/ui/loaders/Spinner'

export const ManageFiles = () => {
  const api = useAutoDriveApi()
  const query = useQuery({
    queryKey: ['roots'],
    queryFn: async () => {
      return apiCalls.getRoots(api, {
        scope: Scope.User,
        limit: 10,
        offset: 0,
      })
    },
  })

  return (
    <MatchQuery
      value={query}
      error={(error) => <Text color="alert">{getErrorMessage(error)}</Text>}
      pending={() => <Spinner />}
      success={(data) => <div>{JSON.stringify(data)}</div>}
    />
  )
}
