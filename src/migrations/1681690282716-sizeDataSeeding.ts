import { Size } from 'src/api/size/entities/size.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class sizeDataSeeding1681690282716 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Size)
      .values([
        { name: 'S' },
        { name: 'M' },
        { name: 'L' },
        { name: 'XL' },
        { name: '2XL' },
        { name: '3XL' },
        { name: '4XL' }
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Size)
      .whereInIds([1, 2, 3, 4, 5, 6, 7])
      .execute();
  }

}
