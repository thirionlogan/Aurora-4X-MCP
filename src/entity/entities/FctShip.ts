import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Ship')
export class FctShip {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'ShipID' })
  shipId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'FleetID', nullable: true, default: () => 'NULL' })
  fleetId: number | null;

  @Column('text', { name: 'ShipName', nullable: true, default: () => 'NULL' })
  shipName: string | null;

  @Column('integer', { name: 'SubFleetID', nullable: true, default: () => '0' })
  subFleetId: number | null;

  @Column('boolean', {
    name: 'ActiveSensorsOn',
    nullable: true,
    default: () => '0',
  })
  activeSensorsOn: boolean | null;

  @Column('integer', {
    name: 'AssignedMSID',
    nullable: true,
    default: () => '0',
  })
  assignedMsid: number | null;

  @Column('integer', { name: 'Autofire', nullable: true, default: () => '0' })
  autofire: number | null;

  @Column('integer', {
    name: 'BoardingCombatClock',
    nullable: true,
    default: () => '0',
  })
  boardingCombatClock: number | null;

  @Column('double', { name: 'Constructed', nullable: true, default: () => '1' })
  constructed: number | null;

  @Column('double', { name: 'CrewMorale', nullable: true, default: () => '1' })
  crewMorale: number | null;

  @Column('integer', {
    name: 'CurrentCrew',
    nullable: true,
    default: () => '0',
  })
  currentCrew: number | null;

  @Column('double', {
    name: 'CurrentShieldStrength',
    nullable: true,
    default: () => 'NULL',
  })
  currentShieldStrength: number | null;

  @Column('integer', {
    name: 'DamageControlID',
    nullable: true,
    default: () => '0',
  })
  damageControlId: number | null;

  @Column('boolean', { name: 'Destroyed', nullable: true, default: () => '0' })
  destroyed: boolean | null;

  @Column('integer', { name: 'FireDelay', nullable: true, default: () => '0' })
  fireDelay: number | null;

  @Column('double', { name: 'Fuel', nullable: true, default: () => '0' })
  fuel: number | null;

  @Column('double', { name: 'GradePoints', nullable: true, default: () => '0' })
  gradePoints: number | null;

  @Column('integer', {
    name: 'HoldTechData',
    nullable: true,
    default: () => '0',
  })
  holdTechData: number | null;

  @Column('integer', {
    name: 'KillTonnageCommercial',
    nullable: true,
    default: () => '0',
  })
  killTonnageCommercial: number | null;

  @Column('integer', {
    name: 'KillTonnageMilitary',
    nullable: true,
    default: () => '0',
  })
  killTonnageMilitary: number | null;

  @Column('double', {
    name: 'LastLaunchTime',
    nullable: true,
    default: () => '0',
  })
  lastLaunchTime: number | null;

  @Column('double', {
    name: 'LastOverhaul',
    nullable: true,
    default: () => '0',
  })
  lastOverhaul: number | null;

  @Column('double', {
    name: 'LastShoreLeave',
    nullable: true,
    default: () => '0',
  })
  lastShoreLeave: number | null;

  @Column('double', {
    name: 'LaunchMorale',
    nullable: true,
    default: () => '0',
  })
  launchMorale: number | null;

  @Column('integer', {
    name: 'MaintenanceState',
    nullable: true,
    default: () => '0',
  })
  maintenanceState: number | null;

  @Column('integer', {
    name: 'MothershipID',
    nullable: true,
    default: () => '0',
  })
  mothershipId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', {
    name: 'RefuelPriority',
    nullable: true,
    default: () => '0',
  })
  refuelPriority: number | null;

  @Column('integer', {
    name: 'RefuelStatus',
    nullable: true,
    default: () => '0',
  })
  refuelStatus: number | null;

  @Column('boolean', { name: 'ScrapFlag', nullable: true, default: () => '0' })
  scrapFlag: boolean | null;

  @Column('integer', {
    name: 'SensorDelay',
    nullable: true,
    default: () => '0',
  })
  sensorDelay: number | null;

  @Column('boolean', {
    name: 'ShieldsActive',
    nullable: true,
    default: () => '0',
  })
  shieldsActive: boolean | null;

  @Column('integer', {
    name: 'ShipClassID',
    nullable: true,
    default: () => 'NULL',
  })
  shipClassId: number | null;

  @Column('double', {
    name: 'ShipFuelEfficiency',
    nullable: true,
    default: () => 'NULL',
  })
  shipFuelEfficiency: number | null;

  @Column('text', { name: 'ShipNotes', nullable: true })
  shipNotes: string | null;

  @Column('integer', {
    name: 'ShippingLineID',
    nullable: true,
    default: () => '0',
  })
  shippingLineId: number | null;

  @Column('integer', {
    name: 'SpeciesID',
    nullable: true,
    default: () => 'NULL',
  })
  speciesId: number | null;

  @Column('integer', { name: 'SyncFire', nullable: true, default: () => '0' })
  syncFire: number | null;

  @Column('double', { name: 'TFPoints', nullable: true, default: () => '0' })
  tfPoints: number | null;

  @Column('integer', {
    name: 'TransponderActive',
    nullable: true,
    default: () => '0',
  })
  transponderActive: number | null;

  @Column('integer', {
    name: 'OrdnanceTransferStatus',
    nullable: true,
    default: () => '0',
  })
  ordnanceTransferStatus: number | null;

  @Column('integer', {
    name: 'HangarLoadType',
    nullable: true,
    default: () => '0',
  })
  hangarLoadType: number | null;

  @Column('integer', {
    name: 'ResupplyPriority',
    nullable: true,
    default: () => '0',
  })
  resupplyPriority: number | null;

  @Column('double', {
    name: 'CurrentMaintSupplies',
    nullable: true,
    default: () => '0',
  })
  currentMaintSupplies: number | null;

  @Column('boolean', {
    name: 'AutomatedDamageControl',
    nullable: true,
    default: () => '1',
  })
  automatedDamageControl: boolean | null;

  @Column('integer', {
    name: 'TractorTargetShipID',
    nullable: true,
    default: () => '0',
  })
  tractorTargetShipId: number | null;

  @Column('integer', {
    name: 'TractorTargetShipyardID',
    nullable: true,
    default: () => '0',
  })
  tractorTargetShipyardId: number | null;

  @Column('integer', {
    name: 'TractorParentShipID',
    nullable: true,
    default: () => '0',
  })
  tractorParentShipId: number | null;

  @Column('double', {
    name: 'OverhaulFactor',
    nullable: true,
    default: () => '1',
  })
  overhaulFactor: number | null;

  @Column('double', { name: 'BioEnergy', nullable: true, default: () => '0' })
  bioEnergy: number | null;

  @Column('double', {
    name: 'LastMissileHitTime',
    nullable: true,
    default: () => '0',
  })
  lastMissileHitTime: number | null;

  @Column('double', {
    name: 'LastBeamHitTime',
    nullable: true,
    default: () => '0',
  })
  lastBeamHitTime: number | null;

  @Column('double', {
    name: 'LastDamageTime',
    nullable: true,
    default: () => '0',
  })
  lastDamageTime: number | null;

  @Column('double', {
    name: 'LastPenetratingDamageTime',
    nullable: true,
    default: () => '0',
  })
  lastPenetratingDamageTime: number | null;

  @Column('integer', {
    name: 'AssignedFormationID',
    nullable: true,
    default: () => '0',
  })
  assignedFormationId: number | null;

  @Column('double', {
    name: 'DistanceTravelled',
    nullable: true,
    default: () => '0',
  })
  distanceTravelled: number | null;

  @Column('integer', { name: 'HullNumber', nullable: true, default: () => '0' })
  hullNumber: number | null;

  @Column('integer', {
    name: 'ParentSquadronID',
    nullable: true,
    default: () => '0',
  })
  parentSquadronId: number | null;

  @Column('integer', {
    name: 'AssignedSquadronID',
    nullable: true,
    default: () => '0',
  })
  assignedSquadronId: number | null;

  @Column('double', {
    name: 'LastTransitTime',
    nullable: true,
    default: () => '0',
  })
  lastTransitTime: number | null;

  @Column('double', {
    name: 'LastFiringTime',
    nullable: true,
    default: () => '0',
  })
  lastFiringTime: number | null;

  @Column('integer', {
    name: 'ResupplyStatus',
    nullable: true,
    default: () => '0',
  })
  resupplyStatus: number | null;

  @Column('boolean', {
    name: 'ActiveJammerOn',
    nullable: true,
    default: () => 'FALSE',
  })
  activeJammerOn: boolean | null;

  @Column('integer', {
    name: 'DecoyThreshold',
    nullable: true,
    default: () => '100',
  })
  decoyThreshold: number | null;

  @Column('integer', {
    name: 'DesignateAsTarget',
    nullable: true,
    default: () => '0',
  })
  designateAsTarget: number | null;
}
