import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatchService } from './patch.service';
import { CreatePatchDto } from './dto/create-patch.dto';
import { UpdatePatchDto } from './dto/update-patch.dto';

@Controller('patches')
export class PatchController {
  constructor(private readonly patchService: PatchService) {}

  @Post()
  create(@Body() createPatchDto: CreatePatchDto) {
    return this.patchService.create(createPatchDto);
  }

  @Get()
  findAll() {
    return this.patchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.patchService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePatchDto: UpdatePatchDto) {
    return this.patchService.update(id, updatePatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.patchService.remove(id);
  }
}
