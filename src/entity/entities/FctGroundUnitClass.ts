import { Column, Entity } from "typeorm";

@Entity("FCT_GroundUnitClass")
export class FctGroundUnitClass {
  @Column("integer", { name: "BaseType", nullable: true })
  baseType: number | null;

  @Column("integer", {
    primary: true,
    name: "GroundUnitClassID",
    nullable: true,
    default: () => "0",
  })
  groundUnitClassId: number | null;

  @Column("integer", {
    name: "TechSystemID",
    nullable: true,
    default: () => "0",
  })
  techSystemId: number | null;

  @Column("text", { name: "ClassName", nullable: true })
  className: string | null;

  @Column("integer", { name: "ArmourType", nullable: true, default: () => "0" })
  armourType: number | null;

  @Column("integer", {
    name: "ComponentA",
    nullable: true,
    default: () => "-1",
  })
  componentA: number | null;

  @Column("integer", {
    name: "ComponentB",
    nullable: true,
    default: () => "-1",
  })
  componentB: number | null;

  @Column("integer", {
    name: "ComponentC",
    nullable: true,
    default: () => "-1",
  })
  componentC: number | null;

  @Column("double", {
    name: "ArmourStrengthModifier",
    nullable: true,
    default: () => "1",
  })
  armourStrengthModifier: number | null;

  @Column("double", {
    name: "WeaponStrengthModifier",
    nullable: true,
    default: () => "1",
  })
  weaponStrengthModifier: number | null;

  @Column("double", { name: "Size", nullable: true, default: () => "0" })
  size: number | null;

  @Column("double", { name: "Cost", nullable: true, default: () => "0" })
  cost: number | null;

  @Column("integer", { name: "GameID", nullable: true })
  gameId: number | null;

  @Column("integer", { name: "STOWeapon", nullable: true, default: () => "-1" })
  stoWeapon: number | null;

  @Column("integer", {
    name: "ComponentD",
    nullable: true,
    default: () => "-1",
  })
  componentD: number | null;

  @Column("integer", {
    name: "TrackingSpeed",
    nullable: true,
    default: () => "0",
  })
  trackingSpeed: number | null;

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

  @Column("integer", { name: "ECCM", nullable: true, default: () => "0" })
  eccm: number | null;

  @Column("integer", {
    name: "GUClassType",
    nullable: true,
    default: () => "0",
  })
  guClassType: number | null;

  @Column("double", {
    name: "UnitSupplyCost",
    nullable: true,
    default: () => "0",
  })
  unitSupplyCost: number | null;

  @Column("integer", {
    name: "ActiveSensorRange",
    nullable: true,
    default: () => "0",
  })
  activeSensorRange: number | null;

  @Column("double", {
    name: "SensorStrength",
    nullable: true,
    default: () => "0",
  })
  sensorStrength: number | null;

  @Column("integer", {
    name: "RechargeTime",
    nullable: true,
    default: () => "0",
  })
  rechargeTime: number | null;

  @Column("integer", {
    name: "MaxWeaponRange",
    nullable: true,
    default: () => "0",
  })
  maxWeaponRange: number | null;

  @Column("integer", {
    name: "MaxFireControlRange",
    nullable: true,
    default: () => "0",
  })
  maxFireControlRange: number | null;

  @Column("double", {
    name: "ConstructionRating",
    nullable: true,
    default: () => "0",
  })
  constructionRating: number | null;

  @Column("integer", { name: "HQCapacity", nullable: true, default: () => "0" })
  hqCapacity: number | null;

  @Column("boolean", {
    name: "NonCombatClass",
    nullable: true,
    default: () => "FALSE",
  })
  nonCombatClass: boolean | null;

  @Column("integer", {
    name: "ClassGroundUnitSeriesPriority",
    nullable: true,
    default: () => "0",
  })
  classGroundUnitSeriesPriority: number | null;

  @Column("integer", {
    name: "ClassGroundUnitSeries",
    nullable: true,
    default: () => "0",
  })
  classGroundUnitSeries: number | null;

  @Column("boolean", {
    name: "PointDefenceWeapon",
    nullable: true,
    default: () => "FALSE",
  })
  pointDefenceWeapon: boolean | null;
}
