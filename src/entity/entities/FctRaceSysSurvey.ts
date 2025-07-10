import { Column, Entity } from "typeorm";

@Entity("FCT_RaceSysSurvey")
export class FctRaceSysSurvey {
  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", { primary: true, name: "RaceID" })
  raceId: number;

  @Column("integer", { primary: true, name: "SystemID" })
  systemId: number;

  @Column("text", { name: "Name", default: () => "'Not Yet Named'" })
  name: string;

  @Column("integer", {
    name: "DangerRating",
    nullable: true,
    default: () => "0",
  })
  dangerRating: number | null;

  @Column("boolean", {
    name: "SysTPStatus",
    nullable: true,
    default: () => "0",
  })
  sysTpStatus: boolean | null;

  @Column("integer", {
    name: "ControlRaceID",
    nullable: true,
    default: () => "0",
  })
  controlRaceId: number | null;

  @Column("integer", {
    name: "ForeignFleetRaceID",
    nullable: true,
    default: () => "0",
  })
  foreignFleetRaceId: number | null;

  @Column("integer", { name: "SectorID", nullable: true, default: () => "0" })
  sectorId: number | null;

  @Column("integer", {
    name: "NameThemeID",
    nullable: true,
    default: () => "0",
  })
  nameThemeId: number | null;

  @Column("text", { name: "Discovered", nullable: true, default: () => "'0'" })
  discovered: string | null;

  @Column("integer", { name: "Xcor", default: () => "2000" })
  xcor: number;

  @Column("integer", { name: "Ycor", default: () => "2000" })
  ycor: number;

  @Column("integer", { name: "ClosedWP", nullable: true, default: () => "0" })
  closedWp: number | null;

  @Column("boolean", { name: "SurveyDone", nullable: true, default: () => "0" })
  surveyDone: boolean | null;

  @Column("double", {
    name: "SelectedBodyXcor",
    nullable: true,
    default: () => "0",
  })
  selectedBodyXcor: number | null;

  @Column("double", {
    name: "SelectedBodyYcor",
    nullable: true,
    default: () => "0",
  })
  selectedBodyYcor: number | null;

  @Column("double", { name: "KmPerPixel", nullable: true, default: () => "0" })
  kmPerPixel: number | null;

  @Column("boolean", {
    name: "GeoSurveyDefaultDone",
    nullable: true,
    default: () => "0",
  })
  geoSurveyDefaultDone: boolean | null;

  @Column("double", {
    name: "DiscoveredTime",
    nullable: true,
    default: () => "0",
  })
  discoveredTime: number | null;

  @Column("boolean", {
    name: "NoAutoRoute",
    nullable: true,
    default: () => "False",
  })
  noAutoRoute: boolean | null;

  @Column("boolean", {
    name: "MilitaryRestrictedSystem",
    nullable: true,
    default: () => "FALSE",
  })
  militaryRestrictedSystem: boolean | null;

  @Column("integer", {
    name: "SystemValue",
    nullable: true,
    default: () => "1",
  })
  systemValue: number | null;

  @Column("integer", {
    name: "AutoProtectionStatus",
    nullable: true,
    default: () => "0",
  })
  autoProtectionStatus: number | null;

  @Column("boolean", {
    name: "MineralSearchFlag",
    nullable: true,
    default: () => "FALSE",
  })
  mineralSearchFlag: boolean | null;

  @Column("integer", { name: "RaidRating", nullable: true, default: () => "0" })
  raidRating: number | null;
}
