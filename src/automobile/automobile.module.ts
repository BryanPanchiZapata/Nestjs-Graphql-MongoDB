import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomobileResolver } from './automobile.resolver';
import { AutomobileService } from './automobile.service';
import { AutomobileSchema } from './schema/automobile.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Automobile', schema: AutomobileSchema }]),
  ],
  providers: [AutomobileService, AutomobileResolver],
})
export class AutomobileModule {}
