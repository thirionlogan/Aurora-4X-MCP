import { Column, Entity } from "typeorm";

@Entity("DIM_ResearchCategories")
export class DimResearchCategories {
  @Column("integer", {
    primary: true,
    name: "CategoryID",
    nullable: true,
    default: () => "0",
  })
  categoryId: number | null;

  @Column("numeric", {
    name: "CheckTech",
    nullable: true,
    default: () => "NULL",
  })
  checkTech: number | null;

  @Column("text", { name: "Name", nullable: true, default: () => "NULL" })
  name: string | null;

  @Column("integer", {
    name: "CompanyNameType",
    nullable: true,
    default: () => "1",
  })
  companyNameType: number | null;

  @Column("numeric", {
    name: "PlayerDefined",
    nullable: true,
    default: () => "NULL",
  })
  playerDefined: number | null;

  @Column("integer", {
    name: "SourceTechType0",
    nullable: true,
    default: () => "0",
  })
  sourceTechType0: number | null;

  @Column("integer", {
    name: "SecondPrimaryTech",
    nullable: true,
    default: () => "0",
  })
  secondPrimaryTech: number | null;

  @Column("integer", {
    name: "SourceTechType1",
    nullable: true,
    default: () => "0",
  })
  sourceTechType1: number | null;

  @Column("integer", {
    name: "SourceTechType2",
    nullable: true,
    default: () => "0",
  })
  sourceTechType2: number | null;

  @Column("integer", {
    name: "SourceTechType3",
    nullable: true,
    default: () => "0",
  })
  sourceTechType3: number | null;

  @Column("integer", {
    name: "SourceTechType4",
    nullable: true,
    default: () => "0",
  })
  sourceTechType4: number | null;

  @Column("integer", {
    name: "SourceTechType5",
    nullable: true,
    default: () => "0",
  })
  sourceTechType5: number | null;

  @Column("integer", {
    name: "SourceTechType6",
    nullable: true,
    default: () => "0",
  })
  sourceTechType6: number | null;

  @Column("integer", {
    name: "SourceTechType7",
    nullable: true,
    default: () => "0",
  })
  sourceTechType7: number | null;

  @Column("numeric", { name: "Sort0", nullable: true, default: () => "NULL" })
  sort0: number | null;

  @Column("numeric", { name: "Sort1", nullable: true, default: () => "NULL" })
  sort1: number | null;

  @Column("numeric", { name: "Sort2", nullable: true, default: () => "NULL" })
  sort2: number | null;

  @Column("numeric", { name: "Sort3", nullable: true, default: () => "NULL" })
  sort3: number | null;

  @Column("numeric", { name: "Sort4", nullable: true, default: () => "NULL" })
  sort4: number | null;

  @Column("numeric", { name: "Sort5", nullable: true, default: () => "NULL" })
  sort5: number | null;

  @Column("numeric", { name: "Sort6", nullable: true, default: () => "NULL" })
  sort6: number | null;

  @Column("numeric", { name: "Sort7", nullable: true, default: () => "NULL" })
  sort7: number | null;

  @Column("numeric", {
    name: "Components",
    nullable: true,
    default: () => "NULL",
  })
  components: number | null;

  @Column("text", { name: "NoteField", nullable: true, default: () => "NULL" })
  noteField: string | null;

  @Column("integer", {
    name: "RadioNumber",
    nullable: true,
    default: () => "0",
  })
  radioNumber: number | null;

  @Column("text", { name: "RadioText", nullable: true })
  radioText: string | null;
}
