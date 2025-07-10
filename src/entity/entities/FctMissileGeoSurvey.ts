import { Column, Entity } from "typeorm";

@Entity("FCT_MissileGeoSurvey")
export class FctMissileGeoSurvey {
  @Column("integer", {
    primary: true,
    name: "SystemBodyID",
    nullable: true,
    default: () => "NULL",
  })
  systemBodyId: number | null;

  @Column("integer", {
    primary: true,
    name: "RaceID",
    nullable: true,
    default: () => "NULL",
  })
  raceId: number | null;

  @Column("double", {
    name: "SurveyPoints",
    nullable: true,
    default: () => "NULL",
  })
  surveyPoints: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;
}
