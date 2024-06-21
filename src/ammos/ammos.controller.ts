import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards, ValidationPipe } from '@nestjs/common';
import { AmmosService } from './ammos.service';
import { CreateAmmoDto } from './dto/create-ammo.dto';
import { UpdateAmmoDto } from './dto/update-ammo.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { IsObjectIdPipe } from 'nestjs-object-id/dist/pipes/is-object-id.pipe';
import { SocketGateway } from 'src/socket/socket.gateway';

@Controller('ammos')
export class AmmosController {
  constructor(
    private readonly ammosService: AmmosService,
    private readonly socketGateway: SocketGateway
  ) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body(new ValidationPipe()) createAmmoDto: CreateAmmoDto) {
    try {
      return this.ammosService.create(createAmmoDto);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    try {
      this.socketGateway.server.emit('findAll')
      return this.ammosService.findAll();
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id', IsObjectIdPipe) id: string) {
    try {
      return this.ammosService.findOne(id);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id', IsObjectIdPipe) id: string, @Body(new ValidationPipe()) updateAmmoDto: UpdateAmmoDto) {
    try {
      return this.ammosService.update(id, updateAmmoDto);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', IsObjectIdPipe) id: string) {
    try {
      return this.ammosService.remove(id);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
