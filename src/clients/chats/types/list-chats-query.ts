import { Pagination } from '../../../types'

export type ListChatsQuery = Pagination & {
  fieldId?: string
  recordId?: string
}
