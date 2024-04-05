import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
