import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesController } from './series.controller';
import { Series } from './series.entity';
import { SeriesService } from './series.service';

@Module({
  // imports: [TypeOrmModule.forFeature([Series])],
  providers: [SeriesService],
  controllers: [SeriesController],
})
export class SeriesModule {}
