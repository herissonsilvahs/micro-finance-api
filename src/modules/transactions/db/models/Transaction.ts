import { Schema, model, Types } from 'mongoose'

export enum TransactionTypes {
  INCOME='income',
  EXPENSE='expense'
}

enum Status {
  COMPLETED='completed',
  DISABLED='disabled',
  CANCELED='canceled'
}

export interface iTransaction {
  name: string,
  description: string,
  type: TransactionTypes,
  status: Status,
  value: number,
  closed: Date,
  date: Date,
  account: Types.ObjectId,
  isRecurrent: boolean,
  category: Types.ObjectId
}

const TransactionSchema = new Schema<iTransaction>({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true },
  status: { type: String, default: Status.COMPLETED },
  value: { type: Number, default: 0 },
  closed: { type: Date },
  date: { type: Date },
  account: { type: Schema.Types.ObjectId, ref: 'Account' },
  isRecurrent: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
}, {
  timestamps: true
})

const Transaction = model<iTransaction>('Transaction', TransactionSchema)

export { TransactionSchema, Transaction }
