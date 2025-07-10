import { Column, Entity } from "typeorm";

@Entity("DIM_GroundComponentType")
export class DimGroundComponentType {
  @Column("double", { name: "Size", nullable: true, default: () => "0" })
  size: number | null;

  @Column("boolean", { name: "Static", nullable: true, default: () => "False" })
  static: boolean | null;

  @Column("boolean", {
    name: "Infantry",
    nullable: true,
    default: () => "False",
  })
  infantry: boolean | null;

  @Column("boolean", {
    name: "Vehicle",
    nullable: true,
    default: () => "False",
  })
  vehicle: boolean | null;

  @Column("boolean", {
    name: "SuperHeavyVehicle",
    nullable: true,
    default: () => "False",
  })
  superHeavyVehicle: boolean | null;

  @Column("double", { name: "Penetration", nullable: true, default: () => "0" })
  penetration: number | null;

  @Column("double", { name: "Damage", nullable: true, default: () => "0" })
  damage: number | null;

  @Column("integer", { name: "Shots", nullable: true, default: () => "0" })
  shots: number | null;

  @Column("integer", {
    name: "TechSystemID",
    nullable: true,
    default: () => "0",
  })
  techSystemId: number | null;

  @Column("text", { name: "ComponentName", nullable: true })
  componentName: string | null;

  @Column("integer", {
    primary: true,
    name: "ComponentTypeID",
    nullable: true,
    default: () => "0",
  })
  componentTypeId: number | null;

  @Column("text", { name: "Abbreviation", nullable: true })
  abbreviation: string | null;

  @Column("boolean", { name: "HeavyVehicle", nullable: true })
  heavyVehicle: boolean | null;

  @Column("boolean", { name: "UltraHeavyVehicle", nullable: true })
  ultraHeavyVehicle: boolean | null;

  @Column("integer", { name: "STO", nullable: true })
  sto: number | null;

  @Column("double", { name: "Construction", nullable: true })
  construction: number | null;

  @Column("integer", { name: "FireDirection", nullable: true })
  fireDirection: number | null;

  @Column("integer", { name: "HQMaxSize", nullable: true })
  hqMaxSize: number | null;

  @Column("boolean", {
    name: "LightVehicle",
    nullable: true,
    default: () => "False",
  })
  lightVehicle: boolean | null;

  @Column("integer", {
    name: "BombardmentWeapon",
    nullable: true,
    default: () => "False",
  })
  bombardmentWeapon: number | null;

  @Column("double", { name: "Geosurvey", nullable: true, default: () => "0" })
  geosurvey: number | null;

  @Column("integer", {
    name: "LogisticsPoints",
    nullable: true,
    default: () => "0",
  })
  logisticsPoints: number | null;

  @Column("double", { name: "SupplyUse", nullable: true, default: () => "0" })
  supplyUse: number | null;

  @Column("integer", { name: "AAWeapon", nullable: true, default: () => "0" })
  aaWeapon: number | null;

  @Column("integer", {
    name: "DisplayOrder",
    nullable: true,
    default: () => "0",
  })
  displayOrder: number | null;

  @Column("double", {
    name: "Xenoarchaeology",
    nullable: true,
    default: () => "0",
  })
  xenoarchaeology: number | null;

  @Column("double", {
    name: "Decontamination",
    nullable: true,
    default: () => "0",
  })
  decontamination: number | null;

  @Column("boolean", {
    name: "GroundWeapon",
    nullable: true,
    default: () => "FALSE",
  })
  groundWeapon: boolean | null;
}
