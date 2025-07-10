import { Column, Entity } from "typeorm";

@Entity("ForeignAid")
export class ForeignAid {
  @Column("integer", {
    primary: true,
    name: "RaceID",
    nullable: true,
    default: () => "NULL",
  })
  raceId: number | null;

  @Column("integer", {
    primary: true,
    name: "AlienID",
    nullable: true,
    default: () => "NULL",
  })
  alienId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("integer", { name: "Amount", nullable: true, default: () => "NULL" })
  amount: number | null;
}
