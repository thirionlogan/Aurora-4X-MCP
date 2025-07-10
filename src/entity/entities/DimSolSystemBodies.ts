import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_SolSystemBodies')
export class DimSolSystemBodies {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'SystemBodyID',
  })
  systemBodyId: number;

  @Column('text', { name: 'Name', nullable: true, default: () => "' '" })
  name: string | null;

  @Column('integer', {
    name: 'PlanetNumber',
    nullable: true,
    default: () => '0',
  })
  planetNumber: number | null;

  @Column('integer', {
    name: 'OrbitNumber',
    nullable: true,
    default: () => '0',
  })
  orbitNumber: number | null;

  @Column('integer', {
    name: 'TrojanPlanet',
    nullable: true,
    default: () => '0',
  })
  trojanPlanet: number | null;

  @Column('integer', {
    name: 'TrojanLocation',
    nullable: true,
    default: () => '0',
  })
  trojanLocation: number | null;

  @Column('double', {
    name: 'TrojanOffset',
    nullable: true,
    default: () => '0',
  })
  trojanOffset: number | null;

  @Column('double', {
    name: 'OrbitalDistance',
    nullable: true,
    default: () => '0',
  })
  orbitalDistance: number | null;

  @Column('double', {
    name: 'CurrentDistance',
    nullable: true,
    default: () => '0',
  })
  currentDistance: number | null;

  @Column('numeric', {
    name: 'HeadingInward',
    nullable: true,
    default: () => 'NULL',
  })
  headingInward: number | null;

  @Column('double', { name: 'Bearing', nullable: true, default: () => '0' })
  bearing: number | null;

  @Column('integer', { name: 'BodyClass', nullable: true, default: () => '0' })
  bodyClass: number | null;

  @Column('double', { name: 'Density', nullable: true, default: () => '0' })
  density: number | null;

  @Column('integer', { name: 'Radius', nullable: true, default: () => '0' })
  radius: number | null;

  @Column('double', { name: 'Gravity', nullable: true, default: () => '0' })
  gravity: number | null;

  @Column('integer', {
    name: 'ParentBodyType',
    nullable: true,
    default: () => '0',
  })
  parentBodyType: number | null;

  @Column('integer', { name: 'BodyTypeID', nullable: true, default: () => '0' })
  bodyTypeId: number | null;

  @Column('double', { name: 'Mass', nullable: true, default: () => '0' })
  mass: number | null;

  @Column('double', { name: 'Escape', nullable: true, default: () => '0' })
  escape: number | null;

  @Column('double', { name: 'Year', nullable: true, default: () => '0' })
  year: number | null;

  @Column('double', { name: 'Day', nullable: true, default: () => '0' })
  day: number | null;

  @Column('double', { name: 'TidalForce', nullable: true, default: () => '0' })
  tidalForce: number | null;

  @Column('numeric', { name: 'TidalLock', nullable: true, default: () => '0' })
  tidalLock: number | null;

  @Column('integer', { name: 'Tilt', nullable: true, default: () => '0' })
  tilt: number | null;

  @Column('double', {
    name: 'Eccentricity',
    nullable: true,
    default: () => '0',
  })
  eccentricity: number | null;

  @Column('double', { name: 'Roche', nullable: true, default: () => '0' })
  roche: number | null;

  @Column('integer', {
    name: 'TectonicActivity',
    nullable: true,
    default: () => '1',
  })
  tectonicActivity: number | null;

  @Column('numeric', { name: 'Ring', nullable: true, default: () => '0' })
  ring: number | null;

  @Column('double', {
    name: 'MagneticField',
    nullable: true,
    default: () => '0',
  })
  magneticField: number | null;

  @Column('double', { name: 'BaseTemp', nullable: true, default: () => '0' })
  baseTemp: number | null;

  @Column('double', { name: 'SurfaceTemp', nullable: true, default: () => '0' })
  surfaceTemp: number | null;

  @Column('integer', { name: 'HydroID', nullable: true, default: () => '1' })
  hydroId: number | null;

  @Column('integer', { name: 'HydroExt', nullable: true, default: () => '0' })
  hydroExt: number | null;

  @Column('double', { name: 'AtmosPress', nullable: true, default: () => '0' })
  atmosPress: number | null;

  @Column('double', { name: 'Albedo', nullable: true, default: () => '1' })
  albedo: number | null;

  @Column('double', { name: 'GHFactor', nullable: true, default: () => '1' })
  ghFactor: number | null;

  @Column('numeric', { name: 'RGE', nullable: true, default: () => '0' })
  rge: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => '0' })
  ycor: number | null;

  @Column('text', { name: 'PlanetIcon', nullable: true, default: () => 'NULL' })
  planetIcon: string | null;

  @Column('integer', {
    name: 'DominantTerrain',
    nullable: true,
    default: () => '0',
  })
  dominantTerrain: number | null;
}
