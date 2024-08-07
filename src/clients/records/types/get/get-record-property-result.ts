export type BaseGetRecordPropertyResult = {
  error?: {
    code?: string | null
    message?: string
  }
  pending?: boolean
}

export type AuthorGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'author'
  author?: {
    value?: {
      id: string
      name: string
    }
  }
}

export type BooleanGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}

export type ChatGetRecordPropertyResult = BaseGetRecordPropertyResult & {
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

export type CreateDateGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'createDate'
  createDate: {
    value: string
  }
}

export type DateGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'date'
  date: {
    value: string
  }
}

export type FileGetRecordPropertyResult = BaseGetRecordPropertyResult & {
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

export type JsonGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'json'
  json: {
    value: unknown
  }
}

export type NumberGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'number'
  number: {
    value: number
  }
}

export type ReferenceGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'reference'
  reference: {
    value: {
      id: string
      referencedRecordId: string
      title: string | null
    }[]
  }
}

export type StopwatchGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'stopwatch'
  stopwatch?: {
    value?: {
      startDate?: string | null
      elapsed?: number | null
    }
  }
}

export type TextGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'text'
  text: {
    value: string
  }
}

export type UpdateDateGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'updateDate'
  updateDate: {
    value: string
  }
}

export type VectorGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'vector'
  vector: {
    value: {
      count: number
    }
  }
}

export type WhatsAppGetRecordPropertyResult = BaseGetRecordPropertyResult & {
  type: 'whatsApp'
  whatsApp?: {
    value?: {
      phoneNumber?: string
      chatId?: string
    }
  }
}

export type GetRecordPropertyResult =
  AuthorGetRecordPropertyResult |
  BooleanGetRecordPropertyResult |
  ChatGetRecordPropertyResult |
  CreateDateGetRecordPropertyResult |
  DateGetRecordPropertyResult |
  FileGetRecordPropertyResult |
  JsonGetRecordPropertyResult |
  NumberGetRecordPropertyResult |
  ReferenceGetRecordPropertyResult |
  StopwatchGetRecordPropertyResult |
  TextGetRecordPropertyResult |
  UpdateDateGetRecordPropertyResult |
  VectorGetRecordPropertyResult |
  WhatsAppGetRecordPropertyResult

export type GetRecordPropertyResultType = GetRecordPropertyResult['type']
