import { Column, Entity } from "typeorm";

@Entity("FCT_BannedBodies")
export class FctBannedBodies {
  @Column("integer", {
    name: "SystemBodyID",
    nullable: true,
    default: () => "0",
  })
  systemBodyId: number | null;

  @Column("integer", { name: "RaceID", nullable: true, default: () => "0" })
  raceId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;
}
