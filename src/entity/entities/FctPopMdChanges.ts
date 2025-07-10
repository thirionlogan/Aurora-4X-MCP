import { Column, Entity } from "typeorm";

@Entity("FCT_PopMDChanges")
export class FctPopMdChanges {
  @Column("integer", { primary: true, name: "PopulationID" })
  populationId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

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
