import { Column, Entity } from "typeorm";

@Entity("FCT_CommanderMedal")
export class FctCommanderMedal {
  @Column("integer", { name: "NumAwarded", nullable: true, default: () => "1" })
  numAwarded: number | null;

  @Column("integer", {
    primary: true,
    name: "MedalID",
    nullable: true,
    default: () => "NULL",
  })
  medalId: number | null;

  @Column("integer", {
    primary: true,
    name: "CommanderID",
    nullable: true,
    default: () => "NULL",
  })
  commanderId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("text", { name: "AwardReason", nullable: true })
  awardReason: string | null;
}
