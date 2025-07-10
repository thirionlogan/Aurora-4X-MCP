import { Column, Entity } from "typeorm";

@Entity("FCT_PopComponent")
export class FctPopComponent {
  @Column("integer", {
    primary: true,
    name: "ComponentID",
    nullable: true,
    default: () => "NULL",
  })
  componentId: number | null;

  @Column("integer", {
    primary: true,
    name: "PopulationID",
    nullable: true,
    default: () => "NULL",
  })
  populationId: number | null;

  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("double", { name: "Amount", nullable: true, default: () => "NULL" })
  amount: number | null;
}
