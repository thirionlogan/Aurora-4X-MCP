import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_AlienClass')
export class FctAlienClass {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'AlienClassID' })
  alienClassId: number;

  @Column('integer', { name: 'ActualClassID', nullable: true })
  actualClassId: number | null;

  @Column('integer', {
    name: 'AlienRaceID',
    nullable: true,
    default: () => '0',
  })
  alienRaceId: number | null;

  @Column('integer', {
    name: 'ArmourStrength',
    nullable: true,
    default: () => '0',
  })
  armourStrength: number | null;

  @Column('integer', {
    name: 'AverageDamage',
    nullable: true,
    default: () => '0',
  })
  averageDamage: number | null;

  @Column('text', { name: 'ClassName', nullable: true })
  className: string | null;

  @Column('double', {
    name: 'FirstDetected',
    nullable: true,
    default: () => '0',
  })
  firstDetected: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', { name: 'HullID', nullable: true, default: () => '0' })
  hullId: number | null;

  @Column('integer', {
    name: 'JumpDistance',
    nullable: true,
    default: () => '0',
  })
  jumpDistance: number | null;

  @Column('integer', { name: 'MaxSpeed', nullable: true, default: () => '0' })
  maxSpeed: number | null;

  @Column('text', { name: 'Notes', nullable: true })
  notes: string | null;

  @Column('double', {
    name: 'ShieldRecharge',
    nullable: true,
    default: () => '0',
  })
  shieldRecharge: number | null;

  @Column('integer', {
    name: 'ShieldStrength',
    nullable: true,
    default: () => '0',
  })
  shieldStrength: number | null;

  @Column('integer', { name: 'ShipCount', nullable: true, default: () => '0' })
  shipCount: number | null;

  @Column('text', { name: 'Summary', nullable: true })
  summary: string | null;

  @Column('integer', { name: 'TCS', nullable: true, default: () => '0' })
  tcs: number | null;

  @Column('double', {
    name: 'ThermalSignature',
    nullable: true,
    default: () => '0',
  })
  thermalSignature: number | null;

  @Column('integer', { name: 'ViewRaceID', nullable: true, default: () => '0' })
  viewRaceId: number | null;

  @Column('integer', {
    name: 'MaxEnergyPDShots',
    nullable: true,
    default: () => '0',
  })
  maxEnergyPdShots: number | null;

  @Column('integer', {
    name: 'AlienClassRole',
    nullable: true,
    default: () => '0',
  })
  alienClassRole: number | null;

  @Column('boolean', {
    name: 'ObservedMissileDefence',
    nullable: true,
    default: () => 'False',
  })
  observedMissileDefence: boolean | null;

  @Column('integer', {
    name: 'TotalEnergyPDHits',
    nullable: true,
    default: () => '0',
  })
  totalEnergyPdHits: number | null;

  @Column('integer', {
    name: 'TotalEnergyPDShots',
    nullable: true,
    default: () => '0',
  })
  totalEnergyPdShots: number | null;

  @Column('boolean', {
    name: 'DiplomaticShip',
    nullable: true,
    default: () => 'FALSE',
  })
  diplomaticShip: boolean | null;

  @Column('integer', { name: 'EngineType', nullable: true, default: () => '0' })
  engineType: number | null;

  @Column('double', {
    name: 'ActiveJammerStrength',
    nullable: true,
    default: () => '0',
  })
  activeJammerStrength: number | null;

  @Column('double', {
    name: 'FireControlJammerStrength',
    nullable: true,
    default: () => '0',
  })
  fireControlJammerStrength: number | null;

  @Column('double', {
    name: 'MissileJammerStrength',
    nullable: true,
    default: () => '0',
  })
  missileJammerStrength: number | null;
}
