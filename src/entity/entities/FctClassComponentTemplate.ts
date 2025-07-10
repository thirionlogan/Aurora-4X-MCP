import { Column, Entity } from "typeorm";

@Entity("FCT_ClassComponentTemplate")
export class FctClassComponentTemplate {
  @Column("integer", {
    name: "ShipClassTemplateID",
    nullable: true,
    default: () => "0",
  })
  shipClassTemplateId: number | null;

  @Column("integer", {
    name: "NumComponent",
    nullable: true,
    default: () => "0",
  })
  numComponent: number | null;

  @Column("integer", {
    name: "ShipComponentTemplateID",
    nullable: true,
    default: () => "0",
  })
  shipComponentTemplateId: number | null;

  @Column("integer", {
    name: "StandardComponentID",
    nullable: true,
    default: () => "0",
  })
  standardComponentId: number | null;
}
