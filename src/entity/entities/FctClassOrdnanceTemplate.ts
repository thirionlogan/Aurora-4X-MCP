import { Column, Entity } from "typeorm";

@Entity("FCT_ClassOrdnanceTemplate")
export class FctClassOrdnanceTemplate {
  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", {
    name: "ShipClassID",
    nullable: true,
    default: () => "NULL",
  })
  shipClassId: number | null;

  @Column("integer", {
    name: "MissileID",
    nullable: true,
    default: () => "NULL",
  })
  missileId: number | null;

  @Column("integer", { name: "Amount", nullable: true, default: () => "NULL" })
  amount: number | null;
}
