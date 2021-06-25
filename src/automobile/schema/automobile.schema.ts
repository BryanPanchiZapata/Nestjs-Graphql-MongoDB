import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AutomobileDocument = Automobile & Document;

@Schema()
export class Automobile {
    @Prop()
    model?: string;
    @Prop()
    brand?: string;
    @Prop()
    type?: string;
    @Prop()
    price: number;
}

export const AutomobileSchema = SchemaFactory.createForClass(Automobile);