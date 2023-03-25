import { League } from 'src/league/entities/league.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn({ type: 'smallint'})
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => League) @JoinColumn()
  league: League;
}
