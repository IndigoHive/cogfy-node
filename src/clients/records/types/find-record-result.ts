import type { RecordProperty } from './record-property'

export type FindRecordResult = {
  id: string
  properties: Record<string, RecordProperty>
}
