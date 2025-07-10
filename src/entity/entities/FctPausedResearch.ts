import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_PausedResearch')
export class FctPausedResearch {
  @PrimaryColumn('integer', {
    name: 'TechSystemID',
  })
  techSystemId: number;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @Column('integer', {
    name: 'PointsAccumulated',
    nullable: true,
    default: () => 'NULL',
  })
  pointsAccumulated: number | null;

  @PrimaryColumn('integer', {
    name: 'RaceID',
  })
  raceId: number;
}
