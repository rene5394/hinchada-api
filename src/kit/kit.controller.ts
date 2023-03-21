import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KitService } from './kit.service';
import { CreateKitDto } from './dto/create-kit.dto';
import { UpdateKitDto } from './dto/update-kit.dto';

@Controller('kits')
export class KitController {
  constructor(private readonly kitService: KitService) {}

  @Post()
  create(@Body() createKitDto: CreateKitDto) {
    return this.kitService.create(createKitDto);
  }

  @Get()
  findAll() {
    return this.kitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kitService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateKitDto: UpdateKitDto) {
    return this.kitService.update(id, updateKitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.kitService.remove(id);
  }
}
