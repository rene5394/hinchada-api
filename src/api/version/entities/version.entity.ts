import { Jersey } from '../../jersey/entities/jersey.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('versions')
export class Version {
  @PrimaryGeneratedColumn({ type: 'tinyint'})
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => Jersey, jersey => jersey.version)
  jerseys: Jersey[];
}
