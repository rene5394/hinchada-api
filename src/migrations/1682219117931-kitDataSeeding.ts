import { Kit } from 'src/api/kit/entities/kit.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class kitDataSeeding1682219117931 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Kit)
      .values([
        { name: 'Home 22/23' },
        { name: 'Away 22/23' },
        { name: 'Third 22/23' },
        { name: 'Special Edition 22/23' }
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Kit)
      .whereInIds([1, 2, 3, 4])
      .execute();
  }

}
