import { ChatMessageRole } from './chat-message-role'
import { Pagination } from '../../../types'

export type ListMessagesQuery = Pagination & {
  roles?: ChatMessageRole[]
}
