import { Kit } from 'src/kit/entities/kit.entity';
import { Team } from 'src/team/entities/team.entity';
import { Version } from 'src/version/entities/version.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Patch } from '../../patch/entities/patch.entity';

@Entity('jerseys')
export class Jersey {
  @PrimaryGeneratedColumn({ type: 'int'})
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'smallint' })
  quantity: number;

  @OneToOne(() => Team) @JoinColumn()
  team: Team;

  @OneToOne(() => Kit) @JoinColumn()
  kit: Kit;

  @OneToOne(() => Version) @JoinColumn()
  version: Version;

  @ManyToMany(() => Patch)
  @JoinTable({ name: 'jersey_patches' })
  patches: Patch[];

  @Column({ default: true })
  isActive: boolean;
}
