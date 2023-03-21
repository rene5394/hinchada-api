import { Module } from '@nestjs/common';
import { JerseyService } from './jersey.service';
import { JerseyController } from './jersey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jersey } from './entities/jersey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jersey])],
  controllers: [JerseyController],
  providers: [JerseyService]
})
export class JerseyModule {}
