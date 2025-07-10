import { Column, Entity } from "typeorm";

@Entity("FCT_PopTradeBalance")
export class FctPopTradeBalance {
  @Column("integer", {
    primary: true,
    name: "PopulationID",
    nullable: true,
    default: () => "NULL",
  })
  populationId: number | null;

  @Column("integer", {
    primary: true,
    name: "TradeGoodID",
    nullable: true,
    default: () => "NULL",
  })
  tradeGoodId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("double", {
    name: "ProductionRate",
    nullable: true,
    default: () => "NULL",
  })
  productionRate: number | null;

  @Column("double", {
    name: "TradeBalance",
    nullable: true,
    default: () => "NULL",
  })
  tradeBalance: number | null;

  @Column("double", {
    name: "LastTradeBalance",
    nullable: true,
    default: () => "NULL",
  })
  lastTradeBalance: number | null;
}
