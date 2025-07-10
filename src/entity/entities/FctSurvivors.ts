import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_Survivors')
export class FctSurvivors {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'SpeciesID' })
  speciesId: number;

  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @Column('text', {
    name: 'SurvivorsShipName',
    nullable: true,
    default: () => 'NULL',
  })
  survivorsShipName: string | null;

  @Column('integer', { name: 'Crew', nullable: true, default: () => '0' })
  crew: number | null;

  @Column('integer', { name: 'Wounded', nullable: true, default: () => '0' })
  wounded: number | null;

  @Column('double', {
    name: 'RescueTime',
    nullable: true,
    default: () => 'NULL',
  })
  rescueTime: number | null;

  @Column('integer', {
    name: 'RescueSystemID',
    nullable: true,
    default: () => 'NULL',
  })
  rescueSystemId: number | null;

  @Column('double', {
    name: 'GradePoints',
    nullable: true,
    default: () => 'NULL',
  })
  gradePoints: number | null;
}
