import { Jersey } from 'src/api/jersey/entities/jersey.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kits')
export class Kit {
  @PrimaryGeneratedColumn({ type: 'smallint'})
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Jersey, jersey => jersey.kit)
  jerseys: Jersey[];
}
