import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_GroundUnitSeriesClass')
export class FctGroundUnitSeriesClass {
  @PrimaryColumn('integer', {
    name: 'GroundUnitSeriesID',
  })
  groundUnitSeriesId: number;

  @PrimaryColumn('integer', {
    name: 'GroundUnitClassID',
  })
  groundUnitClassId: number;

  @PrimaryColumn('integer', {
    name: 'RaceID',
  })
  raceId: number;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @Column('integer', { name: 'Priority', nullable: true, default: () => '0' })
  priority: number | null;
}
