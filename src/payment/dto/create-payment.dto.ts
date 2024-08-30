import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  customerId: number;

  @IsNotEmpty()
  @IsString()
  dateOfPayment: string;

  @IsNotEmpty()
  @IsString()
  paymentNumber: string;

  @IsNotEmpty()
  @IsString()
  modeOfPayment: string;

  @IsNotEmpty()
  @IsString()
  referenceNumber: string;

  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  invoiceId: number;
}