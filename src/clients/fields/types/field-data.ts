import { ProviderName } from '../../../types'

export type AuthorFieldData = {
  author?: object
}

export type BooleanFieldData = {
  boolean?: object
}

export type ChatFieldData = {
  chat?: {
    prompt?: object | string
    model?: string
    provider?: ProviderName
    collectionIds?: string[]
    threshold?: number
    temperature?: number
    countDocuments?: number
    initialMessage?: object | string
  }
}

export type CreateDateFieldData = {
  createDate?: {
    format?: string
  }
}

export type DateFieldData = {
  date?: {
    format?: string
  }
}

export type FileFieldData = {
  file?: {
    size?: number
    types?: string[]
    public?: boolean
  }
}

export type JsonFieldData = {
  json?: {
    format?: boolean
  }
}

export type NumberFieldDataStyle =
  'decimal' | 'currency' | 'percent'

export type NumberFieldData = {
  number?: {
    style?: NumberFieldDataStyle
    currency?: string
  }
}

export type ReferenceFieldData = {
  reference?: {
    collectionId?: string
    createRecords?: boolean
    name?: string
  }
}

export type SelectFieldData = {
  select?: {
    multiple?: boolean
    options?: {
      id: string
      label: string
      color: string
      order: number
    }[]
  }
}

export type StopwatchData = {
  stopwatch?: object
}

export type TextFieldData = {
  text?: {
    embeddings?: boolean
    format?: boolean
  }
}

export type UpdateDateFieldData = {
  updateDate?: {
    format?: string
  }
}

export type VectorFieldData = {
  vector?: object
}

export type WhatsAppFieldData = {
  whatsApp?: {
    systemPrompt?: object | string
    model?: string
    collectionIds?: string[]
    temperature?: number
    threshold?: number
    value?: {
      phoneNumber?: string
    }
  }
}
