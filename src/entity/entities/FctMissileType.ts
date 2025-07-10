import { Column, Entity } from "typeorm";

@Entity("FCT_MissileType")
export class FctMissileType {
  @Column("integer", { primary: true, name: "MissileID" })
  missileId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("text", { name: "Name", nullable: true, default: () => "NULL" })
  name: string | null;

  @Column("integer", {
    name: "MissileSeriesID",
    nullable: true,
    default: () => "0",
  })
  missileSeriesId: number | null;

  @Column("integer", { name: "EngineID", nullable: true, default: () => "0" })
  engineId: number | null;

  @Column("integer", { name: "NumEngines", nullable: true, default: () => "0" })
  numEngines: number | null;

  @Column("boolean", {
    name: "PrecursorMissile",
    nullable: true,
    default: () => "NULL",
  })
  precursorMissile: boolean | null;

  @Column("integer", {
    name: "MissilesRequired",
    nullable: true,
    default: () => "0",
  })
  missilesRequired: number | null;

  @Column("integer", {
    name: "MissilesAvailable",
    nullable: true,
    default: () => "0",
  })
  missilesAvailable: number | null;

  @Column("double", { name: "Cost", nullable: true, default: () => "0" })
  cost: number | null;

  @Column("double", { name: "Size", nullable: true, default: () => "NULL" })
  size: number | null;

  @Column("double", { name: "Speed", nullable: true, default: () => "NULL" })
  speed: number | null;

  @Column("double", { name: "RadDamage", nullable: true, default: () => "1" })
  radDamage: number | null;

  @Column("integer", {
    name: "FuelRequired",
    nullable: true,
    default: () => "0",
  })
  fuelRequired: number | null;

  @Column("double", { name: "Endurance", nullable: true, default: () => "0" })
  endurance: number | null;

  @Column("double", { name: "MaxRange", nullable: true, default: () => "0" })
  maxRange: number | null;

  @Column("double", {
    name: "WarheadStrength",
    nullable: true,
    default: () => "NULL",
  })
  warheadStrength: number | null;

  @Column("double", {
    name: "SensorStrength",
    nullable: true,
    default: () => "0",
  })
  sensorStrength: number | null;

  @Column("integer", {
    name: "SensorResolution",
    nullable: true,
    default: () => "0",
  })
  sensorResolution: number | null;

  @Column("integer", {
    name: "SensorRange",
    nullable: true,
    default: () => "0",
  })
  sensorRange: number | null;

  @Column("double", {
    name: "ThermalStrength",
    nullable: true,
    default: () => "0",
  })
  thermalStrength: number | null;

  @Column("double", { name: "EMStrength", nullable: true, default: () => "0" })
  emStrength: number | null;

  @Column("double", { name: "Geostrength", nullable: true, default: () => "0" })
  geostrength: number | null;

  @Column("double", {
    name: "TotalFlightTime",
    nullable: true,
    default: () => "0",
  })
  totalFlightTime: number | null;

  @Column("integer", { name: "ECM", nullable: true, default: () => "0" })
  ecm: number | null;

  @Column("integer", { name: "MR", nullable: true, default: () => "10" })
  mr: number | null;

  @Column("integer", {
    name: "SecondStageID",
    nullable: true,
    default: () => "0",
  })
  secondStageId: number | null;

  @Column("integer", { name: "NumSS", nullable: true, default: () => "0" })
  numSs: number | null;

  @Column("integer", {
    name: "SeparationRange",
    nullable: true,
    default: () => "0",
  })
  separationRange: number | null;

  @Column("double", { name: "Corbomite", nullable: true, default: () => "0" })
  corbomite: number | null;

  @Column("double", { name: "Tritanium", nullable: true, default: () => "0" })
  tritanium: number | null;

  @Column("double", { name: "Boronide", nullable: true, default: () => "0" })
  boronide: number | null;

  @Column("double", { name: "Uridium", nullable: true, default: () => "0" })
  uridium: number | null;

  @Column("double", { name: "Gallicite", nullable: true, default: () => "0" })
  gallicite: number | null;

  @Column("boolean", { name: "PreTNT", nullable: true, default: () => "NULL" })
  preTnt: boolean | null;

  @Column("double", { name: "MSPReactor", nullable: true, default: () => "0" })
  mspReactor: number | null;

  @Column("double", { name: "MSPWarhead", nullable: true, default: () => "0" })
  mspWarhead: number | null;

  @Column("double", { name: "MSPEngine", nullable: true, default: () => "0" })
  mspEngine: number | null;

  @Column("double", { name: "MSPFuel", nullable: true, default: () => "0" })
  mspFuel: number | null;

  @Column("double", { name: "MSPActive", nullable: true, default: () => "0" })
  mspActive: number | null;

  @Column("double", { name: "MSPThermal", nullable: true, default: () => "0" })
  mspThermal: number | null;

  @Column("double", { name: "MSPEM", nullable: true, default: () => "0" })
  mspem: number | null;

  @Column("double", { name: "MSPGeo", nullable: true, default: () => "0" })
  mspGeo: number | null;

  @Column("integer", { name: "ECCM", nullable: true, default: () => "0" })
  eccm: number | null;

  @Column("integer", {
    name: "EMSensitivity",
    nullable: true,
    default: () => "10",
  })
  emSensitivity: number | null;

  @Column("double", { name: "GroundAP", nullable: true, default: () => "0" })
  groundAp: number | null;

  @Column("double", {
    name: "GroundDamage",
    nullable: true,
    default: () => "0",
  })
  groundDamage: number | null;

  @Column("double", { name: "GroundShots", nullable: true, default: () => "0" })
  groundShots: number | null;

  @Column("double", {
    name: "GroundBaseDamage",
    nullable: true,
    default: () => "0",
  })
  groundBaseDamage: number | null;

  @Column("double", { name: "PowerMod", nullable: true, default: () => "1" })
  powerMod: number | null;

  @Column("double", { name: "ATG", nullable: true, default: () => "1" })
  atg: number | null;

  @Column("integer", {
    name: "Retargeting",
    nullable: true,
    default: () => "0",
  })
  retargeting: number | null;

  @Column("double", {
    name: "LaserWarhead",
    nullable: true,
    default: () => "0",
  })
  laserWarhead: number | null;

  @Column("double", {
    name: "DetonationRange",
    nullable: true,
    default: () => "0",
  })
  detonationRange: number | null;

  @Column("integer", {
    name: "LaserWarheadRangeModifier",
    nullable: true,
    default: () => "0",
  })
  laserWarheadRangeModifier: number | null;

  @Column("integer", { name: "NumDecoys", nullable: true, default: () => "0" })
  numDecoys: number | null;

  @Column("double", { name: "MSPDecoys", nullable: true, default: () => "0" })
  mspDecoys: number | null;

  @Column("integer", { name: "MissileECM", nullable: true, default: () => "0" })
  missileEcm: number | null;

  @Column("integer", {
    name: "MultipleWarheads",
    nullable: true,
    default: () => "1",
  })
  multipleWarheads: number | null;

  @Column("double", {
    name: "MSPMultipleWarheads",
    nullable: true,
    default: () => "0",
  })
  mspMultipleWarheads: number | null;

  @Column("integer", { name: "ShipDecoy", nullable: true, default: () => "0" })
  shipDecoy: number | null;

  @Column("double", {
    name: "MSPShipDecoy",
    nullable: true,
    default: () => "0",
  })
  mspShipDecoy: number | null;
}
