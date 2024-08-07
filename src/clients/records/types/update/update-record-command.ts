import { UpdateRecordProperty } from './update-record-property'

export type UpdateRecordCommand = {
  properties?: Record<string, UpdateRecordProperty> | null
}
