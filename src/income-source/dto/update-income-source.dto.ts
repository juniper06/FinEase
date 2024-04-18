import { CreateIncomeSourceDto } from '@/income-source/dto/create-income-source.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateIncomeSourceDto extends PartialType(CreateIncomeSourceDto) {}
