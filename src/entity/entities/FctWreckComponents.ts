import { Column, Entity } from "typeorm";

@Entity("FCT_WreckComponents")
export class FctWreckComponents {
  @Column("integer", { primary: true, name: "WreckID" })
  wreckId: number;

  @Column("integer", { primary: true, name: "ComponentID" })
  componentId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", { name: "Amount", nullable: true, default: () => "NULL" })
  amount: number | null;
}
