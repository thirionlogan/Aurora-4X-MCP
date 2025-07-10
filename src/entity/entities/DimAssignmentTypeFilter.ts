import { Column, Entity } from "typeorm";

@Entity("DIM_AssignmentTypeFilter")
export class DimAssignmentTypeFilter {
  @Column("integer", {
    primary: true,
    name: "AssignmentTypeID",
    nullable: true,
    default: () => "NULL",
  })
  assignmentTypeId: number | null;

  @Column("integer", {
    name: "LeaderType",
    nullable: true,
    default: () => "NULL",
  })
  leaderType: number | null;

  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("integer", {
    name: "DisplayOrder",
    nullable: true,
    default: () => "NULL",
  })
  displayOrder: number | null;

  @Column("numeric", { name: "Ship", nullable: true, default: () => "NULL" })
  ship: number | null;

  @Column("numeric", { name: "Team", nullable: true, default: () => "NULL" })
  team: number | null;

  @Column("numeric", {
    name: "Population",
    nullable: true,
    default: () => "NULL",
  })
  population: number | null;

  @Column("numeric", { name: "Sector", nullable: true, default: () => "NULL" })
  sector: number | null;

  @Column("numeric", { name: "Ground", nullable: true, default: () => "NULL" })
  ground: number | null;

  @Column("numeric", { name: "Fighter", nullable: true, default: () => "NULL" })
  fighter: number | null;

  @Column("numeric", { name: "Armed", nullable: true, default: () => "NULL" })
  armed: number | null;

  @Column("numeric", {
    name: "Freighters",
    nullable: true,
    default: () => "NULL",
  })
  freighters: number | null;

  @Column("numeric", {
    name: "NavalAdmin",
    nullable: true,
    default: () => "NULL",
  })
  navalAdmin: number | null;

  @Column("integer", { name: "Survey", nullable: true })
  survey: number | null;

  @Column("integer", { name: "RankPriorityModifier", nullable: true })
  rankPriorityModifier: number | null;

  @Column("integer", { name: "ShipCommandType", nullable: true })
  shipCommandType: number | null;

  @Column("integer", { name: "Academy", nullable: true, default: () => "0" })
  academy: number | null;
}
