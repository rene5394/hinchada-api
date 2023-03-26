import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, Max, MaxLength, Min } from 'class-validator';
import { CreateJerseyDto } from './create-jersey.dto';

export class UpdateJerseyDto extends PartialType(CreateJerseyDto) {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsInt()
  @Min(0)
  @Max(999)
  quantity: number;

  @Min(1)
  teamId: number;

  @Min(1)
  kitId: number;

  @Min(1)
  versionId: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  patchIds: number[];

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isActive: boolean;
}
