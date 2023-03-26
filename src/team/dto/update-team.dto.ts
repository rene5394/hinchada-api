import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';
import { IsBoolean, IsNotEmpty, IsNumber, MaxLength, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsBoolean()
  @Transform(({ value } ) => value === 'true')
  isActive: boolean;

  @IsNumber()
  @Min(1)
  leagueId: number;
}
