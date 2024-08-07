export type BaseRecordPropertyResult = {
  error?: {
    code?: string | null
    message?: string
  }
  pending?: boolean
}

export type AuthorRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'author'
  author?: {
    value?: {
      id: string
      name: string
    }
  }
}

export type BooleanRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}

export type ChatRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'chat'
  chat: {
    value?: {
      chatId?: string
      lastMessage?: {
        content?: string
        role?: string
        user?: {
          id: string
          name: string
        }
        sendDate?: string
      }
    }
  }
}

export type CreateDateRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'createDate'
  createDate: {
    value: string
  }
}

export type DateRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'date'
  date: {
    value: string
  }
}

export type FileRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'file'
  file: {
    value: {
      id: string
      type: string
      name: string
      size: number
      url: string
      uploadStatus?: string
      key?: string
      bucketName?: string
    }
  }
}

export type JsonRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'json'
  json: {
    value: unknown
  }
}

export type NumberRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'number'
  number: {
    value: number
  }
}

export type ReferenceRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'reference'
  reference: {
    value: {
      id: string
      referencedRecordId: string
      title: string | null
    }[]
  }
}

export type StopwatchRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'stopwatch'
  stopwatch?: {
    value?: {
      startDate?: string | null
      elapsed?: number | null
    }
  }
}

export type TextRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'text'
  text: {
    value: string
  }
}

export type UpdateDateRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'updateDate'
  updateDate: {
    value: string
  }
}

export type VectorRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'vector'
  vector: {
    value: {
      count: number
    }
  }
}

export type WhatsAppRecordPropertyResult = BaseRecordPropertyResult & {
  type: 'whatsApp'
  whatsApp?: {
    value?: {
      phoneNumber?: string
      chatId?: string
    }
  }
}

export type RecordPropertyResult =
  AuthorRecordPropertyResult |
  BooleanRecordPropertyResult |
  ChatRecordPropertyResult |
  CreateDateRecordPropertyResult |
  DateRecordPropertyResult |
  FileRecordPropertyResult |
  JsonRecordPropertyResult |
  NumberRecordPropertyResult |
  ReferenceRecordPropertyResult |
  StopwatchRecordPropertyResult |
  TextRecordPropertyResult |
  UpdateDateRecordPropertyResult |
  VectorRecordPropertyResult |
  WhatsAppRecordPropertyResult

export type RecordPropertyResultType = RecordPropertyResult['type']
