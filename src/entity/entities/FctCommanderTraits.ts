import { Column, Entity } from "typeorm";

@Entity("FCT_CommanderTraits")
export class FctCommanderTraits {
  @Column("integer", {
    primary: true,
    name: "CmdrID",
    nullable: true,
    default: () => "NULL",
  })
  cmdrId: number | null;

  @Column("integer", {
    primary: true,
    name: "TraitID",
    nullable: true,
    default: () => "NULL",
  })
  traitId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "16" })
  gameId: number | null;
}
