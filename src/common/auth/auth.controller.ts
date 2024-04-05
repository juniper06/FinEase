import { Public } from '@/common/auth/auth.decorator';
import { AuthLoginDto } from '@/common/auth/auth.dto';
import { AuthService } from '@/common/auth/auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: AuthLoginDto) {
    return this.authService.login(loginDto.username, loginDto.password);
  }
}
