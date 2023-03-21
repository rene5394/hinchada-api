import { Injectable } from '@nestjs/common';
import { CreatePatchDto } from './dto/create-patch.dto';
import { UpdatePatchDto } from './dto/update-patch.dto';

@Injectable()
export class PatchService {
  create(createPatchDto: CreatePatchDto) {
    return 'This action adds a new patch';
  }

  findAll() {
    return `This action returns all patch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patch`;
  }

  update(id: number, updatePatchDto: UpdatePatchDto) {
    return `This action updates a #${id} patch`;
  }

  remove(id: number) {
    return `This action removes a #${id} patch`;
  }
}
