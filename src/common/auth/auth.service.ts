import { PrismaService } from '@/common/prisma/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.prisma.user.findUnique({
      select: {
        id: true,
        password: true,
      },
      where: {
        username,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Username not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Incorrect password');
    }
    const payload = { userId: user.id };
    return {
      data: {
        token: await this.jwtService.signAsync(payload),
      },
    };
  }
}
