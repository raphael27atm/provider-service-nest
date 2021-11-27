import { IsString, MaxLength, MinLength, Equals } from 'class-validator';

export class AuthCredentialsDto {
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;

  @IsString()
  @MinLength(8, {
    message: 'Password Confirmation is too short (8 characters min)',
  })
  @MaxLength(20, {
    message: 'Password Confirmation is too long (20 characters max)',
  })
  @Equals('password')
  passwordConfirmation: string;
}
