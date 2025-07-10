import { Column, Entity } from "typeorm";

@Entity("FCT_AlienShip")
export class FctAlienShip {
  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("integer", {
    name: "AlienRaceID",
    nullable: true,
    default: () => "NULL",
  })
  alienRaceId: number | null;

  @Column("integer", {
    name: "AlienClassID",
    nullable: true,
    default: () => "NULL",
  })
  alienClassId: number | null;

  @Column("integer", { name: "ViewRaceID", nullable: true, default: () => "0" })
  viewRaceId: number | null;

  @Column("integer", { name: "ShipID", nullable: true, default: () => "0" })
  shipId: number | null;

  @Column("text", { name: "Name", nullable: true, default: () => "' '" })
  name: string | null;

  @Column("integer", { name: "Speed", nullable: true, default: () => "0" })
  speed: number | null;

  @Column("double", { name: "LastX", nullable: true, default: () => "0" })
  lastX: number | null;

  @Column("double", { name: "LastY", nullable: true, default: () => "0" })
  lastY: number | null;

  @Column("integer", { name: "LastSysID", nullable: true, default: () => "0" })
  lastSysId: number | null;

  @Column("double", {
    name: "LastContactTime",
    nullable: true,
    default: () => "0",
  })
  lastContactTime: number | null;

  @Column("double", {
    name: "FirstDetected",
    nullable: true,
    default: () => "0",
  })
  firstDetected: number | null;

  @Column("boolean", {
    name: "Destroyed",
    nullable: true,
    default: () => "NULL",
  })
  destroyed: boolean | null;

  @Column("double", { name: "DamageTaken", nullable: true, default: () => "0" })
  damageTaken: number | null;

  @Column("double", {
    name: "GameTimeDamaged",
    nullable: true,
    default: () => "0",
  })
  gameTimeDamaged: number | null;

  @Column("double", {
    name: "ShieldDamage",
    nullable: true,
    default: () => "0",
  })
  shieldDamage: number | null;

  @Column("integer", {
    name: "ArmourDamage",
    nullable: true,
    default: () => "0",
  })
  armourDamage: number | null;

  @Column("integer", {
    name: "PenetratingDamage",
    nullable: true,
    default: () => "0",
  })
  penetratingDamage: number | null;
}
