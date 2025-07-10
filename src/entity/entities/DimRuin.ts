import { Column, Entity } from "typeorm";

@Entity("DIM_Ruin")
export class DimRuin {
  @Column("integer", {
    primary: true,
    name: "RuinID",
    nullable: true,
    default: () => "NULL",
  })
  ruinId: number | null;

  @Column("integer", {
    name: "MaxChance",
    nullable: true,
    default: () => "NULL",
  })
  maxChance: number | null;

  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("integer", {
    name: "AnnualTechChance",
    nullable: true,
    default: () => "NULL",
  })
  annualTechChance: number | null;

  @Column("integer", {
    name: "ExploitedChance",
    nullable: true,
    default: () => "NULL",
  })
  exploitedChance: number | null;

  @Column("integer", {
    name: "FactoriesBase",
    nullable: true,
    default: () => "NULL",
  })
  factoriesBase: number | null;

  @Column("integer", {
    name: "FactoriesRandom",
    nullable: true,
    default: () => "NULL",
  })
  factoriesRandom: number | null;

  @Column("integer", {
    name: "DefenceBases",
    nullable: true,
    default: () => "0",
  })
  defenceBases: number | null;

  @Column("integer", {
    name: "OffenceBases",
    nullable: true,
    default: () => "0",
  })
  offenceBases: number | null;

  @Column("integer", { name: "Fleet", nullable: true, default: () => "0" })
  fleet: number | null;

  @Column("integer", { name: "Squadron", nullable: true, default: () => "0" })
  squadron: number | null;

  @Column("integer", { name: "Patrol", nullable: true, default: () => "0" })
  patrol: number | null;

  @Column("integer", { name: "STO", nullable: true })
  sto: number | null;

  @Column("integer", { name: "Regiment", nullable: true })
  regiment: number | null;

  @Column("integer", { name: "FixedDSTS", nullable: true })
  fixedDsts: number | null;

  @Column("integer", { name: "RandomDSTS", nullable: true })
  randomDsts: number | null;
}
