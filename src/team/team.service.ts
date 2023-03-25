import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    return await this.teamRepository.save(createTeamDto);
  }

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  async findOne(id: number): Promise<Team> {
    return await this.teamRepository.findOneBy({ id });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    return await this.teamRepository.update(id, updateTeamDto);
  }

  async remove(id: number) {
    return await this.teamRepository.delete(id);
  }
}
