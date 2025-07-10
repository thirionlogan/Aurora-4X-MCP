import { Column, Entity } from "typeorm";

@Entity("FCT_SystemBodyName")
export class FctSystemBodyName {
  @Column("integer", {
    primary: true,
    name: "RaceID",
    nullable: true,
    default: () => "NULL",
  })
  raceId: number | null;

  @Column("integer", {
    primary: true,
    name: "SystemBodyID",
    nullable: true,
    default: () => "NULL",
  })
  systemBodyId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("integer", {
    name: "SystemID",
    nullable: true,
    default: () => "NULL",
  })
  systemId: number | null;

  @Column("varchar", {
    name: "Name",
    nullable: true,
    length: 50,
    default: () => "NULL",
  })
  name: string | null;
}
