import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Jersey } from 'src/jersey/entities/jersey.entity';

@Entity()
export class Patch {
  @PrimaryGeneratedColumn({ type: 'tinyint'})
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
