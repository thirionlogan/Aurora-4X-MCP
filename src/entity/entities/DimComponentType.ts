import { Column, Entity } from "typeorm";

@Entity("DIM_ComponentType")
export class DimComponentType {
  @Column("integer", { primary: true, name: "ComponentTypeID" })
  componentTypeId: number;

  @Column("text", {
    name: "TypeDescription",
    nullable: true,
    default: () => "NULL",
  })
  typeDescription: string | null;

  @Column("double", {
    name: "EmptySpaceModifier",
    nullable: true,
    default: () => "0",
  })
  emptySpaceModifier: number | null;

  @Column("text", {
    name: "RatingDescription",
    nullable: true,
    default: () => "NULL",
  })
  ratingDescription: string | null;

  @Column("integer", {
    name: "ClassDisplayOrder",
    nullable: true,
    default: () => "NULL",
  })
  classDisplayOrder: number | null;

  @Column("integer", {
    name: "RepairPriority",
    nullable: true,
    default: () => "0",
  })
  repairPriority: number | null;

  @Column("numeric", {
    name: "ShowInClassDisplay",
    nullable: true,
    default: () => "0",
  })
  showInClassDisplay: number | null;

  @Column("numeric", {
    name: "SingleSystem",
    nullable: true,
    default: () => "0",
  })
  singleSystem: number | null;

  @Column("boolean", {
    name: "ObsoleteAllowed",
    nullable: true,
    default: () => "FALSE",
  })
  obsoleteAllowed: boolean | null;
}
