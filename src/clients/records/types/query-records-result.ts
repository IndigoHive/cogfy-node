import { RecordProperty } from './record-property'

export type QueryRecordsResultData = {
  id: string
  properties: Record<string, RecordProperty>
}

export type QueryRecordsResult = {
  data: QueryRecordsResultData[]
  totalSize: number
}
