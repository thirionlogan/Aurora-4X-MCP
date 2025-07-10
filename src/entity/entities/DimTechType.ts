import { Column, Entity } from "typeorm";

@Entity("DIM_TechType")
export class DimTechType {
  @Column("integer", {
    primary: true,
    name: "TechTypeID",
    nullable: true,
    default: () => "NULL",
  })
  techTypeId: number | null;

  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("integer", { name: "FieldID", nullable: true, default: () => "NULL" })
  fieldId: number | null;

  @Column("boolean", {
    name: "DistributeLowerTech",
    nullable: true,
    default: () => "TRUE",
  })
  distributeLowerTech: boolean | null;

  @Column("boolean", {
    name: "RuinTechType",
    nullable: true,
    default: () => "FALSE",
  })
  ruinTechType: boolean | null;
}
