import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialRatioDto } from './create-financial-ratio.dto';

export class UpdateFinancialRatioDto extends PartialType(CreateFinancialRatioDto) {}
