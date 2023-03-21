import { Module } from '@nestjs/common';
import { PatchService } from './patch.service';
import { PatchController } from './patch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patch } from './entities/patch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patch])],
  controllers: [PatchController],
  providers: [PatchService]
})
export class PatchModule {}
