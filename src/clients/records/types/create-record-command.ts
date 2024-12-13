import {
  BooleanRecordProperty,
  DateRecordProperty,
  JsonRecordProperty,
  NumberRecordProperty,
  ScheduleRecordProperty,
  SelectRecordProperty,
  TextRecordProperty
} from './record-property'

export type CreateRecordProperty =
  BooleanRecordProperty |
  DateRecordProperty |
  JsonRecordProperty |
  NumberRecordProperty |
  ScheduleRecordProperty |
  SelectRecordProperty |
  TextRecordProperty

export type CreateRecordCommand = {
  properties?: Record<string, CreateRecordProperty> | null
}
