import { AuthGuard } from '@/common/auth/auth.guard';
import { PrismaModule } from '@/common/prisma/prisma.module';
import { UserModule } from '@/user/user.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './common/auth/auth.module';

@Module({
  imports: [AuthModule, AccountModule, PrismaModule, UserModule],
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
