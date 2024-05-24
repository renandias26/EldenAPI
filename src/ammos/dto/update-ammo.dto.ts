import { PartialType } from '@nestjs/swagger';
import { CreateAmmoDto } from './create-ammo.dto';

export class UpdateAmmoDto extends PartialType(CreateAmmoDto) {}
