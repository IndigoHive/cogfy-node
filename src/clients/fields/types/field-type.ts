import type {
  AuthorFieldData,
  BooleanFieldData,
  ChatFieldData,
  CreateDateFieldData,
  DateFieldData,
  FileFieldData,
  JsonFieldData,
  NumberFieldData,
  ReferenceFieldData,
  SelectFieldData,
  StopwatchData,
  TextFieldData,
  UpdateDateFieldData,
  VectorFieldData,
  WhatsAppFieldData
} from './field-data'
import { RecalculateStrategy } from './recalculate-strategy'

export type BaseField<TType extends FieldType, TData extends Partial<Record<TType, unknown>>> = {
  id: string
  name: string
  order: number
  type: TType
  recalculateStrategy: RecalculateStrategy
  data?: TData | null
  operation?: string | null
  operationConfig?: object | null
}

export type AuthorField = BaseField<'author', AuthorFieldData>

export type BooleanField = BaseField<'boolean', BooleanFieldData>

export type ChatField = BaseField<'chat', ChatFieldData>

export type CreateDateField = BaseField<'createDate', CreateDateFieldData>

export type DateField = BaseField<'date', DateFieldData>

export type FileField = BaseField<'file', FileFieldData>

export type JsonField = BaseField<'json', JsonFieldData>

export type NumberField = BaseField<'number', NumberFieldData>

export type ReferenceField = BaseField<'reference', ReferenceFieldData>

export type SelectField = BaseField<'select', SelectFieldData>

export type StopwatchField = BaseField<'stopwatch', StopwatchData>

export type TextField = BaseField<'text', TextFieldData>

export type UpdateDateField = BaseField<'updateDate', UpdateDateFieldData>

export type VectorField = BaseField<'vector', VectorFieldData>

export type WhatsAppField = BaseField<'whatsApp', WhatsAppFieldData>

export type Field =
  AuthorField |
  BooleanField |
  ChatField |
  CreateDateField |
  DateField |
  FileField |
  JsonField |
  NumberField |
  ReferenceField |
  SelectField |
  StopwatchField |
  TextField |
  UpdateDateField |
  VectorField |
  WhatsAppField

export type FieldData = Field['data']

export type FieldType = Field['type']
