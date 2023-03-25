import { League } from 'src/league/entities/league.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn({ type: 'smallint'})
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @OneToOne(() => League) @JoinColumn()
  league: League;
}
