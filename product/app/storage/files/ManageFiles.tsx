import { Text } from '@lib/ui/text'
import { ManageFile } from './ManageFile'
import { useFilesQuery } from './queries/useFilesQuery'
import { CurrentFileProvider } from './state/currentFile'
import { usePaginatedResultItems } from '@lib/ui/query/hooks/usePaginatedResultItems'
import { PaginatedView } from '@lib/ui/pagination/PaginatedView'
import { isEmpty } from '@lib/utils/array/isEmpty'
import { VStack } from '@lib/ui/css/stack'

export const ManageFiles = () => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
    useFilesQuery()

  const items = usePaginatedResultItems(data, (response) => response.rows)

  return (
    <VStack gap={16}>
      <PaginatedView
        onRequestToLoadMore={fetchNextPage}
        isLoading={isLoading || isFetchingNextPage}
        hasNextPage={hasNextPage}
      >
        {isEmpty(items) && !isLoading ? (
          <Text>You have no files 😴</Text>
        ) : (
          items.map((file) => (
            <CurrentFileProvider value={file} key={file.headCid}>
              <ManageFile />
            </CurrentFileProvider>
          ))
        )}
      </PaginatedView>
    </VStack>
  )
}
