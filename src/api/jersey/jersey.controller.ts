import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JerseyService } from './jersey.service';
import { CreateJerseyDto } from './dto/create-jersey.dto';
import { UpdateJerseyDto } from './dto/update-jersey.dto';

@Controller('jerseys')
export class JerseyController {
  constructor(private readonly jerseyService: JerseyService) {}

  @Post()
  create(@Body() createJerseyDto: CreateJerseyDto) {
    return this.jerseyService.create(createJerseyDto);
  }

  @Get()
  findAll() {
    return this.jerseyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jerseyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateJerseyDto: UpdateJerseyDto) {
    return this.jerseyService.update(id, updateJerseyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jerseyService.remove(id);
  }
}
