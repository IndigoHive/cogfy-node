import { ChatMessageRole } from '../../../types'

export type ListChatMessagesQuery = {
  roles?: ChatMessageRole[]
  pageNumber?: number
  pageSize?: number
}
