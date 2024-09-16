import {
  BooleanRecordProperty,
  DateRecordProperty,
  NumberRecordProperty,
  TextRecordProperty
} from './record-property'

export type CreateRecordProperty =
  BooleanRecordProperty |
  DateRecordProperty |
  NumberRecordProperty |
  TextRecordProperty

export type CreateRecordCommand = {
  properties?: Record<string, CreateRecordProperty> | null
}
