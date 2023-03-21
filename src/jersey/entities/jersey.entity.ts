import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Patch } from '../../patch/entities/patch.entity';

@Entity()
export class Jersey {
  @PrimaryGeneratedColumn({ type: 'int'})
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'smallint' })
  quantity: number;

  @Column({ type: 'smallint' })
  teamId: number;

  @Column({ type: 'smallint' })
  kitId: number;

  @Column({ type: 'smallint' })
  versionId: number;

  @Column({ default: true })
  isActive: boolean;
}
