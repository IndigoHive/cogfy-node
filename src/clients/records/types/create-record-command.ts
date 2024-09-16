import {
  BooleanRecordProperty,
  DateRecordProperty,
  NumberRecordProperty,
  SelectRecordProperty,
  TextRecordProperty
} from './record-property'

export type CreateRecordProperty =
  BooleanRecordProperty |
  DateRecordProperty |
  NumberRecordProperty |
  SelectRecordProperty |
  TextRecordProperty

export type CreateRecordCommand = {
  properties?: Record<string, CreateRecordProperty> | null
}
