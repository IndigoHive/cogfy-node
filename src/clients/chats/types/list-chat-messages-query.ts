import { ChatMessageRole, Pagination } from '../../../types'

export type ListChatMessagesQuery = Pagination & {
  roles?: ChatMessageRole[]
}
