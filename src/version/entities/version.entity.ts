import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('version')
export class Version {
  @PrimaryGeneratedColumn({ type: 'tinyint'})
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;
}
