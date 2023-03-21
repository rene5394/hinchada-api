import { Module } from '@nestjs/common';
import { KitService } from './kit.service';
import { KitController } from './kit.controller';

@Module({
  controllers: [KitController],
  providers: [KitService]
})
export class KitModule {}
