import { Column, Entity } from "typeorm";

@Entity("FCT_RaceNameThemes")
export class FctRaceNameThemes {
  @Column("integer", {
    primary: true,
    name: "RaceID",
    nullable: true,
    default: () => "NULL",
  })
  raceId: number | null;

  @Column("integer", {
    primary: true,
    name: "NameThemeID",
    nullable: true,
    default: () => "NULL",
  })
  nameThemeId: number | null;

  @Column("integer", { name: "Chance", nullable: true, default: () => "NULL" })
  chance: number | null;

  @Column("integer", { name: "GameID", nullable: true })
  gameId: number | null;
}
