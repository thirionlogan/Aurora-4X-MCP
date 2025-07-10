import { Column, Entity } from "typeorm";

@Entity("FCT_EventColour")
export class FctEventColour {
  @Column("integer", { primary: true, name: "EventTypeID" })
  eventTypeId: number;

  @Column("integer", { primary: true, name: "RaceID", default: () => "0" })
  raceId: number;

  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", {
    name: "AlertColour",
    nullable: true,
    default: () => "0",
  })
  alertColour: number | null;

  @Column("integer", {
    name: "TextColour",
    nullable: true,
    default: () => "NULL",
  })
  textColour: number | null;
}
