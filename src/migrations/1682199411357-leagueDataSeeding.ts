import { League } from "src/league/entities/league.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class leagueDataSeeding1682199411357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(League)
      .values([
        { name: 'National Teams' },
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
        { name: 'NBA' }
      ])
      .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(League)
      .whereInIds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      .execute();
    }

}
