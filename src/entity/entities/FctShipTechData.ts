import { Column, Entity } from "typeorm";

@Entity("FCT_ShipTechData")
export class FctShipTechData {
  @Column("integer", {
    primary: true,
    name: "ShipID",
    nullable: true,
    default: () => "NULL",
  })
  shipId: number | null;

  @Column("integer", {
    primary: true,
    name: "TechID",
    nullable: true,
    default: () => "NULL",
  })
  techId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("double", {
    name: "TechPoints",
    nullable: true,
    default: () => "NULL",
  })
  techPoints: number | null;
}
