import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn({ type: 'smallint'})
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;
}
