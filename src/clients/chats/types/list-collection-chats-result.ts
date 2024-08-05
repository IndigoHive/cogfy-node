import { Page } from '../../../types'

export type CollectionChatsResult = {
  id: string,
  fieldId: string | null,
  recordId: string | null
}
export type ListCollectionChatsResult = Page<CollectionChatsResult>
