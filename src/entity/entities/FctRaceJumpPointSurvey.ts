import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_RaceJumpPointSurvey')
export class FctRaceJumpPointSurvey {
  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'WarpPointID' })
  warpPointId: number;

  @Column('integer', { name: 'Explored', nullable: true, default: () => '0' })
  explored: number | null;

  @Column('integer', { name: 'Charted', nullable: true, default: () => '0' })
  charted: number | null;

  @Column('boolean', {
    name: 'AlienUnits',
    nullable: true,
    default: () => 'NULL',
  })
  alienUnits: boolean | null;

  @Column('integer', { name: 'Hide', nullable: true, default: () => '0' })
  hide: number | null;

  @Column('integer', {
    name: 'MilitaryRestricted',
    nullable: true,
    default: () => '0',
  })
  militaryRestricted: number | null;

  @Column('integer', {
    name: 'IgnoreForDistance',
    nullable: true,
    default: () => '0',
  })
  ignoreForDistance: number | null;
}
