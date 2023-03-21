import { Injectable } from '@nestjs/common';
import { CreateJerseyDto } from './dto/create-jersey.dto';
import { UpdateJerseyDto } from './dto/update-jersey.dto';

@Injectable()
export class JerseyService {
  create(createJerseyDto: CreateJerseyDto) {
    return 'This action adds a new jersey';
  }

  findAll() {
    return `This action returns all jersey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jersey`;
  }

  update(id: number, updateJerseyDto: UpdateJerseyDto) {
    return `This action updates a #${id} jersey`;
  }

  remove(id: number) {
    return `This action removes a #${id} jersey`;
  }
}
