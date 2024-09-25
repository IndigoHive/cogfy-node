import { BooleanRecordProperty, DateRecordProperty, NumberRecordProperty, SelectRecordProperty, TextRecordProperty } from './record-property';

export type UpdateRecordProperty =
  BooleanRecordProperty |
  DateRecordProperty |
  NumberRecordProperty |
  SelectRecordProperty |
  TextRecordProperty

export type UpdateRecordCommand = {
  properties?: Record<string, UpdateRecordProperty> | null
}
