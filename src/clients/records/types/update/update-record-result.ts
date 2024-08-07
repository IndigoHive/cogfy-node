import { UpdateRecordProperty } from './update-record-property'

export type UpdateRecordResult = {
  id: string
  properties: Record<string, UpdateRecordProperty>
}
