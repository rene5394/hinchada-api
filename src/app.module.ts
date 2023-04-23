import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JerseyModule } from './api/jersey/jersey.module';
import { KitModule } from './api/kit/kit.module';
import { PatchModule } from './api/patch/patch.module';
import { SizeModule } from './api/size/size.module';
import { TeamModule } from './api/team/team.module';
import { VersionModule } from './api/version/version.module';
import { LeagueModule } from './api/league/league.module';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    autoLoadEntities: true,
    synchronize: JSON.parse(process.env.DATABASE_SYNCHRONIZE),
    extra: {
      connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT)
    }
  }),
    VersionModule,
    JerseyModule,
    TeamModule,
    KitModule,
    SizeModule,
    PatchModule,
    LeagueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
