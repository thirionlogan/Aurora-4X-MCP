import { Column, Entity } from "typeorm";

@Entity("FCT_AlienSystem")
export class FctAlienSystem {
  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("integer", {
    name: "SystemID",
    nullable: true,
    default: () => "NULL",
  })
  systemId: number | null;

  @Column("integer", {
    name: "AlienRaceID",
    nullable: true,
    default: () => "NULL",
  })
  alienRaceId: number | null;

  @Column("integer", {
    name: "DetectRaceID",
    nullable: true,
    default: () => "NULL",
  })
  detectRaceId: number | null;
}
