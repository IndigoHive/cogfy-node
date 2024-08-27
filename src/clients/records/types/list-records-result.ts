import { Page } from '../../../types'
import { RecordProperty } from './record-property'

export type ListRecordsResultData = {
  id: string
  properties: Record<string, RecordProperty>
}

export type ListRecordsResult = Page<ListRecordsResultData>
