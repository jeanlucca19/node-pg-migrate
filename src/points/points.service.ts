import { BadRequestException, Injectable } from "@nestjs/common";
import { PointsRepository } from "./points.repository";
import { faker } from '@faker-js/faker';
import { PointsRequestDto } from './points.dto';

@Injectable()
export class PointsService {
  constructor(private readonly pointsRepository: PointsRepository) { }
  async findAllPoints(): Promise<any[]> {
    return await this.pointsRepository.findAllPoints()
  }

  async savePointsByFaker(): Promise<PointsRequestDto[]> {
    const pointsCreated: PointsRequestDto[] = []

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

  async findAllPointsByBucket(agregationTime: string) {
    try {
      return await this.pointsRepository.findAllPointsByBucket(agregationTime);
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}