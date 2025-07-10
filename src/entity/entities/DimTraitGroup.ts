import { Column, Entity } from "typeorm";

@Entity("DIM_TraitGroup")
export class DimTraitGroup {
  @Column("integer", {
    primary: true,
    name: "TraitGroupID",
    nullable: true,
    default: () => "NULL",
  })
  traitGroupId: number | null;

  @Column("varchar", {
    name: "Description",
    nullable: true,
    length: 50,
    default: () => "NULL",
  })
  description: string | null;

  @Column("integer", {
    name: "Opposite1",
    nullable: true,
    default: () => "NULL",
  })
  opposite1: number | null;

  @Column("integer", {
    name: "Opposite2",
    nullable: true,
    default: () => "NULL",
  })
  opposite2: number | null;
}
