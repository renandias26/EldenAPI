import { Injectable } from '@nestjs/common';
import { CreateAmmoDto } from './dto/create-ammo.dto';
import { UpdateAmmoDto } from './dto/update-ammo.dto';
import { EldenAPIService } from 'src/EldenAPI/EldenApi.service';
import { Ammo } from './entities/ammo.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { AmmoData } from './interfaces/ammo.interface';

@Injectable()
export class AmmosService {
  constructor(
    private readonly EldenAPI: EldenAPIService,
    @InjectModel(Ammo.name) private AmmoModel: Model<Ammo>
  ) { }

  create(createAmmoDto: CreateAmmoDto) {
    return 'This action adds a new ammo';
  }

  findAll() {
    return this.EldenAPI.get<AmmoData>("ammos");
  }

  findOne(id: number) {
    return `This action returns a #${id} ammo`;
  }

  update(id: number, updateAmmoDto: UpdateAmmoDto) {
    return `This action updates a #${id} ammo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ammo`;
  }
}
