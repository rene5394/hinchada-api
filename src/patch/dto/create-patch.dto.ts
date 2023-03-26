import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreatePatchDto {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isActive: boolean;
}
