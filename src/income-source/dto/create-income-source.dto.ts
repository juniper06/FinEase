import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateIncomeSourceDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  budget: number;
}
