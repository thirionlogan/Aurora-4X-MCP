import { Column, Entity } from "typeorm";

@Entity("FCT_NavalAdminCommand")
export class FctNavalAdminCommand {
  @Column("integer", {
    primary: true,
    name: "NavalAdminCommandID",
    default: () => "0",
  })
  navalAdminCommandId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", { name: "RaceID", nullable: true, default: () => "0" })
  raceId: number | null;

  @Column("integer", {
    name: "PopulationID",
    nullable: true,
    default: () => "0",
  })
  populationId: number | null;

  @Column("integer", {
    name: "ParentAdminCommandID",
    nullable: true,
    default: () => "0",
  })
  parentAdminCommandId: number | null;

  @Column("text", {
    name: "AdminCommandName",
    nullable: true,
    default: () => "NULL",
  })
  adminCommandName: string | null;

  @Column("integer", {
    name: "AdminCommandTypeID",
    nullable: true,
    default: () => "0",
  })
  adminCommandTypeId: number | null;

  @Column("integer", { name: "BonusOne", nullable: true, default: () => "1" })
  bonusOne: number | null;

  @Column("integer", { name: "BonusTwo", nullable: true, default: () => "13" })
  bonusTwo: number | null;

  @Column("integer", {
    name: "BonusThree",
    nullable: true,
    default: () => "28",
  })
  bonusThree: number | null;

  @Column("boolean", {
    name: "AutoAssign",
    nullable: true,
    default: () => "FALSE",
  })
  autoAssign: boolean | null;

  @Column("integer", {
    name: "CommandPriority",
    nullable: true,
    default: () => "1",
  })
  commandPriority: number | null;

  @Column("integer", {
    name: "MinimumRankPriority",
    nullable: true,
    default: () => "10",
  })
  minimumRankPriority: number | null;
}
