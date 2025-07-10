import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_System')
export class FctSystem {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'SystemID' })
  systemId: number;

  @Column('integer', { name: 'SystemNumber', default: () => '0' })
  systemNumber: number;

  @Column('double', { name: 'Age', nullable: true, default: () => 'NULL' })
  age: number | null;

  @Column('integer', {
    name: 'AbundanceModifier',
    nullable: true,
    default: () => 'NULL',
  })
  abundanceModifier: number | null;

  @Column('integer', { name: 'Stars', nullable: true, default: () => 'NULL' })
  stars: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', {
    name: 'JumpPointSurveyPoints',
    nullable: true,
    default: () => '0',
  })
  jumpPointSurveyPoints: number | null;

  @Column('integer', {
    name: 'SystemTypeID',
    nullable: true,
    default: () => '0',
  })
  systemTypeId: number | null;

  @Column('integer', {
    name: 'DustDensity',
    nullable: true,
    default: () => '0',
  })
  dustDensity: number | null;

  @Column('numeric', {
    name: 'SolSystem',
    nullable: true,
    default: () => 'NULL',
  })
  solSystem: number | null;

  @Column('integer', {
    name: 'NoSensorChecks',
    nullable: true,
    default: () => '0',
  })
  noSensorChecks: number | null;

  @Column('double', {
    name: 'SupernovaForce',
    nullable: true,
    default: () => '0',
  })
  supernovaForce: number | null;

  @Column('double', {
    name: 'SupernovaElapsedTime',
    nullable: true,
    default: () => '0',
  })
  supernovaElapsedTime: number | null;
}
