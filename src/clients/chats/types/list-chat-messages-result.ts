import { ChatMessageRole, Page } from '../../../types'

export type ChatMessagesResult = {
  role: ChatMessageRole
  content: string | null
}
export type ListChatMessagesResult = Page<ChatMessagesResult>
