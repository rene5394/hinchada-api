import { Kit } from 'src/api/kit/entities/kit.entity';
import { Team } from 'src/api/team/entities/team.entity';
import { Version } from 'src/api/version/entities/version.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Patch } from '../../patch/entities/patch.entity';
import { Size } from 'src/api/size/entities/size.entity';

@Entity('jerseys')
export class Jersey {
  @PrimaryGeneratedColumn({ type: 'int'})
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'smallint' })
  quantity: number;

  @ManyToOne(() => Team, team => team.jersey)
  team: Team;

  @Column()
  teamId: number;

  @ManyToOne(() => Kit, kit => kit.jerseys)
  kit: Kit;

  @Column()
  kitId: number;

  @ManyToOne(() => Size, size => size.jerseys)
  size: Version;

  @Column()
  sizeId: number;

  @ManyToOne(() => Version, version => version.jerseys)
  version: Version;

  @Column()
  versionId: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Patch, patch => patch.jerseys)
  @JoinTable({ name: 'jerseys_patches' })
  patches: Patch[];
}
