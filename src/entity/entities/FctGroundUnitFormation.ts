import { Column, Entity } from "typeorm";

@Entity("FCT_GroundUnitFormation")
export class FctGroundUnitFormation {
  @Column("integer", { primary: true, name: "FormationID", nullable: true })
  formationId: number | null;

  @Column("text", { name: "Name", nullable: true })
  name: string | null;

  @Column("text", { name: "Abbreviation", nullable: true })
  abbreviation: string | null;

  @Column("integer", { name: "RaceID", nullable: true })
  raceId: number | null;

  @Column("integer", { name: "GameID", nullable: true })
  gameId: number | null;

  @Column("integer", {
    name: "OriginalTemplateID",
    nullable: true,
    default: () => "0",
  })
  originalTemplateId: number | null;

  @Column("integer", {
    name: "PopulationID",
    nullable: true,
    default: () => "0",
  })
  populationId: number | null;

  @Column("integer", { name: "ShipID", nullable: true, default: () => "0" })
  shipId: number | null;

  @Column("integer", {
    name: "ParentFormationID",
    nullable: true,
    default: () => "0",
  })
  parentFormationId: number | null;

  @Column("integer", {
    name: "BoardingStatus",
    nullable: true,
    default: () => "0",
  })
  boardingStatus: number | null;

  @Column("boolean", {
    name: "HideSubUnits",
    nullable: true,
    default: () => "False",
  })
  hideSubUnits: boolean | null;

  @Column("integer", {
    name: "FieldPosition",
    nullable: true,
    default: () => "0",
  })
  fieldPosition: number | null;

  @Column("integer", {
    name: "RequiredRank",
    nullable: true,
    default: () => "0",
  })
  requiredRank: number | null;

  @Column("integer", {
    name: "AssignedFormationID",
    nullable: true,
    default: () => "0",
  })
  assignedFormationId: number | null;

  @Column("boolean", {
    name: "ActiveSensorsOn",
    nullable: true,
    default: () => "false",
  })
  activeSensorsOn: boolean | null;

  @Column("boolean", {
    name: "Civilian",
    nullable: true,
    default: () => "FALSE",
  })
  civilian: boolean | null;

  @Column("integer", {
    name: "ReplacementTemplateID",
    nullable: true,
    default: () => "0",
  })
  replacementTemplateId: number | null;

  @Column("boolean", {
    name: "UseForReplacements",
    nullable: true,
    default: () => "FALSE",
  })
  useForReplacements: boolean | null;

  @Column("integer", {
    name: "ReplacementPriority",
    nullable: true,
    default: () => "10",
  })
  replacementPriority: number | null;

  @Column("integer", { name: "OrgLinkID", nullable: true, default: () => "0" })
  orgLinkId: number | null;
}
