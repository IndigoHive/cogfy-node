import { ChatMessageRole } from '../../../types'

export type ListChatMessagesResult = {
  data: {
    role: ChatMessageRole
    content: string | null
  },
  pageNumber: number,
  pageSize: number,
  totalSize: number
}
