import { Injectable } from '@nestjs/common';
import { CreateAmmoDto } from './dto/create-ammo.dto';
import { UpdateAmmoDto } from './dto/update-ammo.dto';
import { EldenAPIService } from 'src/EldenAPI/EldenApi.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { AmmoData } from './interfaces/ammo.interface';
import { Ammo, AmmoSchema } from './schema/ammo.schema';
import { EldenRequest } from 'src/EldenAPI/interfaces/EldenRequest.interface';

@Injectable()
export class AmmosService {
  constructor(
    private readonly EldenAPI: EldenAPIService,
    @InjectModel(Ammo.name) private AmmoModel: Model<Ammo>
  ) { }

  create(createAmmoDto: CreateAmmoDto) {
    return new this.AmmoModel(createAmmoDto).save()
  }

  async findAll() {
    const data = await this.AmmoModel.find()
    if (data.length > 0) {
      return data
    }

    const obj = await this.EldenAPI.get<EldenRequest<AmmoData[]>>("ammos");
    return await this.AmmoModel.insertMany(obj.data)
  }

  findOne(id: string) {
    return this.AmmoModel.findById(id)
  }

  update(id: string, updateAmmoDto: UpdateAmmoDto) {
    return this.AmmoModel.findByIdAndUpdate(id, updateAmmoDto)
  }

  remove(id: string) {
    return this.AmmoModel.findByIdAndDelete(id)
  }
}
