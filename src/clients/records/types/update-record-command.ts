import { BooleanRecordProperty, NumberRecordProperty, TextRecordProperty } from './record-property';

export type UpdateRecordProperty =
  BooleanRecordProperty |
  NumberRecordProperty |
  TextRecordProperty

export type UpdateRecordCommand = {
  properties?: Record<string, UpdateRecordProperty> | null
}
