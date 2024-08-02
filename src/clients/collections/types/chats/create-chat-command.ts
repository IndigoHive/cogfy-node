type BaseDatabaseRecordProperty = {
  error?: {
    code?: string | null
    message?: string
  }
  pending?: boolean
}
type BooleanDatabaseRecordProperty = BaseDatabaseRecordProperty & {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}
type ChatDatabaseRecordProperty = BaseDatabaseRecordProperty & {
  type: 'chat'
}
type NumberDatabaseRecordProperty = BaseDatabaseRecordProperty & {
  type: 'number'
  number: {
    value: number
  }
}

type TextDatabaseRecordProperty = BaseDatabaseRecordProperty & {
  type: 'text'
  text: {
    value: string
  }
}
type DatabaseRecordProperty = BooleanDatabaseRecordProperty | ChatDatabaseRecordProperty | NumberDatabaseRecordProperty | TextDatabaseRecordProperty


type ChatMessage = {
  role: 'system' | 'user' | 'assistant' | 'tool'
  content: string
}

export type CreateChatCommand = {
  fieldId: string
  recordId?: string | null
  properties?: Record<string, DatabaseRecordProperty> | null
  messages?: ChatMessage[] | null
}
