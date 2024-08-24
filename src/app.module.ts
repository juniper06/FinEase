import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './common/auth/auth.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, ProjectModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
