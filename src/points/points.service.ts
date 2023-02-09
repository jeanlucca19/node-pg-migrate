import { Injectable } from "@nestjs/common";
import { PointsRepository } from "./points.repository";
import { faker } from '@faker-js/faker';
import PointsDto from './points.dto';

@Injectable()
export class PointsService {
  constructor(private readonly pointsRepository: PointsRepository) { }
  async getPoints(): Promise<any[]> {
    return await this.pointsRepository.getPoints()
  }

  async savePointsByFaker(): Promise<PointsDto[]> {
    const pointsCreated: PointsDto[] = []

    const createRandomPoints = () => {
      return {
        datetime: faker.date.recent(5),
        value: Number(faker.random.numeric(2))
      }
    };

    Array.from({ length: 10 }).forEach(async () => {
      const newPoint = createRandomPoints();
      this.pointsRepository.createPoint(newPoint);
      pointsCreated.push(newPoint);
    });
    return pointsCreated
  }

  async getPointsByBucket(agregationTime: string) {
    return await this.pointsRepository.getPointsByBucket(agregationTime);
  }
}