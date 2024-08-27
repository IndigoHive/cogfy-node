import { ChatMessageRole, Pagination } from '../../../types'

export type ListMessagesQuery = Pagination & {
  roles?: ChatMessageRole[]
}
