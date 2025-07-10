import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_GroundUnitSeries')
export class FctGroundUnitSeries {
  @PrimaryColumn('integer', {
    name: 'GroundUnitSeriesID',
  })
  groundUnitSeriesId: number;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'RaceID',
  })
  raceId: number;
}
