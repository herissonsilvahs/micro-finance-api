import { Schema, model, Types } from 'mongoose'

export enum AccountTypes {
  SAVINGS='savings',
  CHECKINGS='checkings',
  INVESTMENTS='investments'
}

enum Status {
  ENABLED='enabled',
  DISABLED='disabled'
}

export interface iAccount {
  name: string,
  type: AccountTypes,
  status: Status,
  initialBalance: number,
  balance: number,
  institution: Types.ObjectId
}

const AccountSchema = new Schema<iAccount>({
  name: { type: String, required: true },
  balance: { type: Number, default: 0 },
  initialBalance: { type: Number, default: 0 },
  status: { type: String, required: true, default: Status.ENABLED },
  type: { type: String, required: true },
  institution: { type: Schema.Types.ObjectId, ref: 'Institution' }
}, {
  timestamps: true
})

const Account = model<iAccount>('Account', AccountSchema)

export { AccountSchema, Account }
