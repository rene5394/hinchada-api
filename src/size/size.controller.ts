import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeService } from './size.service';

@Controller('sizes')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get()
  findAll() {
    return this.sizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sizeService.findOne(id);
  }
}
