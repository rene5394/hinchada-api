import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { League } from './entities/league.entity';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(League)
    private leagueRepository: Repository<League>
  ) {}

  async create(createLeagueDto: CreateLeagueDto) {
    return await this.leagueRepository.save(createLeagueDto);
  }

  async findAll(): Promise<League[]> {
    return await this.leagueRepository.find();
  }

  async findOne(id: number): Promise<League> {
    return await this.leagueRepository.findOneBy({ id });
  }

  async update(id: number, updateLeagueDto: UpdateLeagueDto) {
    return await this.leagueRepository.update(id, updateLeagueDto);
  }

  async remove(id: number) {
    return await this.leagueRepository.delete(id);
  }
}
