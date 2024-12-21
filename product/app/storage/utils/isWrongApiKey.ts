import { getErrorMessage } from '@lib/utils/getErrorMessage'

export const isWrongApiKey = (error: unknown) =>
  getErrorMessage(error).includes('Unauthorized')
