import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmmosService } from './ammos.service';
import { CreateAmmoDto } from './dto/create-ammo.dto';
import { UpdateAmmoDto } from './dto/update-ammo.dto';

@Controller('ammos')
export class AmmosController {
  constructor(private readonly ammosService: AmmosService) {}

  @Post()
  create(@Body() createAmmoDto: CreateAmmoDto) {
    return this.ammosService.create(createAmmoDto);
  }

  @Get()
  findAll() {
    return this.ammosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ammosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmmoDto: UpdateAmmoDto) {
    return this.ammosService.update(+id, updateAmmoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ammosService.remove(+id);
  }
}
