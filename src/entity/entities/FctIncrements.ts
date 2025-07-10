import { Column, Entity } from "typeorm";

@Entity("FCT_Increments")
export class FctIncrements {
  @Column("integer", { primary: true, name: "IncrementID", default: () => "0" })
  incrementId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("double", { name: "GameTime", nullable: true, default: () => "0" })
  gameTime: number | null;

  @Column("integer", { name: "Length", nullable: true, default: () => "0" })
  length: number | null;
}
