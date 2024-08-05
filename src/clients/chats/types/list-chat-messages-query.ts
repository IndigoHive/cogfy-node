type ChatMessageRole = 'system' | 'user' | 'assistant' | 'tool'

export type ListChatMessagesQuery = {
  roles?: ChatMessageRole[]
  pageNumber?: number
  pageSize?: number
}
