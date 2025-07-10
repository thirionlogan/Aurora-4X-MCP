import { Column, Entity } from "typeorm";

@Entity("DIM_EventType")
export class DimEventType {
  @Column("integer", { primary: true, name: "EventTypeID" })
  eventTypeId: number;

  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("integer", {
    name: "CombatDisplay",
    nullable: true,
    default: () => "0",
  })
  combatDisplay: number | null;

  @Column("integer", {
    name: "DamageDisplay",
    nullable: true,
    default: () => "0",
  })
  damageDisplay: number | null;

  @Column("numeric", {
    name: "AttackEvent",
    nullable: true,
    default: () => "NULL",
  })
  attackEvent: number | null;

  @Column("integer", {
    name: "PlayerInterrupt",
    nullable: true,
    default: () => "0",
  })
  playerInterrupt: number | null;

  @Column("integer", {
    name: "AIInterrupt",
    nullable: true,
    default: () => "0",
  })
  aiInterrupt: number | null;
}
