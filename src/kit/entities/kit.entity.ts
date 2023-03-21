import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kit {
  @PrimaryGeneratedColumn({ type: 'smallint'})
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
