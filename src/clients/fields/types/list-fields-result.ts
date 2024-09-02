import { FieldData, FieldType } from './field-type'

export type ListFieldsResult = {
  id: string
  name: string
  type: FieldType
  order: number
  data: FieldData | null
  operation: string | null
  operationConfig: object | null
}
