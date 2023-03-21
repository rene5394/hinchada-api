import { Module } from '@nestjs/common';
import { JerseyService } from './jersey.service';
import { JerseyController } from './jersey.controller';

@Module({
  controllers: [JerseyController],
  providers: [JerseyService]
})
export class JerseyModule {}
