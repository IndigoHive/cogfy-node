import { BooleanRecordProperty, NumberRecordProperty, TextRecordProperty } from './record-property';

export type CreateRecordProperty =
  BooleanRecordProperty |
  NumberRecordProperty |
  TextRecordProperty

export type CreateRecordCommand = {
  properties?: Record<string, CreateRecordProperty> | null
}
