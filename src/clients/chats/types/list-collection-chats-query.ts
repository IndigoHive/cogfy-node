import { Pagination } from '../../../types'

export type ListCollectionChatsQuery = Pagination & {
  fieldId?: string
  recordId?: string
}
