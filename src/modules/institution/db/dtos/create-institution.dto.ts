import { IsNotEmpty } from 'class-validator'

export default class CreateInstitutionDto {
  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
  color!: string
}
