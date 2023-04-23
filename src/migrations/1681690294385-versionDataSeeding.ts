import { Version } from 'src/api/version/entities/version.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class versionDataSeeding1681690294385 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Version)
      .values([
        { name: 'Fan' },
        { name: 'Player' }
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Version)
      .whereInIds([1, 2])
      .execute();
  }

}
