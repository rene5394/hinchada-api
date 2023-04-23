import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';
import { CreateLeagueDto } from './create-league.dto';

export class UpdateLeagueDto extends PartialType(CreateLeagueDto) {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsBoolean()
  @Transform(({ value } ) => value === 'true')
  isActive: boolean;
}
