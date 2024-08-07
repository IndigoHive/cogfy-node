import { DatabaseRecordProperty } from '../../../types'

export type UpdateRecordCommand = {
  properties?: Record<string, DatabaseRecordProperty> | null
}
