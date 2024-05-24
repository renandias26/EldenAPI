import { Module } from '@nestjs/common';
import { AmmosService } from './ammos.service';
import { AmmosController } from './ammos.controller';
import { EldenAPIModule } from 'src/EldenAPI/EldenApi.module';
import { Ammo, AmmoSchema } from './entities/ammo.entity';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    EldenAPIModule,
    MongooseModule.forFeature([{ name: Ammo.name, schema: AmmoSchema }])
  ],
  controllers: [AmmosController],
  providers: [AmmosService],
})
export class AmmosModule { }
