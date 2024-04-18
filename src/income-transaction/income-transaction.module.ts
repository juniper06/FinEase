import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { IncomeTransactionController } from './income-transaction.controller';
import { IncomeTransactionService } from './income-transaction.service';

@Module({
  controllers: [IncomeTransactionController],
  providers: [IncomeTransactionService],
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),
  ],
})
export class IncomeTransactionModule {}
