import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './common/auth/auth.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CategoryModule } from './category/category.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ItemModule } from './item/item.module';
@Module({
  imports: [AuthModule, PrismaModule, UserModule, ProjectModule, CustomerModule, InvoiceModule, CategoryModule, ExpensesModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
