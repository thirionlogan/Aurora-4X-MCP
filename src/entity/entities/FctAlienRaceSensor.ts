import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_AlienRaceSensor')
export class FctAlienRaceSensor {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number | null;

  @Column('integer', {
    name: 'Strength',
    nullable: true,
    default: () => 'NULL',
  })
  strength: number | null;

  @Column('integer', {
    name: 'Resolution',
    nullable: true,
    default: () => 'NULL',
  })
  resolution: number | null;

  @Column('double', { name: 'Range', nullable: true, default: () => '0' })
  range: number | null;

  @Column('double', {
    name: 'IntelligencePoints',
    nullable: true,
    default: () => '0',
  })
  intelligencePoints: number | null;

  @Column('integer', {
    name: 'ActualSensor',
    nullable: true,
    default: () => '0',
  })
  actualSensor: number | null;

  @Column('integer', {
    name: 'ActualMissile',
    nullable: true,
    default: () => '0',
  })
  actualMissile: number | null;

  @PrimaryColumn('integer', {
    name: 'AlienRaceID',
  })
  alienRaceId: number;

  @Column('integer', {
    name: 'ViewingRaceID',
    nullable: true,
    default: () => '0',
  })
  viewingRaceId: number | null;

  @Column('integer', {
    name: 'AlienSensorID',
    nullable: true,
    default: () => '0',
  })
  alienSensorId: number | null;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('integer', {
    name: 'ActualGroundUnitClass',
    nullable: true,
    default: () => '0',
  })
  actualGroundUnitClass: number | null;
}
