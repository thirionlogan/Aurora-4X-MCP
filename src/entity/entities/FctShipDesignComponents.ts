import { Column, Entity } from "typeorm";

@Entity("FCT_ShipDesignComponents")
export class FctShipDesignComponents {
  @Column("integer", {
    primary: true,
    name: "SDComponentID",
    nullable: true,
    default: () => "0",
  })
  sdComponentId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("text", { name: "Name", nullable: true, default: () => "NULL" })
  name: string | null;

  @Column("boolean", { name: "NoScrap", nullable: true, default: () => "NULL" })
  noScrap: boolean | null;

  @Column("boolean", {
    name: "MilitarySystem",
    nullable: true,
    default: () => "0",
  })
  militarySystem: boolean | null;

  @Column("boolean", {
    name: "ShippingLineSystem",
    nullable: true,
    default: () => "NULL",
  })
  shippingLineSystem: boolean | null;

  @Column("boolean", { name: "BeamWeapon", nullable: true, default: () => "0" })
  beamWeapon: boolean | null;

  @Column("integer", { name: "Crew", nullable: true, default: () => "0" })
  crew: number | null;

  @Column("double", { name: "Size", nullable: true, default: () => "0" })
  size: number | null;

  @Column("double", { name: "Cost", nullable: true, default: () => "0" })
  cost: number | null;

  @Column("integer", {
    name: "ComponentTypeID",
    nullable: true,
    default: () => "NULL",
  })
  componentTypeId: number | null;

  @Column("double", {
    name: "ComponentValue",
    nullable: true,
    default: () => "1",
  })
  componentValue: number | null;

  @Column("double", {
    name: "PowerRequirement",
    nullable: true,
    default: () => "0",
  })
  powerRequirement: number | null;

  @Column("double", {
    name: "RechargeRate",
    nullable: true,
    default: () => "0",
  })
  rechargeRate: number | null;

  @Column("boolean", {
    name: "ElectronicSystem",
    nullable: true,
    default: () => "NULL",
  })
  electronicSystem: boolean | null;

  @Column("integer", {
    name: "ElectronicCTD",
    nullable: true,
    default: () => "100",
  })
  electronicCtd: number | null;

  @Column("integer", {
    name: "TrackingSpeed",
    nullable: true,
    default: () => "0",
  })
  trackingSpeed: number | null;

  @Column("integer", {
    name: "SpecialFunction",
    nullable: true,
    default: () => "NULL",
  })
  specialFunction: number | null;

  @Column("double", {
    name: "MaxSensorRange",
    nullable: true,
    default: () => "0",
  })
  maxSensorRange: number | null;

  @Column("double", { name: "Resolution", nullable: true, default: () => "0" })
  resolution: number | null;

  @Column("integer", { name: "HTK", nullable: true, default: () => "1" })
  htk: number | null;

  @Column("double", { name: "FuelUse", nullable: true, default: () => "0" })
  fuelUse: number | null;

  @Column("boolean", {
    name: "NoMaintFailure",
    nullable: true,
    default: () => "0",
  })
  noMaintFailure: boolean | null;

  @Column("boolean", {
    name: "HangarReloadOnly",
    nullable: true,
    default: () => "NULL",
  })
  hangarReloadOnly: boolean | null;

  @Column("double", {
    name: "ExplosionChance",
    nullable: true,
    default: () => "0",
  })
  explosionChance: number | null;

  @Column("integer", {
    name: "MaxExplosionSize",
    nullable: true,
    default: () => "0",
  })
  maxExplosionSize: number | null;

  @Column("integer", {
    name: "DamageOutput",
    nullable: true,
    default: () => "0",
  })
  damageOutput: number | null;

  @Column("integer", {
    name: "NumberOfShots",
    nullable: true,
    default: () => "1",
  })
  numberOfShots: number | null;

  @Column("double", {
    name: "RangeModifier",
    nullable: true,
    default: () => "0",
  })
  rangeModifier: number | null;

  @Column("integer", {
    name: "MaxWeaponRange",
    nullable: true,
    default: () => "0",
  })
  maxWeaponRange: number | null;

  @Column("boolean", {
    name: "SpinalWeapon",
    nullable: true,
    default: () => "0",
  })
  spinalWeapon: boolean | null;

  @Column("integer", {
    name: "JumpDistance",
    nullable: true,
    default: () => "0",
  })
  jumpDistance: number | null;

  @Column("integer", { name: "JumpRating", nullable: true, default: () => "0" })
  jumpRating: number | null;

  @Column("integer", { name: "RateOfFire", nullable: true, default: () => "0" })
  rateOfFire: number | null;

  @Column("integer", {
    name: "MaxPercentage",
    nullable: true,
    default: () => "0",
  })
  maxPercentage: number | null;

  @Column("double", {
    name: "FuelEfficiency",
    nullable: true,
    default: () => "0",
  })
  fuelEfficiency: number | null;

  @Column("boolean", {
    name: "IgnoreShields",
    nullable: true,
    default: () => "0",
  })
  ignoreShields: boolean | null;

  @Column("boolean", {
    name: "IgnoreArmour",
    nullable: true,
    default: () => "0",
  })
  ignoreArmour: boolean | null;

  @Column("boolean", {
    name: "ElectronicOnly",
    nullable: true,
    default: () => "NULL",
  })
  electronicOnly: boolean | null;

  @Column("double", {
    name: "StealthRating",
    nullable: true,
    default: () => "0",
  })
  stealthRating: number | null;

  @Column("double", { name: "CloakRating", nullable: true, default: () => "0" })
  cloakRating: number | null;

  @Column("boolean", { name: "Weapon", nullable: true, default: () => "NULL" })
  weapon: boolean | null;

  @Column("integer", { name: "BGTech1", nullable: true, default: () => "0" })
  bgTech1: number | null;

  @Column("integer", { name: "BGTech2", nullable: true, default: () => "0" })
  bgTech2: number | null;

  @Column("integer", { name: "BGTech3", nullable: true, default: () => "0" })
  bgTech3: number | null;

  @Column("integer", { name: "BGTech4", nullable: true, default: () => "0" })
  bgTech4: number | null;

  @Column("integer", { name: "BGTech5", nullable: true, default: () => "0" })
  bgTech5: number | null;

  @Column("integer", { name: "BGTech6", nullable: true, default: () => "0" })
  bgTech6: number | null;

  @Column("double", { name: "Duranium", nullable: true, default: () => "0" })
  duranium: number | null;

  @Column("double", { name: "Neutronium", nullable: true, default: () => "0" })
  neutronium: number | null;

  @Column("double", { name: "Corbomite", nullable: true, default: () => "0" })
  corbomite: number | null;

  @Column("double", { name: "Tritanium", nullable: true, default: () => "0" })
  tritanium: number | null;

  @Column("double", { name: "Boronide", nullable: true, default: () => "0" })
  boronide: number | null;

  @Column("double", { name: "Mercassium", nullable: true, default: () => "0" })
  mercassium: number | null;

  @Column("double", { name: "Vendarite", nullable: true, default: () => "0" })
  vendarite: number | null;

  @Column("double", { name: "Sorium", nullable: true, default: () => "0" })
  sorium: number | null;

  @Column("double", { name: "Uridium", nullable: true, default: () => "0" })
  uridium: number | null;

  @Column("double", { name: "Corundium", nullable: true, default: () => "0" })
  corundium: number | null;

  @Column("double", { name: "Gallicite", nullable: true, default: () => "0" })
  gallicite: number | null;

  @Column("integer", { name: "SingleSystemOnly", nullable: true })
  singleSystemOnly: number | null;

  @Column("boolean", {
    name: "ShipyardRepairOnly",
    nullable: true,
    default: () => "False",
  })
  shipyardRepairOnly: boolean | null;

  @Column("double", { name: "ECCM", nullable: true, default: () => "0" })
  eccm: number | null;

  @Column("double", {
    name: "ArmourRetardation",
    nullable: true,
    default: () => "0",
  })
  armourRetardation: number | null;

  @Column("double", {
    name: "WeaponToHitModifier",
    nullable: true,
    default: () => "1",
  })
  weaponToHitModifier: number | null;

  @Column("integer", { name: "Prototype", nullable: true, default: () => "0" })
  prototype: number | null;

  @Column("integer", {
    name: "TurretWeaponID",
    nullable: true,
    default: () => "0",
  })
  turretWeaponId: number | null;

  @Column("integer", {
    name: "ShipComponentTemplateID",
    nullable: true,
    default: () => "0",
  })
  shipComponentTemplateId: number | null;

  @Column("integer", { name: "BGTech7", nullable: true, default: () => "0" })
  bgTech7: number | null;

  @Column("double", {
    name: "EnginePowerMod",
    nullable: true,
    default: () => "1",
  })
  enginePowerMod: number | null;

  @Column("integer", { name: "ExtraHTK", nullable: true, default: () => "0" })
  extraHtk: number | null;
}
