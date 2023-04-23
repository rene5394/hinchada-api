import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKitDto } from './dto/create-kit.dto';
import { UpdateKitDto } from './dto/update-kit.dto';
import { Kit } from './entities/kit.entity';

@Injectable()
export class KitService {
  constructor(
    @InjectRepository(Kit)
    private KitRepository: Repository<Kit>
  ) {}

  async create(createKitDto: CreateKitDto) {
    return await this.KitRepository.save(createKitDto);
  }

  async findAll(): Promise<Kit[]> {
    return await this.KitRepository.find();
  }

  async findOne(id: number) {
    return await this.KitRepository.findOneBy({ id });
  }

  async update(id: number, updateKitDto: UpdateKitDto) {
    return await this.KitRepository.update(id, updateKitDto);
  }

  async remove(id: number) {
    return await this.KitRepository.delete(id);
  }
}
