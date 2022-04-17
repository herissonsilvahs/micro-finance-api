import CreateInstitutionDto from './db/dtos/create-institution.dto'
import { Institution, iInstitution } from './db/models/Institution'

class InstitutionService {
  async create(institution: CreateInstitutionDto): Promise<iInstitution> {
    const institutionCreated = await Institution.create(institution)
    console.log('LOG INSTITUTION CREATED: ', institutionCreated)
    return institutionCreated
  }
}

export default InstitutionService
