import { Patch } from "src/patch/entities/patch.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class patchDataSeeding1682200438726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Patch)
      .values([
        { name: 'Champions League' },
        { name: 'Europa League' },
        { name: 'World Club Winner' },
        { name: 'La Liga' },
        { name: 'Premier League' },
        { name: 'Bundesliga' },
        { name: 'Serie A' },
        { name: 'Ligue 1' },
        { name: 'Primeira Liga' },
        { name: 'Eredivisie' },
        { name: 'Primera División de Argentina' },
        { name: 'Campeonato Brasileño de Serie A' },
        { name: 'Liga MX' },
        { name: 'World Cup' },
        { name: 'Euro' },
        { name: 'Copa America' },
        { name: 'Champion World Cup' },
        { name: 'Champion Euro' },
        { name: 'Champion Copa America' },
        { name: 'NBA' }
      ])
      .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Patch)
      .whereInIds([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20
      ])
      .execute();
    }

}
