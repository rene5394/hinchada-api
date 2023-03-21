import { PartialType } from '@nestjs/mapped-types';
import { CreateJerseyDto } from './create-jersey.dto';

export class UpdateJerseyDto extends PartialType(CreateJerseyDto) {}
