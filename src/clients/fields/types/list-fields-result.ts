import { FieldType } from './field-type'

export type ListFieldsResultData = {
  id: string
  name: string
  type: FieldType
  operation: string | null
}

export type ListFieldsResult = {
  data: ListFieldsResultData[]
}
