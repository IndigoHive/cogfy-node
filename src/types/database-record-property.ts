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

export type DatabaseRecordProperty = BooleanDatabaseRecordProperty | ChatDatabaseRecordProperty | NumberDatabaseRecordProperty | TextDatabaseRecordProperty
