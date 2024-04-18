import { Module } from '@nestjs/common';
import { FinancialRatioService } from './financial-ratio.service';
import { FinancialRatioController } from './financial-ratio.controller';

@Module({
  controllers: [FinancialRatioController],
  providers: [FinancialRatioService],
})
export class FinancialRatioModule {}
