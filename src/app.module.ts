import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JerseyModule } from './jersey/jersey.module';
import { KitModule } from './kit/kit.module';
import { PatchModule } from './patch/patch.module';
import { SizeModule } from './size/size.module';
import { TeamModule } from './team/team.module';
import { VersionModule } from './version/version.module';
import { LeagueModule } from './league/league.module';

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
