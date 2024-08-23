import { RecordFilterData } from './record-filter-data'

export type ListRecordQueryCommandFilter = {
  type: 'and'
  and: {
    filters: RecordFilterData[]
  }
}

export type ListRecordQueryCommandOrderBy = {
  fieldId: string
  direction: 'asc' | 'desc'
}

export type ListRecordsQueryCommand = {
  filter?: ListRecordQueryCommandFilter | null
  orderBy?: ListRecordQueryCommandOrderBy | null
}
