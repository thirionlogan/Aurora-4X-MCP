import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_SystemBody')
export class FctSystemBody {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'SystemBodyID',
  })
  systemBodyId: number;

  @Column('integer', { name: 'SystemID', nullable: true, default: () => '0' })
  systemId: number | null;

  @Column('integer', { name: 'StarID', nullable: true, default: () => '0' })
  starId: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

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

  @Column('double', {
    name: 'TrojanAsteroid',
    nullable: true,
    default: () => '0',
  })
  trojanAsteroid: number | null;

  @Column('double', {
    name: 'OrbitalDistance',
    nullable: true,
    default: () => '0',
  })
  orbitalDistance: number | null;

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
    name: 'ParentBodyID',
    nullable: true,
    default: () => '0',
  })
  parentBodyId: number | null;

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

  @Column('double', {
    name: 'EscapeVelocity',
    nullable: true,
    default: () => '0',
  })
  escapeVelocity: number | null;

  @Column('double', { name: 'Year', nullable: true, default: () => '0' })
  year: number | null;

  @Column('double', { name: 'TidalForce', nullable: true, default: () => '0' })
  tidalForce: number | null;

  @Column('boolean', { name: 'TidalLock', nullable: true, default: () => '0' })
  tidalLock: boolean | null;

  @Column('integer', { name: 'Tilt', nullable: true, default: () => '0' })
  tilt: number | null;

  @Column('double', {
    name: 'Eccentricity',
    nullable: true,
    default: () => '0',
  })
  eccentricity: number | null;

  @Column('double', { name: 'DayValue', nullable: true, default: () => '0' })
  dayValue: number | null;

  @Column('double', { name: 'Roche', nullable: true, default: () => '0' })
  roche: number | null;

  @Column('integer', {
    name: 'TectonicActivity',
    nullable: true,
    default: () => '1',
  })
  tectonicActivity: number | null;

  @Column('boolean', { name: 'Ring', nullable: true, default: () => '0' })
  ring: boolean | null;

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

  @Column('double', { name: 'HydroExt', nullable: true, default: () => '0' })
  hydroExt: number | null;

  @Column('double', { name: 'AtmosPress', nullable: true, default: () => '0' })
  atmosPress: number | null;

  @Column('double', { name: 'Albedo', nullable: true, default: () => '1' })
  albedo: number | null;

  @Column('double', { name: 'GHFactor', nullable: true, default: () => '1' })
  ghFactor: number | null;

  @Column('boolean', { name: 'RGE', nullable: true, default: () => '0' })
  rge: boolean | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('text', { name: 'PlanetIcon', nullable: true, default: () => 'NULL' })
  planetIcon: string | null;

  @Column('integer', { name: 'RuinID', nullable: true, default: () => '0' })
  ruinId: number | null;

  @Column('integer', { name: 'RuinRaceID', nullable: true, default: () => '0' })
  ruinRaceId: number | null;

  @Column('double', {
    name: 'RadiationLevel',
    nullable: true,
    default: () => '0',
  })
  radiationLevel: number | null;

  @Column('double', { name: 'DustLevel', nullable: true, default: () => '0' })
  dustLevel: number | null;

  @Column('integer', {
    name: 'AbandonedFactories',
    nullable: true,
    default: () => '0',
  })
  abandonedFactories: number | null;

  @Column('integer', {
    name: 'DominantTerrain',
    nullable: true,
    default: () => '0',
  })
  dominantTerrain: number | null;

  @Column('integer', {
    name: 'GroundMineralSurvey',
    nullable: true,
    default: () => '0',
  })
  groundMineralSurvey: number | null;

  @Column('integer', {
    name: 'AsteroidBeltID',
    nullable: true,
    default: () => '0',
  })
  asteroidBeltId: number | null;

  @Column('double', { name: 'AGHFactor', nullable: true, default: () => '1' })
  aghFactor: number | null;

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

  @Column('boolean', {
    name: 'FixedBody',
    nullable: true,
    default: () => 'FALSE',
  })
  fixedBody: boolean | null;

  @Column('integer', {
    name: 'FixedBodyParentID',
    nullable: true,
    default: () => '0',
  })
  fixedBodyParentId: number | null;
}
