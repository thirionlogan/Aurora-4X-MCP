import { Column, Entity } from "typeorm";

@Entity("DIM_AutomatedClassDesign")
export class DimAutomatedClassDesign {
  @Column("integer", {
    primary: true,
    name: "AutomatedClassID",
    nullable: true,
    default: () => "NULL",
  })
  automatedClassId: number | null;

  @Column("text", { name: "DesignID", nullable: true, default: () => "NULL" })
  designId: string | null;

  @Column("text", {
    name: "DefaultClassName",
    nullable: true,
    default: () => "NULL",
  })
  defaultClassName: string | null;

  @Column("text", {
    name: "ShippingLineName",
    nullable: true,
    default: () => "NULL",
  })
  shippingLineName: string | null;

  @Column("integer", { name: "KeyTechA", nullable: true, default: () => "0" })
  keyTechA: number | null;

  @Column("integer", { name: "KeyTechB", nullable: true, default: () => "0" })
  keyTechB: number | null;

  @Column("integer", { name: "HullID", nullable: true, default: () => "0" })
  hullId: number | null;

  @Column("double", { name: "HullSize", nullable: true, default: () => "0" })
  hullSize: number | null;

  @Column("integer", { name: "WeaponType", nullable: true, default: () => "0" })
  weaponType: number | null;

  @Column("integer", {
    name: "MissileType",
    nullable: true,
    default: () => "0",
  })
  missileType: number | null;

  @Column("integer", { name: "EngineType", nullable: true, default: () => "0" })
  engineType: number | null;

  @Column("integer", {
    name: "EngineNumberType",
    nullable: true,
    default: () => "0",
  })
  engineNumberType: number | null;

  @Column("integer", {
    name: "EngineNumber",
    nullable: true,
    default: () => "0",
  })
  engineNumber: number | null;

  @Column("integer", {
    name: "RandomEngineElement",
    nullable: true,
    default: () => "0",
  })
  randomEngineElement: number | null;

  @Column("integer", {
    name: "EngineeringType",
    nullable: true,
    default: () => "0",
  })
  engineeringType: number | null;

  @Column("integer", {
    name: "Engineering",
    nullable: true,
    default: () => "0",
  })
  engineering: number | null;

  @Column("double", {
    name: "DeploymentDuration",
    nullable: true,
    default: () => "0",
  })
  deploymentDuration: number | null;

  @Column("double", {
    name: "FuelDuration",
    nullable: true,
    default: () => "0",
  })
  fuelDuration: number | null;

  @Column("numeric", {
    name: "AdditionalArmour",
    nullable: true,
    default: () => "NULL",
  })
  additionalArmour: number | null;

  @Column("integer", {
    name: "ArmourAdjustment",
    nullable: true,
    default: () => "0",
  })
  armourAdjustment: number | null;

  @Column("integer", { name: "Hangar", nullable: true, default: () => "0" })
  hangar: number | null;

  @Column("integer", { name: "Shields", nullable: true, default: () => "0" })
  shields: number | null;

  @Column("integer", {
    name: "SecondaryActive",
    nullable: true,
    default: () => "0",
  })
  secondaryActive: number | null;

  @Column("integer", {
    name: "NumFireControls",
    nullable: true,
    default: () => "0",
  })
  numFireControls: number | null;

  @Column("integer", {
    name: "MissileFireControl",
    nullable: true,
    default: () => "0",
  })
  missileFireControl: number | null;

  @Column("integer", {
    name: "ThermalFixed",
    nullable: true,
    default: () => "0",
  })
  thermalFixed: number | null;

  @Column("integer", {
    name: "ThermalRandom",
    nullable: true,
    default: () => "0",
  })
  thermalRandom: number | null;

  @Column("integer", { name: "EMFixed", nullable: true, default: () => "0" })
  emFixed: number | null;

  @Column("integer", { name: "EMRandom", nullable: true, default: () => "0" })
  emRandom: number | null;

  @Column("integer", { name: "CargoHolds", nullable: true, default: () => "0" })
  cargoHolds: number | null;

  @Column("integer", {
    name: "CargoHandling",
    nullable: true,
    default: () => "0",
  })
  cargoHandling: number | null;

  @Column("integer", {
    name: "CryogenicModules",
    nullable: true,
    default: () => "0",
  })
  cryogenicModules: number | null;

  @Column("integer", {
    name: "LuxuryAccomodation",
    nullable: true,
    default: () => "0",
  })
  luxuryAccomodation: number | null;

  @Column("integer", {
    name: "SalvageModules",
    nullable: true,
    default: () => "0",
  })
  salvageModules: number | null;

  @Column("numeric", { name: "JGCS", nullable: true, default: () => "0" })
  jgcs: number | null;

  @Column("integer", { name: "CIWSFixed", nullable: true, default: () => "0" })
  ciwsFixed: number | null;

  @Column("integer", { name: "CIWSRandom", nullable: true, default: () => "0" })
  ciwsRandom: number | null;

  @Column("integer", {
    name: "JumpDriveType",
    nullable: true,
    default: () => "0",
  })
  jumpDriveType: number | null;

  @Column("integer", {
    name: "ArmamentType",
    nullable: true,
    default: () => "0",
  })
  armamentType: number | null;

  @Column("text", { name: "HullClass", nullable: true })
  hullClass: string | null;

  @Column("integer", {
    name: "BeamFireControl",
    nullable: true,
    default: () => "0",
  })
  beamFireControl: number | null;

  @Column("integer", {
    name: "AuxiliaryControl",
    nullable: true,
    default: () => "0",
  })
  auxiliaryControl: number | null;

  @Column("integer", {
    name: "ScienceDepartment",
    nullable: true,
    default: () => "0",
  })
  scienceDepartment: number | null;

  @Column("integer", {
    name: "MainEngineering",
    nullable: true,
    default: () => "0",
  })
  mainEngineering: number | null;

  @Column("integer", { name: "CIC", nullable: true, default: () => "0" })
  cic: number | null;

  @Column("integer", {
    name: "PrimaryFlightControl",
    nullable: true,
    default: () => "0",
  })
  primaryFlightControl: number | null;

  @Column("integer", {
    name: "SpinalLaser",
    nullable: true,
    default: () => "0",
  })
  spinalLaser: number | null;

  @Column("integer", { name: "ECCM", nullable: true, default: () => "0" })
  eccm: number | null;

  @Column("integer", {
    name: "FuelTransferSystem",
    nullable: true,
    default: () => "0",
  })
  fuelTransferSystem: number | null;

  @Column("integer", {
    name: "AssignAsTanker",
    nullable: true,
    default: () => "0",
  })
  assignAsTanker: number | null;

  @Column("integer", {
    name: "AssignAsCollier",
    nullable: true,
    default: () => "0",
  })
  assignAsCollier: number | null;

  @Column("integer", { name: "GeoSurvey", nullable: true, default: () => "0" })
  geoSurvey: number | null;

  @Column("integer", { name: "GravSurvey", nullable: true, default: () => "0" })
  gravSurvey: number | null;

  @Column("integer", {
    name: "TroopTransportBase",
    nullable: true,
    default: () => "0",
  })
  troopTransportBase: number | null;

  @Column("integer", {
    name: "TroopTransportRandom",
    nullable: true,
    default: () => "0",
  })
  troopTransportRandom: number | null;

  @Column("text", { name: "Notes", nullable: true })
  notes: string | null;

  @Column("boolean", {
    name: "SecondaryWeapon",
    nullable: true,
    default: () => "FALSE",
  })
  secondaryWeapon: boolean | null;

  @Column("integer", {
    name: "PrimaryActive",
    nullable: true,
    default: () => "0",
  })
  primaryActive: number | null;

  @Column("boolean", {
    name: "FillSpace",
    nullable: true,
    default: () => "TRUE",
  })
  fillSpace: boolean | null;

  @Column("integer", {
    name: "BioEnergyStorage",
    nullable: true,
    default: () => "0",
  })
  bioEnergyStorage: number | null;

  @Column("integer", {
    name: "HullSizeType",
    nullable: true,
    default: () => "0",
  })
  hullSizeType: number | null;

  @Column("boolean", {
    name: "SwarmDesign",
    nullable: true,
    default: () => "0",
  })
  swarmDesign: boolean | null;

  @Column("integer", {
    name: "HiveShipSizeClass",
    nullable: true,
    default: () => "FALSE",
  })
  hiveShipSizeClass: number | null;

  @Column("integer", {
    name: "EnergyEscort",
    nullable: true,
    default: () => "0",
  })
  energyEscort: number | null;

  @Column("integer", {
    name: "SurrenderStatus",
    nullable: true,
    default: () => "0",
  })
  surrenderStatus: number | null;

  @Column("double", {
    name: "MaxFuelHullPercentage",
    nullable: true,
    default: () => "0",
  })
  maxFuelHullPercentage: number | null;

  @Column("integer", {
    name: "StealthDesign",
    nullable: true,
    default: () => "0",
  })
  stealthDesign: number | null;

  @Column("integer", {
    name: "DecoyLaunchers",
    nullable: true,
    default: () => "0",
  })
  decoyLaunchers: number | null;
}
