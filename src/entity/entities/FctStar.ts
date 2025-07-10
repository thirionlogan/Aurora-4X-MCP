import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Star')
export class FctStar {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'StarID' })
  starId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', { name: 'SystemID', nullable: true, default: () => '0' })
  systemId: number | null;

  @Column('integer', {
    name: 'StarTypeID',
    nullable: true,
    default: () => 'NULL',
  })
  starTypeId: number | null;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('integer', { name: 'Protostar', nullable: true, default: () => '0' })
  protostar: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => '0' })
  ycor: number | null;

  @Column('integer', { name: 'Component', nullable: true, default: () => '1' })
  component: number | null;

  @Column('integer', {
    name: 'OrbitingComponent',
    nullable: true,
    default: () => '0',
  })
  orbitingComponent: number | null;

  @Column('double', { name: 'Bearing', nullable: true, default: () => '0' })
  bearing: number | null;

  @Column('double', { name: 'Luminosity', nullable: true, default: () => '0' })
  luminosity: number | null;

  @Column('double', {
    name: 'OrbitalPeriod',
    nullable: true,
    default: () => '0',
  })
  orbitalPeriod: number | null;

  @Column('double', {
    name: 'OrbitalDistance',
    nullable: true,
    default: () => '0',
  })
  orbitalDistance: number | null;

  @Column('integer', {
    name: 'DisasterStatus',
    nullable: true,
    default: () => '0',
  })
  disasterStatus: number | null;

  @Column('double', {
    name: 'Eccentricity',
    nullable: true,
    default: () => '0',
  })
  eccentricity: number | null;

  @Column('double', {
    name: 'EccentricityDirection',
    nullable: true,
    default: () => '0',
  })
  eccentricityDirection: number | null;

  @Column('double', {
    name: 'MeanOrbitalSpeed',
    nullable: true,
    default: () => '0',
  })
  meanOrbitalSpeed: number | null;

  @Column('double', {
    name: 'DistanceToOrbitCentre',
    nullable: true,
    default: () => '0',
  })
  distanceToOrbitCentre: number | null;

  @Column('double', {
    name: 'DistanceToParent',
    nullable: true,
    default: () => '0',
  })
  distanceToParent: number | null;

  @Column('double', {
    name: 'CurrentOrbitalSpeed',
    nullable: true,
    default: () => '0',
  })
  currentOrbitalSpeed: number | null;
}
