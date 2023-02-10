import { Controller, Get, Post, Query } from "@nestjs/common";
import { PointsBucketParamsDto, PointsBucketParamsGapfillDto, PointsRequestDto } from "./points.dto";
import { PointsService } from "./points.service";

@Controller('/points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) { }

  @Get()
  findAllPoints(): Promise<PointsRequestDto[]> {
    return this.pointsService.findAllPoints();
  }

  @Post('/faker')
  savePointsByFaker(): Promise<PointsRequestDto[]> {
    return this.pointsService.savePointsByFaker();
  }

  @Get('/bucket')
  findAllPointsByBucket(@Query() params: PointsBucketParamsDto) {
    const { agregationTime } = params
    return this.pointsService.findAllPointsByBucket(agregationTime)
  }

  @Get('/bucket-gapfill')
  findAllPointsByBucketGapfill(@Query() params: PointsBucketParamsGapfillDto) {
    const { agregationTime, gapfill } = params
    return this.pointsService.findAllPointsByBucketGapfill(agregationTime, gapfill)
  }
}
