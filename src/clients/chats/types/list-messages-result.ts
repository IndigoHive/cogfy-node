import { ChatMessageRole, Page } from '../../../types'

export type ListMessagesResultData = {
  role: ChatMessageRole
  content: string | null
}

export type ListMessagesResult = Page<ListMessagesResultData>
