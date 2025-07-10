import { Column, Entity } from "typeorm";

@Entity("FCT_KnownRuinRace")
export class FctKnownRuinRace {
  @Column("integer", { primary: true, name: "RuinRaceID" })
  ruinRaceId: number;

  @Column("integer", { primary: true, name: "RaceID" })
  raceId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;
}
