import { Jersey } from 'src/api/jersey/entities/jersey.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patches')
export class Patch {
  @PrimaryGeneratedColumn({ type: 'tinyint'})
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Jersey, jersey => jersey.patches)
  @JoinTable({ name: 'jerseys_patches' })
  jerseys: Jersey[];
}
