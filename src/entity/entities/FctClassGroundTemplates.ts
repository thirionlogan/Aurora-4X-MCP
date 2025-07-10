import { Column, Entity } from "typeorm";

@Entity("FCT_ClassGroundTemplates")
export class FctClassGroundTemplates {
  @Column("integer", { name: "ShipClassID", nullable: true })
  shipClassId: number | null;

  @Column("integer", { name: "TemplateID", nullable: true })
  templateId: number | null;

  @Column("integer", { name: "GameID", nullable: true })
  gameId: number | null;

  @Column("integer", { name: "Number", nullable: true })
  number: number | null;
}
