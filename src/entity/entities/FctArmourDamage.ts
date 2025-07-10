import { Column, Entity } from "typeorm";

@Entity("FCT_ArmourDamage")
export class FctArmourDamage {
  @Column("integer", {
    primary: true,
    name: "ShipID",
    nullable: true,
    default: () => "NULL",
  })
  shipId: number | null;

  @Column("integer", {
    primary: true,
    name: "ArmourColumn",
    nullable: true,
    default: () => "NULL",
  })
  armourColumn: number | null;

  @Column("integer", { name: "Damage", nullable: true, default: () => "NULL" })
  damage: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "16" })
  gameId: number | null;
}
