import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_ShipClass')
export class FctShipClass {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'ShipClassID',
  })
  shipClassId: number;

  @Column('text', { name: 'ClassName', nullable: true, default: () => 'NULL' })
  className: string | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', {
    name: 'ActiveSensorStrength',
    nullable: true,
    default: () => '0',
  })
  activeSensorStrength: number | null;

  @Column('integer', {
    name: 'ArmourThickness',
    nullable: true,
    default: () => '0',
  })
  armourThickness: number | null;

  @Column('integer', {
    name: 'ArmourWidth',
    nullable: true,
    default: () => '0',
  })
  armourWidth: number | null;

  @Column('double', {
    name: 'BaseFailureChance',
    nullable: true,
    default: () => '1',
  })
  baseFailureChance: number | null;

  @Column('integer', {
    name: 'CargoCapacity',
    nullable: true,
    default: () => '0',
  })
  cargoCapacity: number | null;

  @Column('double', {
    name: 'ClassCrossSection',
    nullable: true,
    default: () => 'NULL',
  })
  classCrossSection: number | null;

  @Column('double', {
    name: 'ClassThermal',
    nullable: true,
    default: () => '0',
  })
  classThermal: number | null;

  @Column('integer', { name: 'Collier', nullable: true, default: () => '0' })
  collier: number | null;

  @Column('integer', {
    name: 'ColonistCapacity',
    nullable: true,
    default: () => '0',
  })
  colonistCapacity: number | null;

  @Column('integer', {
    name: 'CommanderPriority',
    nullable: true,
    default: () => '0',
  })
  commanderPriority: number | null;

  @Column('boolean', {
    name: 'MilitaryEngines',
    nullable: true,
    default: () => 'NULL',
  })
  militaryEngines: boolean | null;

  @Column('integer', {
    name: 'ControlRating',
    nullable: true,
    default: () => '1',
  })
  controlRating: number | null;

  @Column('integer', {
    name: 'ConscriptOnly',
    nullable: true,
    default: () => '0',
  })
  conscriptOnly: number | null;

  @Column('double', { name: 'Cost', nullable: true, default: () => '0' })
  cost: number | null;

  @Column('integer', { name: 'Crew', nullable: true, default: () => '0' })
  crew: number | null;

  @Column('double', {
    name: 'CrewQuartersHS',
    nullable: true,
    default: () => '0',
  })
  crewQuartersHs: number | null;

  @Column('integer', { name: 'DCRating', nullable: true, default: () => '0' })
  dcRating: number | null;

  @Column('integer', {
    name: 'EMSensorStrength',
    nullable: true,
    default: () => '0',
  })
  emSensorStrength: number | null;

  @Column('integer', {
    name: 'EnginePower',
    nullable: true,
    default: () => '0',
  })
  enginePower: number | null;

  @Column('integer', {
    name: 'ESMaxDACRoll',
    nullable: true,
    default: () => '0',
  })
  esMaxDacRoll: number | null;

  @Column('boolean', {
    name: 'FighterClass',
    nullable: true,
    default: () => 'NULL',
  })
  fighterClass: boolean | null;

  @Column('boolean', { name: 'Commercial', nullable: true, default: () => '0' })
  commercial: boolean | null;

  @Column('integer', {
    name: 'FuelCapacity',
    nullable: true,
    default: () => '0',
  })
  fuelCapacity: number | null;

  @Column('double', {
    name: 'FuelEfficiency',
    nullable: true,
    default: () => '0',
  })
  fuelEfficiency: number | null;

  @Column('integer', { name: 'FuelTanker', nullable: true, default: () => '0' })
  fuelTanker: number | null;

  @Column('double', { name: 'GeoSurvey', nullable: true, default: () => '0' })
  geoSurvey: number | null;

  @Column('integer', { name: 'GravSurvey', nullable: true, default: () => '0' })
  gravSurvey: number | null;

  @Column('integer', { name: 'Harvesters', nullable: true, default: () => '0' })
  harvesters: number | null;

  @Column('integer', {
    name: 'HullDescriptionID',
    nullable: true,
    default: () => '25',
  })
  hullDescriptionId: number | null;

  @Column('integer', {
    name: 'JGConstructionTime',
    nullable: true,
    default: () => '0',
  })
  jgConstructionTime: number | null;

  @Column('integer', {
    name: 'JumpDistance',
    nullable: true,
    default: () => '0',
  })
  jumpDistance: number | null;

  @Column('integer', { name: 'JumpRating', nullable: true, default: () => '0' })
  jumpRating: number | null;

  @Column('boolean', { name: 'Locked', nullable: true, default: () => '0' })
  locked: boolean | null;

  @Column('double', {
    name: 'MagazineCapacity',
    nullable: true,
    default: () => '0',
  })
  magazineCapacity: number | null;

  @Column('integer', { name: 'MaxChance', nullable: true, default: () => '0' })
  maxChance: number | null;

  @Column('integer', { name: 'MaxDACRoll', nullable: true, default: () => '0' })
  maxDacRoll: number | null;

  @Column('integer', { name: 'MaxSpeed', nullable: true, default: () => '1' })
  maxSpeed: number | null;

  @Column('integer', {
    name: 'MaintModules',
    nullable: true,
    default: () => '0',
  })
  maintModules: number | null;

  @Column('integer', {
    name: 'MinimumFuel',
    nullable: true,
    default: () => '0',
  })
  minimumFuel: number | null;

  @Column('integer', {
    name: 'MiningModules',
    nullable: true,
    default: () => '0',
  })
  miningModules: number | null;

  @Column('integer', {
    name: 'NameThemeID',
    nullable: true,
    default: () => '0',
  })
  nameThemeId: number | null;

  @Column('integer', { name: 'NoArmour', nullable: true, default: () => '0' })
  noArmour: number | null;

  @Column('text', { name: 'Notes', nullable: true })
  notes: string | null;

  @Column('integer', {
    name: 'MainFunction',
    nullable: true,
    default: () => '0',
  })
  mainFunction: number | null;

  @Column('integer', { name: 'Obsolete', nullable: true, default: () => '0' })
  obsolete: number | null;

  @Column('integer', {
    name: 'OtherRaceClassID',
    nullable: true,
    default: () => '0',
  })
  otherRaceClassId: number | null;

  @Column('double', {
    name: 'ParasiteCapacity',
    nullable: true,
    default: () => '0',
  })
  parasiteCapacity: number | null;

  @Column('integer', {
    name: 'PassiveSensorStrength',
    nullable: true,
    default: () => '1',
  })
  passiveSensorStrength: number | null;

  @Column('double', {
    name: 'PlannedDeployment',
    nullable: true,
    default: () => '3',
  })
  plannedDeployment: number | null;

  @Column('boolean', { name: 'PreTNT', nullable: true, default: () => '0' })
  preTnt: boolean | null;

  @Column('double', {
    name: 'ProtectionValue',
    nullable: true,
    default: () => 'NULL',
  })
  protectionValue: number | null;

  @Column('integer', {
    name: 'RankRequired',
    nullable: true,
    default: () => '0',
  })
  rankRequired: number | null;

  @Column('integer', {
    name: 'ReactorPower',
    nullable: true,
    default: () => '0',
  })
  reactorPower: number | null;

  @Column('boolean', {
    name: 'RecreationalModule',
    nullable: true,
    default: () => 'NULL',
  })
  recreationalModule: boolean | null;

  @Column('integer', {
    name: 'RefuelPriority',
    nullable: true,
    default: () => '0',
  })
  refuelPriority: number | null;

  @Column('integer', {
    name: 'RefuellingRate',
    nullable: true,
    default: () => '10000',
  })
  refuellingRate: number | null;

  @Column('integer', {
    name: 'RefuellingHub',
    nullable: true,
    default: () => '0',
  })
  refuellingHub: number | null;

  @Column('integer', {
    name: 'RequiredPower',
    nullable: true,
    default: () => '0',
  })
  requiredPower: number | null;

  @Column('integer', {
    name: 'SalvageRate',
    nullable: true,
    default: () => '0',
  })
  salvageRate: number | null;

  @Column('double', {
    name: 'SensorReduction',
    nullable: true,
    default: () => '1',
  })
  sensorReduction: number | null;

  @Column('integer', {
    name: 'ShieldStrength',
    nullable: true,
    default: () => '0',
  })
  shieldStrength: number | null;

  @Column('double', { name: 'Size', nullable: true, default: () => '0' })
  size: number | null;

  @Column('integer', { name: 'STSTractor', nullable: true, default: () => '0' })
  stsTractor: number | null;

  @Column('integer', { name: 'SupplyShip', nullable: true, default: () => '0' })
  supplyShip: number | null;

  @Column('integer', {
    name: 'Terraformers',
    nullable: true,
    default: () => '0',
  })
  terraformers: number | null;

  @Column('integer', {
    name: 'TotalNumber',
    nullable: true,
    default: () => '0',
  })
  totalNumber: number | null;

  @Column('integer', {
    name: 'CargoShuttleStrength',
    nullable: true,
    default: () => '0',
  })
  cargoShuttleStrength: number | null;

  @Column('integer', {
    name: 'TroopCapacity',
    nullable: true,
    default: () => '0',
  })
  troopCapacity: number | null;

  @Column('integer', {
    name: 'WorkerCapacity',
    nullable: true,
    default: () => '0',
  })
  workerCapacity: number | null;

  @Column('integer', {
    name: 'MaintPriority',
    nullable: true,
    default: () => '0',
  })
  maintPriority: number | null;

  @Column('boolean', {
    name: 'CommercialHangar',
    nullable: true,
    default: () => '0',
  })
  commercialHangar: boolean | null;

  @Column('integer', {
    name: 'ClassShippingLineID',
    nullable: true,
    default: () => '0',
  })
  classShippingLineId: number | null;

  @Column('boolean', {
    name: 'MoraleCheckRequired',
    nullable: true,
    default: () => 'False',
  })
  moraleCheckRequired: boolean | null;

  @Column('integer', {
    name: 'OrdnanceTransferHub',
    nullable: true,
    default: () => '0',
  })
  ordnanceTransferHub: number | null;

  @Column('integer', {
    name: 'OrdnanceTransferRate',
    nullable: true,
    default: () => '0',
  })
  ordnanceTransferRate: number | null;

  @Column('integer', {
    name: 'TroopTransportType',
    nullable: true,
    default: () => '0',
  })
  troopTransportType: number | null;

  @Column('integer', {
    name: 'AutomatedDesignID',
    nullable: true,
    default: () => '0',
  })
  automatedDesignId: number | null;

  @Column('integer', {
    name: 'MinimumSupplies',
    nullable: true,
    default: () => '0',
  })
  minimumSupplies: number | null;

  @Column('integer', {
    name: 'ResupplyPriority',
    nullable: true,
    default: () => '0',
  })
  resupplyPriority: number | null;

  @Column('integer', {
    name: 'MaintSupplies',
    nullable: true,
    default: () => '0',
  })
  maintSupplies: number | null;

  @Column('integer', {
    name: 'ELINTRating',
    nullable: true,
    default: () => '0',
  })
  elintRating: number | null;

  @Column('integer', {
    name: 'DiplomacyRating',
    nullable: true,
    default: () => '0',
  })
  diplomacyRating: number | null;

  @Column('integer', {
    name: 'CommercialJumpDrive',
    nullable: true,
    default: () => '0',
  })
  commercialJumpDrive: number | null;

  @Column('integer', {
    name: 'BioEnergyCapacity',
    nullable: true,
    default: () => '0',
  })
  bioEnergyCapacity: number | null;

  @Column('integer', { name: 'SeniorCO', nullable: true, default: () => '0' })
  seniorCo: number | null;

  @Column('integer', {
    name: 'RandomShipNameFromTheme',
    nullable: true,
    default: () => '0',
  })
  randomShipNameFromTheme: number | null;

  @Column('text', { name: 'PrefixName', nullable: true })
  prefixName: string | null;

  @Column('text', { name: 'SuffixName', nullable: true })
  suffixName: string | null;

  @Column('integer', {
    name: 'ClassHullNumbers',
    nullable: true,
    default: () => '1',
  })
  classHullNumbers: number | null;

  @Column('integer', { name: 'NoOfficers', nullable: true, default: () => '0' })
  noOfficers: number | null;

  @Column('integer', {
    name: 'RepairYardCapacity',
    nullable: true,
    default: () => '0',
  })
  repairYardCapacity: number | null;

  @Column('boolean', {
    name: 'ArkShip',
    nullable: true,
    default: () => 'FALSE',
  })
  arkShip: boolean | null;

  @Column('integer', {
    name: 'PDProtectionPriority',
    nullable: true,
    default: () => '10',
  })
  pdProtectionPriority: number | null;

  @Column('integer', {
    name: 'ActiveJammerStrength',
    nullable: true,
    default: () => '0',
  })
  activeJammerStrength: number | null;

  @Column('integer', {
    name: 'FireControlJammerStrength',
    nullable: true,
    default: () => '0',
  })
  fireControlJammerStrength: number | null;

  @Column('integer', {
    name: 'MissileJammerStrength',
    nullable: true,
    default: () => '0',
  })
  missileJammerStrength: number | null;

  @Column('integer', {
    name: 'MissileJammerCount',
    nullable: true,
    default: () => '0',
  })
  missileJammerCount: number | null;

  @Column('double', {
    name: 'DecoyCapacity',
    nullable: true,
    default: () => '0',
  })
  decoyCapacity: number | null;
}
