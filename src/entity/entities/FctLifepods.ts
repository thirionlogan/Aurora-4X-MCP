import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Lifepods')
export class FctLifepods {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'LifepodID',
  })
  lifepodId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', {
    name: 'SpeciesID',
    nullable: true,
    default: () => 'NULL',
  })
  speciesId: number | null;

  @Column('integer', {
    name: 'SystemID',
    nullable: true,
    default: () => 'NULL',
  })
  systemId: number | null;

  @Column('integer', { name: 'ClassID', nullable: true, default: () => '0' })
  classId: number | null;

  @Column('varchar', {
    name: 'ShipName',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  shipName: string | null;

  @Column('integer', { name: 'Crew', nullable: true, default: () => 'NULL' })
  crew: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('double', {
    name: 'CreationTime',
    nullable: true,
    default: () => 'NULL',
  })
  creationTime: number | null;

  @Column('double', {
    name: 'GradePoints',
    nullable: true,
    default: () => 'NULL',
  })
  gradePoints: number | null;
}
