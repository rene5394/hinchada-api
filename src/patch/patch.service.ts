import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatchDto } from './dto/create-patch.dto';
import { UpdatePatchDto } from './dto/update-patch.dto';
import { Patch } from './entities/patch.entity';

@Injectable()
export class PatchService {
  constructor(
    @InjectRepository(Patch)
    private patchRepository: Repository<Patch>
  ) {}

  async create(createPatchDto: CreatePatchDto) {
    return await this.patchRepository.save(createPatchDto);
  }

  async findAll(): Promise<Patch[]> {
    return await this.patchRepository.find();
  }

  async findOne(id: number): Promise<Patch> {
    return await this.patchRepository.findOneBy({ id });
  }

  async update(id: number, updatePatchDto: UpdatePatchDto) {
    return await this.patchRepository.update(id, updatePatchDto);
  }

  async remove(id: number) {
    return await this.patchRepository.delete(id);
  }
}
