import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from '../constants';
import PointsDto from './points.dto';

@Injectable()
export class PointsRepository {
  constructor(@Inject(PG_CONNECTION) private conn: Pool) { }

  async getPoints(): Promise<PointsDto[]> {
    const res = await this.conn.query(`SELECT * FROM "points"`);
    return res.rows;
  }
  async createPoint(point: PointsDto): Promise<PointsDto[]> {
    const res = await this.conn.query(`INSERT INTO "points" (datetime, value) VALUES($1, $2)`,
      [point.datetime, point.value]
    );
    return res.rows;
  }

  async getPointsByBucket(agregationTime: string) {
    const res = await this.conn.query(`
        SELECT time_bucket($1, datetime) AS bucket,
        avg(value) AS avg_value 
        FROM "points"
        GROUP BY bucket
        ORDER BY bucket ASC;
      `,
      [agregationTime]
    )
    return res.rows
  }
} 