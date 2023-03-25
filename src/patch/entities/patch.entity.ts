import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patch {
  @PrimaryGeneratedColumn({ type: 'tinyint'})
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
