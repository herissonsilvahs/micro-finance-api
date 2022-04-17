import { IsNotEmpty, IsOptional } from "class-validator"

export default class CreateTransactionDto {
  @IsNotEmpty()
  name!: string

  @IsOptional()
  description?: string

  @IsNotEmpty()
  type!: string

  @IsNotEmpty()
  value!: number

  @IsNotEmpty()
  date!: Date

  @IsNotEmpty()
  account!: string

  @IsNotEmpty()
  category!: string
}
