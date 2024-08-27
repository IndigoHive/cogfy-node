import { RecordProperty } from './record-property'

export type UpdateRecordResult = {
  id: string
  properties: Record<string, RecordProperty>
}
