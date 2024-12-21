import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { Text } from '@lib/ui/text'
import { getErrorMessage } from '@lib/utils/getErrorMessage'
import { Spinner } from '@lib/ui/loaders/Spinner'
import { VStack } from '@lib/ui/css/stack'
import { ManageFile } from './ManageFile'
import { useFilesQuery } from '../queries/useFilesQuery'

export const ManageFiles = () => {
  const query = useFilesQuery()

  return (
    <MatchQuery
      value={query}
      error={(error) => <Text color="alert">{getErrorMessage(error)}</Text>}
      pending={() => <Spinner />}
      success={(data) => (
        <VStack gap={8}>
          {data.map((file) => (
            <ManageFile key={file.headCid} value={file} />
          ))}
        </VStack>
      )}
    />
  )
}
