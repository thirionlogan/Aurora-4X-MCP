import { Column, Entity } from "typeorm";

@Entity("DIM_Condition")
export class DimCondition {
  @Column("integer", {
    primary: true,
    name: "ConditionID",
    nullable: true,
    default: () => "NULL",
  })
  conditionId: number | null;

  @Column("varchar", {
    name: "Description",
    nullable: true,
    length: 50,
    default: () => "NULL",
  })
  description: string | null;

  @Column("integer", {
    name: "DisplayOrder",
    nullable: true,
    default: () => "NULL",
  })
  displayOrder: number | null;
}
