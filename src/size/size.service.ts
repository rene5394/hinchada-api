import { Injectable } from '@nestjs/common';

@Injectable()
export class SizeService {
  findAll() {
    return `This action returns all size`;
  }

  findOne(id: number) {
    return `This action returns a #${id} size`;
  }
}
