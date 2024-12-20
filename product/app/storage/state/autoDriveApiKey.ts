import {
  PersistentStateKey,
  usePersistentState,
} from '../../state/persistentState'

export const useAutoDriveApiKey = () => {
  return usePersistentState<string | null>(
    PersistentStateKey.AutoDriveApiKey,
    null,
  )
}
