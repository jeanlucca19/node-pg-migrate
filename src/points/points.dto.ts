export class PointsRequestDto {
    datetime: Date;
    value: number;
}

export class PointsBucketParamsDto {
    agregationTime: string
}

export class PointsBucketParamsGapfillDto {
    agregationTime: string;
    gapfill: string
}


