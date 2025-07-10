import { Column, Entity } from "typeorm";

@Entity("DIM_WealthUse")
export class DimWealthUse {
  @Column("integer", {
    primary: true,
    name: "WealthUseID",
    nullable: true,
    default: () => "NULL",
  })
  wealthUseId: number | null;

  @Column("varchar", {
    name: "Description",
    nullable: true,
    length: 50,
    default: () => "NULL",
  })
  description: string | null;

  @Column("boolean", { name: "Income", nullable: true, default: () => "NULL" })
  income: boolean | null;

  @Column("double", {
    name: "DisplayOrder",
    nullable: true,
    default: () => "NULL",
  })
  displayOrder: number | null;
}
