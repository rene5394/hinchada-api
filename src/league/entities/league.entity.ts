import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('leagues')
export class League {
  @PrimaryGeneratedColumn({ type: 'tinyint'})
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
