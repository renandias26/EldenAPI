import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AmmoDocument = HydratedDocument<Ammo>;

@Schema({ timestamps: true })
export class Ammo {
    @Prop({ require: true })
    name: string;

    @Prop({ require: false })
    image: string

    @Prop({ require: false })
    description: string

    @Prop({ require: false })
    type: string

    @Prop({ require: false })
    passive: string

    @Prop({ require: false })
    idApi: Array<{}>
}

export const AmmoSchema = SchemaFactory.createForClass(Ammo);