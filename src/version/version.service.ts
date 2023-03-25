import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Version } from './entities/version.entity';

@Injectable()
export class VersionService {
  constructor(
    @InjectRepository(Version)
    private versionRepository: Repository<Version>
  ) {}

  async findAll(): Promise<Version[]> {
    return await this.versionRepository.find();
  }

  async findOne(id: number): Promise<Version> {
    return await this.versionRepository.findOneBy({ id });
  }
}
