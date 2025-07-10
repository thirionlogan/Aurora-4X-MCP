import { Column, Entity } from "typeorm";

@Entity("FCT_ClassSC")
export class FctClassSc {
  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", {
    name: "ShipClassID",
    nullable: true,
    default: () => "0",
  })
  shipClassId: number | null;

  @Column("integer", {
    name: "FighterClassID",
    nullable: true,
    default: () => "0",
  })
  fighterClassId: number | null;

  @Column("integer", { name: "Number", nullable: true, default: () => "0" })
  number: number | null;
}
