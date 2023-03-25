import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJerseyDto } from './dto/create-jersey.dto';
import { UpdateJerseyDto } from './dto/update-jersey.dto';
import { Jersey } from './entities/jersey.entity';

@Injectable()
export class JerseyService {
  constructor(
    @InjectRepository(Jersey)
    private jerseyRepository: Repository<Jersey>
  ) {}

  async create(createJerseyDto: CreateJerseyDto) {
    return await this.jerseyRepository.save(createJerseyDto);
  }

  async findAll(): Promise<Jersey[]> {
    return await this.jerseyRepository.find();
  }

  async findOne(id: number): Promise<Jersey> {
    return await this.jerseyRepository.findOneBy({ id });
  }

  async update(id: number, updateJerseyDto: UpdateJerseyDto) {
    return await this.jerseyRepository.update(id, updateJerseyDto);
  }

  async remove(id: number) {
    return await this.jerseyRepository.delete(id);
  }
}
