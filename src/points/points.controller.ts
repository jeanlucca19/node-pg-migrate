import { Controller, Get, Post } from "@nestjs/common";
import PointsDto from "./points.dto";
import { PointsService } from "./points.service";

@Controller('/points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  @Get()
  getPoints(): Promise<PointsDto[]> {
    return this.pointsService.getPoints();
  }

  @Post('/faker')
  savePointsByFaker(): Promise<PointsDto[]> {
    return this.pointsService.savePointsByFaker();
  }
}
