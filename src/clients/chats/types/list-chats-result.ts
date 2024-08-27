import { Page } from '../../../types'

export type ListChatsResultData = {
  id: string,
  fieldId: string | null,
  recordId: string | null
}

export type ListChatsResult = Page<ListChatsResultData>
