import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema()
export class Event extends Document {
  @Prop()
  type: string;

  @Prop({ index: true })
  name: string;

  @Prop(mongoose.SchemaTypes.Mixed)
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ name: 1, type: -1 });
