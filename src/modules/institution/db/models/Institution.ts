import { Schema, model } from 'mongoose'

export interface iInstitution {
  name: string,
  color: string
}

const InstitutionSchema = new Schema<iInstitution>({
  name: { type: String, required: true },
  color: { type: String, required: true }
}, {
  timestamps: true
})

const Institution = model<iInstitution>('Institution', InstitutionSchema)

export { InstitutionSchema, Institution }
