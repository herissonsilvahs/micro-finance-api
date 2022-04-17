import { Schema, model } from 'mongoose'

export enum CategoryTypes {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export enum Status {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export interface iCategory {
  name: string
  icon: string
  type: CategoryTypes
  status: Status
}

export const CategorySchema = new Schema<iCategory>(
  {
    name: { type: String, required: true },
    icon: { type: String },
    type: { type: String, required: true },
    status: { type: String, default: Status.ENABLED },
  },
  {
    timestamps: true,
  },
)

export default model<iCategory>('Category', CategorySchema)
