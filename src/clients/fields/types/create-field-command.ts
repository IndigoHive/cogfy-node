import { FieldType } from './field-type'

export type CreateFieldCommand = {
  type: FieldType
  name: string
}
