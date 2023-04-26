import { Jersey } from '../../jersey/entities/jersey.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sizes')
export class Size {
  @PrimaryGeneratedColumn({ type: 'tinyint'})
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => Jersey, jersey => jersey.size)
  jerseys: Jersey[];
}
