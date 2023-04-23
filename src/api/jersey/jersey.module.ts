import { Module } from '@nestjs/common';
import { JerseyService } from './jersey.service';
import { JerseyController } from './jersey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jersey } from './entities/jersey.entity';
import { Patch } from '../patch/entities/patch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jersey, Patch])],
  controllers: [JerseyController],
  providers: [JerseyService]
})
export class JerseyModule {}
