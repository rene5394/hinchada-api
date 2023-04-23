import { Jersey } from 'src/api/jersey/entities/jersey.entity';
import { League } from 'src/api/league/entities/league.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn({ type: 'smallint'})
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Jersey, jersey => jersey.team)
  jersey: Jersey[];

  @ManyToOne(() => League, league => league.teams)
  league: League;

  @Column()
  leagueId: number;
}
