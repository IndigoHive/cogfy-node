type ChatMessageResult = {
  id: string,
  role: 'system' | 'user' | 'assistant' | 'tool',
  content: string
}

export type CreateChatResult = {
  id: string,
  collectionId: string,
  fieldId: string,
  recordId: string,
  messages: ChatMessageResult[]
}
