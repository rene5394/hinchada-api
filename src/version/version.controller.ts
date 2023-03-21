import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersionService } from './version.service';

@Controller('versions')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Get()
  findAll() {
    return this.versionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.versionService.findOne(id);
  }
}
