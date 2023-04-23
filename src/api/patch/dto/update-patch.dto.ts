import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';
import { CreatePatchDto } from './create-patch.dto';

export class UpdatePatchDto extends PartialType(CreatePatchDto) {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsBoolean()
  @Transform(({ value } ) => value === 'true')
  isActive: boolean;
}
