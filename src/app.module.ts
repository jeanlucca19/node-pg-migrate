import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
// import configuration from './config/configuration';
import { DbModule } from './config/config';
import { PointsController } from './points/points.controller';
import { PointsRepository } from './points/points.repository';
import { PointsService } from './points/points.service';

@Module({
  imports: [DbModule],
  controllers: [AppController, PointsController],
  providers: [AppService, PointsService, PointsRepository],
})
export class AppModule {}
