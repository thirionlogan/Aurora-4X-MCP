import { Column, Entity } from "typeorm";

@Entity("DIM_StandingOrders")
export class DimStandingOrders {
  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("integer", {
    name: "DisplayOrder",
    nullable: true,
    default: () => "NULL",
  })
  displayOrder: number | null;

  @Column("numeric", { name: "NPROnly", nullable: true, default: () => "NULL" })
  nprOnly: number | null;

  @Column("text", { name: "SystemCheck", nullable: true, default: () => "S" })
  systemCheck: string | null;

  @Column("integer", {
    name: "Standing",
    nullable: true,
    default: () => "True",
  })
  standing: number | null;

  @Column("integer", {
    name: "Conditional",
    nullable: true,
    default: () => "false",
  })
  conditional: number | null;

  @Column("integer", {
    primary: true,
    name: "OrderID",
    nullable: true,
    default: () => "NULL",
  })
  orderId: number | null;
}
