import { CreateIncomeTransactionDto } from '@/income-transaction/dto/create-income-transaction.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateIncomeTransactionDto extends PartialType(
  CreateIncomeTransactionDto,
) {}
