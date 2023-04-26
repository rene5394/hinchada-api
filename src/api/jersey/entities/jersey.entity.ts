import { Kit } from '../../kit/entities/kit.entity';
import { Team } from '../../team/entities/team.entity';
import { Version } from '../../version/entities/version.entity';
import { Patch } from '../../patch/entities/patch.entity';
import { Size } from '../../size/entities/size.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
