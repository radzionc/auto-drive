import { useEffect, useState } from 'react'
import { useAutoDriveApiKey } from '../state/autoDriveApiKey'
import { Center } from '@lib/ui/layout/Center'
import { vStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { InputDebounce } from '@lib/ui/inputs/InputDebounce'
import { TextInput } from '@lib/ui/inputs/TextInput'
import { useMutation } from '@tanstack/react-query'
import { createAutoDriveApi, Scope, apiCalls } from '@autonomys/auto-drive'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { getErrorMessage } from '@lib/utils/getErrorMessage'
import styled from 'styled-components'
import { ProductLogo } from '../../product/ProductLogo'
import { isWrongApiKey } from '../utils/isWrongApiKey'

const Content = styled.div`
  ${vStack({
    gap: 20,
    alignItems: 'center',
    fullWidth: true,
  })}

  max-width: 320px;
`

const Status = styled.div`
  min-height: 20px;
  ${vStack({
    alignItems: 'center',
  })}
`

export const SetAutoDriveApiKey = () => {
  const [, setValue] = useAutoDriveApiKey()

  const { mutate, ...mutationState } = useMutation({
    mutationFn: async (apiKey: string) => {
      const api = createAutoDriveApi({ apiKey })
      await apiCalls.getRoots(api, {
        scope: Scope.Global,
        limit: 1,
        offset: 0,
      })

      return apiKey
    },
    onSuccess: setValue,
  })

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (inputValue) {
      mutate(inputValue)
    }
  }, [inputValue, mutate])

  return (
    <Center>
      <Content>
        <ProductLogo />
        <InputDebounce
          value={inputValue}
          onChange={setInputValue}
          render={({ value, onChange }) => (
            <TextInput
              value={value}
              onValueChange={onChange}
              autoFocus
              placeholder="Enter your Auto-Drive API key to continue"
            />
          )}
        />
        <Status>
          <MatchQuery
            value={mutationState}
            error={(error) => (
              <Text color="alert">
                {isWrongApiKey(error)
                  ? 'Wrong API Key'
                  : getErrorMessage(error)}
              </Text>
            )}
            pending={() => <Text>Loading...</Text>}
          />
        </Status>
      </Content>
    </Center>
  )
}
