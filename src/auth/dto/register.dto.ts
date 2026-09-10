import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Düzgün e-poçt ünvanı daxil edin' })
  @IsNotEmpty({ message: 'E-poçt boş ola bilməz' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Şifrə minimum 8 simvoldan ibarət olmalıdır' })
  @IsNotEmpty({ message: 'Şifrə boş ola bilməz' })
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}