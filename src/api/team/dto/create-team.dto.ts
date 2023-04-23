import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength, Min } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  @Min(1)
  leagueId: number;
}
