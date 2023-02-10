import { Module } from '@nestjs/common';

import { DbModule } from './config/config';
import { PointsController } from './points/points.controller';
import { PointsRepository } from './points/points.repository';
import { PointsService } from './points/points.service';

@Module({
  imports: [DbModule],
  controllers: [PointsController],
  providers: [PointsService, PointsRepository],
})
export class AppModule { }
