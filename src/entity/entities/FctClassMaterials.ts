import { Column, Entity } from "typeorm";

@Entity("FCT_ClassMaterials")
export class FctClassMaterials {
  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", { name: "ClassID", nullable: true, default: () => "NULL" })
  classId: number | null;

  @Column("integer", {
    name: "MaterialID",
    nullable: true,
    default: () => "NULL",
  })
  materialId: number | null;

  @Column("double", { name: "Amount", nullable: true, default: () => "NULL" })
  amount: number | null;
}
