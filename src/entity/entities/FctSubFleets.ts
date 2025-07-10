import { Column, Entity } from "typeorm";

@Entity("FCT_SubFleets")
export class FctSubFleets {
  @Column("integer", { primary: true, name: "SubFleetID", default: () => "0" })
  subFleetId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", { name: "RaceID", nullable: true, default: () => "0" })
  raceId: number | null;

  @Column("integer", {
    name: "ParentFleetID",
    nullable: true,
    default: () => "0",
  })
  parentFleetId: number | null;

  @Column("integer", {
    name: "ParentSubFleetID",
    nullable: true,
    default: () => "0",
  })
  parentSubFleetId: number | null;

  @Column("text", {
    name: "SubFleetName",
    nullable: true,
    default: () => "NULL",
  })
  subFleetName: string | null;

  @Column("integer", {
    name: "AnchorFleetID",
    nullable: true,
    default: () => "0",
  })
  anchorFleetId: number | null;

  @Column("integer", {
    name: "SpecificThreatID",
    nullable: true,
    default: () => "0",
  })
  specificThreatId: number | null;

  @Column("double", {
    name: "AnchorFleetDistance",
    nullable: true,
    default: () => "0",
  })
  anchorFleetDistance: number | null;

  @Column("integer", {
    name: "AnchorFleetBearingOffset",
    nullable: true,
    default: () => "0",
  })
  anchorFleetBearingOffset: number | null;

  @Column("boolean", {
    name: "GuardNearestHostileContact",
    nullable: true,
    default: () => "FALSE",
  })
  guardNearestHostileContact: boolean | null;

  @Column("boolean", {
    name: "GuardNearestKnownWarship",
    nullable: true,
    default: () => "FALSE",
  })
  guardNearestKnownWarship: boolean | null;

  @Column("boolean", {
    name: "UseAnchorDestination",
    nullable: true,
    default: () => "FALSE",
  })
  useAnchorDestination: boolean | null;
}
