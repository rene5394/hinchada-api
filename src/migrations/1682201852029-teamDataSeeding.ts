import { Team } from "src/team/entities/team.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class teamDataSeeding1682201852029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Team)
      .values([
        { name: 'Real Madrid', league: {id: 2} },
        { name: 'Barcelona', league: {id: 2} },
        { name: 'Atletico de Madrid', league: {id: 2} },
        { name: 'Manchester City', league: {id: 3} },
        { name: 'Manchester United', league: {id: 3} },
        { name: 'Liverpool', league: {id: 3} },
        { name: 'Chelsea', league: {id: 3} },
        { name: 'Arsenal', league: {id: 3} },
        { name: 'Tottenham', league: {id: 3} },
        { name: 'Bayern Munich', league: {id: 4} },
        { name: 'Borussia Dortmund', league: {id: 4} },
        { name: 'Juventus', league: {id: 5} },
        { name: 'AC Milan', league: {id: 5} },
        { name: 'Inter Milan', league: {id: 5} },
        { name: 'Napoli', league: {id: 5} },
        { name: 'París Saint-Germain', league: {id: 6} },
        { name: 'Ajax', league: {id: 8} },
        { name: 'Boca Juniors', league: {id: 9} },
        { name: 'River Plate', league: {id: 9} },
        { name: 'America', league: {id: 11} },
        { name: 'Chivas', league: {id: 11} },
        { name: 'Pumas', league: {id: 11} },
        { name: 'Lakers', league: {id: 11} },
        { name: 'Warriors', league: {id: 12} },
        { name: 'Cavaliers', league: {id: 12} },
        { name: 'Celtics', league: {id: 12} },
        { name: 'Argentina', league: {id: 1} },
        { name: 'Brazil', league: {id: 1} },
        { name: 'France', league: {id: 1} },
        { name: 'Germany', league: {id: 1} },
        { name: 'Japan', league: {id: 1} },
        { name: 'Portugal', league: {id: 1} },
        { name: 'Spain', league: {id: 1} },
        { name: 'Uruguay', league: {id: 1} }
      ])
      .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Team)
      .whereInIds([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34
      ])
      .execute();
    }

}
