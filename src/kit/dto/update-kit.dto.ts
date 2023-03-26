import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';
import { CreateKitDto } from './create-kit.dto';

export class UpdateKitDto extends PartialType(CreateKitDto) {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsBoolean()
  @Transform(({ value } ) => value === 'true')
  isActive: boolean;
}
