export type BaseRecordProperty = {
  error?: {
    code?: string | null
    message?: string
  }
  pending?: boolean
}

export type AuthorRecordProperty = BaseRecordProperty & {
  type: 'author'
  author?: {
    value?: {
      id: string
      name: string
    } | null
  }
}

export type BooleanRecordProperty = BaseRecordProperty & {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}

export type ChatMessageRecordProperty = BaseRecordProperty & {
  type: 'chatMessage'
  chatMessage: {
    value?: {
      id: string
      content: string | null
      contentType: string
      sendDate: Date
      status: string | null
      contentData?: object | null
      externalId?: string | null
      scheduleDate?: Date | null
      chat?: {
        id?: string | null
        externalId?: string | null
      }
    } | null
  }
}

export type ChatRecordProperty = BaseRecordProperty & {
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
    } | null
  }
}

export type ConnectionRecordProperty = BaseRecordProperty & {
  type: 'connection'
  connection?: {
    value?: {
      id: string
      name: string
      provider: string
    } | null
  }
}

export type CreateDateRecordProperty = BaseRecordProperty & {
  type: 'createDate'
  createDate: {
    value: string
  }
}

export type DateRecordProperty = BaseRecordProperty & {
  type: 'date'
  date: {
    value: string | null
  }
}

export type FileRecordProperty = BaseRecordProperty & {
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
    } | null
  }
}

export type HttpResponseRecordProperty = BaseRecordProperty & {
  type: 'httpResponse'
  httpResponse: {
    value?: {
      status?: number | null
      body?: string | null
      duration?: number
      error?: JSON | null
    } | null
  }
}

export type JsonRecordProperty = BaseRecordProperty & {
  type: 'json'
  json: {
    value: unknown
    invalidValue?: unknown
  }
}

export type LastEditorRecordProperty = BaseRecordProperty & {
  type: 'lastEditor'
  lastEditor?: {
    value?: {
      id: string
      name: string
    } | null
  }
}

export type NumberRecordProperty = BaseRecordProperty & {
  type: 'number'
  number: {
    value: number | null
  }
}

export type NuvemFiscalNfseRecordProperty = BaseRecordProperty & {
  type: 'nuvemFiscal.nfse'
  'nuvemFiscal.nfse': {
    value?: {
      id: string
      externalId: string
      serviceBuyerCpf?: string | null
      serviceBuyerCnpj?: string | null
      serviceProviderCpf?: string | null
      serviceProviderCnpj?: string | null
      serviceValue?: number | null
      issueDate?: string | null
      status?: string | null
    }
  }
}

export type ReferenceRecordProperty = BaseRecordProperty & {
  type: 'reference'
  reference: {
    value: {
      id: string
      referencedRecordId: string
      title: string | null
    }[]
  }
}

export type ScheduleRecordProperty = BaseRecordProperty & {
  type: 'schedule'
  schedule?: {
    value?: {
      startDate: string
      nextDate: string
      interval: number
      unit: string
    } | null
  }
}

export type SendgridInboundEmailRecordProperty = BaseRecordProperty & {
  type: 'sendgrid.inboundEmail'
  'sendgrid.inboundEmail': {
    subject: string | null
    from: string
    to: string
    createDate: string
  }
}

export type SelectRecordProperty = BaseRecordProperty & {
  type: 'select'
  select: {
    value: {
      id: string
    }[]
  }
}

export type StopwatchRecordProperty = BaseRecordProperty & {
  type: 'stopwatch'
  stopwatch?: {
    value?: {
      startDate?: string | null
      elapsed?: number | null
    }
  }
}

export type StripeCustomerRecordProperty = BaseRecordProperty & {
  type: 'stripe.customer'
  'stripe.customer': {
    externalId: string
    name: string
  }
}

export type TextRecordProperty = BaseRecordProperty & {
  type: 'text'
  text: {
    value: string | null
  }
}

export type UpdateDateRecordProperty = BaseRecordProperty & {
  type: 'updateDate'
  updateDate: {
    value: string
  }
}

export type VectorRecordProperty = BaseRecordProperty & {
  type: 'vector'
  vector: {
    value: {
      count: number | null
    }
  }
}

export type VindiBillRecordProperty = BaseRecordProperty & {
  type: 'vindi.bill'
  'vindi.bill': {
    id: string
    amount: number
    currency: string
    externalId: number
    status: string
    dueDate: string
  }
}

export type VindiCustomerRecordProperty = BaseRecordProperty & {
  type: 'vindi.customer'
  'vindi.customer': {
    id: string
    name: string
    status: string
    externalId: number
  }
}

export type VindiSubscriptionRecordProperty = BaseRecordProperty & {
  type: 'vindi.subscription'
  'vindi.subscription': {
    id: string
    planId: number
    status: string
    paymentMethod: string
    externalId: number
  }
}

export type RecordProperty =
  AuthorRecordProperty |
  BooleanRecordProperty |
  ChatMessageRecordProperty |
  ChatRecordProperty |
  ConnectionRecordProperty |
  CreateDateRecordProperty |
  DateRecordProperty |
  FileRecordProperty |
  HttpResponseRecordProperty |
  JsonRecordProperty |
  LastEditorRecordProperty |
  NumberRecordProperty |
  NuvemFiscalNfseRecordProperty |
  ReferenceRecordProperty |
  ScheduleRecordProperty |
  SendgridInboundEmailRecordProperty |
  SelectRecordProperty |
  StopwatchRecordProperty |
  StripeCustomerRecordProperty |
  TextRecordProperty |
  UpdateDateRecordProperty |
  VectorRecordProperty |
  VindiBillRecordProperty |
  VindiCustomerRecordProperty

