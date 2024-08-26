import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExpensesDto {
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  categoryId: number;

  @IsNotEmpty()
  @IsString()
  transactionDate: string;

  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  modeOfPayment: string;

  @IsNotEmpty()
  @IsString()
  referenceNumber: string;
}