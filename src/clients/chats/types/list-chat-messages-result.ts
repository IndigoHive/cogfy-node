export type ListChatMessagesResult = {
  data: {
    role: 'system' | 'user' | 'assistant' | 'tool'
    content: string | null
  },
  pageNumber: number,
  pageSize: number,
  totalSize: number
}
