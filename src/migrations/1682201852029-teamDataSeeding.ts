import { League } from 'src/league/entities/league.entity';
import { Team } from 'src/team/entities/team.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class teamDataSeeding1682201852029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const leagues = await queryRunner.manager.find(League);
      
      const teams = [
        { name: 'Real Madrid', leagueId: leagues.find(league => league.name === 'La Liga').id },
        { name: 'Barcelona', leagueId: leagues.find(league => league.name === 'La Liga').id },
        { name: 'Atletico de Madrid', leagueId: leagues.find(league => league.name === 'La Liga').id },
        { name: 'Manchester City', leagueId: leagues.find(league => league.name === 'Premier League').id },
        { name: 'Manchester United', leagueId: leagues.find(league => league.name === 'Premier League').id },
        { name: 'Liverpool', leagueId: leagues.find(league => league.name === 'Premier League').id },
        { name: 'Chelsea', leagueId: leagues.find(league => league.name === 'Premier League').id },
        { name: 'Arsenal', leagueId: leagues.find(league => league.name === 'Premier League').id },
        { name: 'Tottenham', leagueId: leagues.find(league => league.name === 'Premier League').id },
        { name: 'Bayern Munich', leagueId: leagues.find(league => league.name === 'Bundesliga').id },
        { name: 'Borussia Dortmund', leagueId: leagues.find(league => league.name === 'Bundesliga').id },
        { name: 'Juventus', leagueId: leagues.find(league => league.name === 'Serie A').id },
        { name: 'AC Milan', leagueId: leagues.find(league => league.name === 'Serie A').id },
        { name: 'Inter Milan', leagueId: leagues.find(league => league.name === 'Serie A').id },
        { name: 'Napoli', leagueId: leagues.find(league => league.name === 'Serie A').id },
        { name: 'París Saint-Germain', leagueId: leagues.find(league => league.name === 'Ligue 1').id },
        { name: 'Ajax', leagueId: leagues.find(league => league.name === 'Eredivisie').id },
        { name: 'Boca Juniors', leagueId: leagues.find(league => league.name === 'Primera División de Argentina').id },
        { name: 'River Plate', leagueId: leagues.find(league => league.name === 'Primera División de Argentina').id },
        { name: 'America', leagueId: leagues.find(league => league.name === 'Liga MX').id },
        { name: 'Chivas', leagueId: leagues.find(league => league.name === 'Liga MX').id },
        { name: 'Pumas', leagueId: leagues.find(league => league.name === 'Liga MX').id },
        { name: 'Lakers', leagueId: leagues.find(league => league.name === 'NBA').id },
        { name: 'Warriors', leagueId: leagues.find(league => league.name === 'NBA').id },
        { name: 'Cavaliers', leagueId: leagues.find(league => league.name === 'NBA').id },
        { name: 'Celtics', leagueId: leagues.find(league => league.name === 'NBA').id },
        { name: 'Argentina', leagueId: leagues.find(league => league.name === 'National Teams').id },
        { name: 'Brazil', leagueId: leagues.find(league => league.name === 'National Teams').id },
        { name: 'France', leagueId: leagues.find(league => league.name === 'National Teams').id },
        { name: 'Germany', leagueId: leagues.find(league => league.name === 'National Teams').id },
        { name: 'Japan', leagueId: leagues.find(league => league.name === 'National Teams').id },
        { name: 'Portugal', leagueId: leagues.find(league => league.name === 'National Teams').id },
        { name: 'Spain', leagueId: leagues.find(league => league.name === 'National Teams').id },
        { name: 'Uruguay', leagueId: leagues.find(league => league.name === 'National Teams').id }
      ];

      await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Team)
      .values(teams)
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
