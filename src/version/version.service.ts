import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  findAll() {
    return `This action returns all version`;
  }

  findOne(id: number) {
    return `This action returns a #${id} version`;
  }
}
