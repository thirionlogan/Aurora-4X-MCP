import { Column, Entity } from "typeorm";

@Entity("FCT_DamagedComponent")
export class FctDamagedComponent {
  @Column("integer", { primary: true, name: "ShipID", default: () => "0" })
  shipId: number;

  @Column("integer", { primary: true, name: "ComponentID", default: () => "0" })
  componentId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", { name: "Number", nullable: true, default: () => "1" })
  number: number | null;
}
