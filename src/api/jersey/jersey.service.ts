import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateJerseyDto } from './dto/create-jersey.dto';
import { UpdateJerseyDto } from './dto/update-jersey.dto';
import { Jersey } from './entities/jersey.entity';
import { Patch } from '../patch/entities/patch.entity';

@Injectable()
export class JerseyService {
  constructor(
    @InjectRepository(Jersey)
    private jerseyRepository: Repository<Jersey>,
    @InjectRepository(Patch)
    private readonly patchRepository: Repository<Patch>
  ) {}

  async create(createJerseyDto: CreateJerseyDto) {
    const patches = await this.patchRepository.findBy({ id: In(createJerseyDto.patches) });
    const jersey = this.jerseyRepository.create({ ...createJerseyDto, patches });

    return await this.jerseyRepository.save(jersey);
  }

  async findAll(): Promise<Jersey[]> {
    return await this.jerseyRepository.find({
      relations: {
        patches: true
      }
    });
  }

  async findOne(id: number): Promise<Jersey> {
    return await this.jerseyRepository.findOne({
      where: { id },
      relations: {
        patches: true
      }
    });
  }

  async update(id: number, updateJerseyDto: UpdateJerseyDto) {
    const patches = await this.patchRepository.findBy({ id: In(updateJerseyDto.patches) });
    const oldJersey = await this.findOne(id);

    const jersey = this.jerseyRepository.create({
      ...oldJersey,
      ...updateJerseyDto,
      patches,
    });

    return await this.jerseyRepository.save(jersey);
  }

  async remove(id: number) {
    return await this.jerseyRepository.delete(id);
  }
}
