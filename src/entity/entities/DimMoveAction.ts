import { Column, Entity } from "typeorm";

@Entity("DIM_MoveAction")
export class DimMoveAction {
  @Column("integer", {
    primary: true,
    name: "MoveActionID",
    default: () => "0",
  })
  moveActionId: number;

  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("numeric", { name: "Completed", nullable: true, default: () => "0" })
  completed: number | null;

  @Column("integer", {
    name: "MoveRequirementID",
    nullable: true,
    default: () => "0",
  })
  moveRequirementId: number | null;

  @Column("integer", {
    name: "DestinationItemType",
    nullable: true,
    default: () => "0",
  })
  destinationItemType: number | null;

  @Column("integer", {
    name: "DisplayOrder",
    nullable: true,
    default: () => "NULL",
  })
  displayOrder: number | null;

  @Column("numeric", {
    name: "TransitOrder",
    nullable: true,
    default: () => "NULL",
  })
  transitOrder: number | null;

  @Column("numeric", {
    name: "MinDistanceOption",
    nullable: true,
    default: () => "0",
  })
  minDistanceOption: number | null;

  @Column("numeric", {
    name: "SpecifyQuanitity",
    nullable: true,
    default: () => "0",
  })
  specifyQuanitity: number | null;

  @Column("numeric", {
    name: "NoOrderChange",
    nullable: true,
    default: () => "NULL",
  })
  noOrderChange: number | null;

  @Column("numeric", {
    name: "MinQuantity",
    nullable: true,
    default: () => "NULL",
  })
  minQuantity: number | null;

  @Column("numeric", {
    name: "LoadGroundUnit",
    nullable: true,
    default: () => "0",
  })
  loadGroundUnit: number | null;

  @Column("numeric", {
    name: "NoGasGiants",
    nullable: true,
    default: () => "NULL",
  })
  noGasGiants: number | null;

  @Column("numeric", {
    name: "ReserveLevel",
    nullable: true,
    default: () => "NULL",
  })
  reserveLevel: number | null;

  @Column("numeric", {
    name: "WarpPoint",
    nullable: true,
    default: () => "NULL",
  })
  warpPoint: number | null;

  @Column("numeric", {
    name: "SystemBody",
    nullable: true,
    default: () => "NULL",
  })
  systemBody: number | null;

  @Column("numeric", {
    name: "SurveyLocation",
    nullable: true,
    default: () => "NULL",
  })
  surveyLocation: number | null;

  @Column("numeric", { name: "Fleet", nullable: true, default: () => "NULL" })
  fleet: number | null;

  @Column("numeric", {
    name: "Waypoint",
    nullable: true,
    default: () => "NULL",
  })
  waypoint: number | null;

  @Column("numeric", { name: "Contact", nullable: true, default: () => "NULL" })
  contact: number | null;

  @Column("numeric", { name: "Lifepod", nullable: true, default: () => "NULL" })
  lifepod: number | null;

  @Column("numeric", { name: "Wreck", nullable: true, default: () => "NULL" })
  wreck: number | null;

  @Column("numeric", {
    name: "LagrangePoint",
    nullable: true,
    default: () => "NULL",
  })
  lagrangePoint: number | null;

  @Column("numeric", {
    name: "Wormhole",
    nullable: true,
    default: () => "NULL",
  })
  wormhole: number | null;

  @Column("numeric", {
    name: "DesignModeOnly",
    nullable: true,
    default: () => "NULL",
  })
  designModeOnly: number | null;

  @Column("numeric", { name: "AetherGate", nullable: true, default: () => "0" })
  aetherGate: number | null;

  @Column("integer", {
    name: "DeepSpaceLocation",
    nullable: true,
    default: () => "0",
  })
  deepSpaceLocation: number | null;

  @Column("boolean", {
    name: "StationaryAction",
    nullable: true,
    default: () => "FALSE",
  })
  stationaryAction: boolean | null;
}
