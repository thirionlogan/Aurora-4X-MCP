import { Column, Entity } from "typeorm";

@Entity("DIM_TradeGoods")
export class DimTradeGoods {
  @Column("integer", {
    primary: true,
    name: "TradeGoodID",
    nullable: true,
    default: () => "NULL",
  })
  tradeGoodId: number | null;

  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("double", { name: "PopRequired", nullable: true, default: () => "0" })
  popRequired: number | null;

  @Column("integer", {
    name: "Category",
    nullable: true,
    default: () => "NULL",
  })
  category: number | null;

  @Column("boolean", { name: "RareGood", nullable: true, default: () => "0" })
  rareGood: boolean | null;
}
