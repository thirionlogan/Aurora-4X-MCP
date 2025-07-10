import { Column, Entity } from "typeorm";

@Entity("FCT_IndustrialProjects")
export class FctIndustrialProjects {
  @Column("integer", { primary: true, name: "ProjectID", default: () => "0" })
  projectId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("integer", { name: "RaceID", nullable: true, default: () => "NULL" })
  raceId: number | null;

  @Column("integer", {
    name: "PopulationID",
    nullable: true,
    default: () => "NULL",
  })
  populationId: number | null;

  @Column("integer", { name: "SpeciesID", nullable: true, default: () => "0" })
  speciesId: number | null;

  @Column("double", {
    name: "Percentage",
    nullable: true,
    default: () => "NULL",
  })
  percentage: number | null;

  @Column("integer", {
    name: "ProductionType",
    nullable: true,
    default: () => "NULL",
  })
  productionType: number | null;

  @Column("integer", {
    name: "ProductionID",
    nullable: true,
    default: () => "NULL",
  })
  productionId: number | null;

  @Column("integer", {
    name: "RefitClassID",
    nullable: true,
    default: () => "0",
  })
  refitClassId: number | null;

  @Column("integer", {
    name: "WealthUse",
    nullable: true,
    default: () => "NULL",
  })
  wealthUse: number | null;

  @Column("double", { name: "Amount", nullable: true, default: () => "NULL" })
  amount: number | null;

  @Column("double", {
    name: "PartialCompletion",
    nullable: true,
    default: () => "0",
  })
  partialCompletion: number | null;

  @Column("double", {
    name: "ProdPerUnit",
    nullable: true,
    default: () => "NULL",
  })
  prodPerUnit: number | null;

  @Column("varchar", {
    name: "Description",
    nullable: true,
    length: 255,
    default: () => "NULL",
  })
  description: string | null;

  @Column("boolean", { name: "Pause", nullable: true, default: () => "NULL" })
  pause: boolean | null;

  @Column("integer", { name: "Queue", nullable: true, default: () => "0" })
  queue: number | null;

  @Column("integer", {
    name: "FuelRequired",
    nullable: true,
    default: () => "0",
  })
  fuelRequired: number | null;

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
}
