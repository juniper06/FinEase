import { AuthGuard } from '@/common/auth/auth.guard';
import { PrismaModule } from '@/common/prisma/prisma.module';
import { UserModule } from '@/user/user.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './common/auth/auth.module';
import { IncomeTransactionModule } from './income-transaction/income-transaction.module';
import { IncomeSourceModule } from './income-source/income-source.module';
import { BudgetProposalModule } from './budget-proposal/budget-proposal.module';
import { FinancialRatioModule } from './financial-ratio/financial-ratio.module';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseCategoryModule } from './expense-category/expense-category.module';
import { ExpenseFrequencyModule } from './expense-frequency/expense-frequency.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    AuthModule,
    AccountModule,
    PrismaModule,
    UserModule,
    IncomeTransactionModule,
    IncomeSourceModule,
    BudgetProposalModule,
    FinancialRatioModule,
    ExpenseModule,
    ExpenseCategoryModule,
    ExpenseFrequencyModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
