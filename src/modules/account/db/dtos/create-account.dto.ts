import { IsNotEmpty } from 'class-validator'

export class CreateAccountDto {
  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
	initialBalance!: number

  @IsNotEmpty()
	type!: string

  @IsNotEmpty()
  institution!: string
}
