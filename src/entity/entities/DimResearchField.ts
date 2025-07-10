import { Column, Entity } from "typeorm";

@Entity("DIM_ResearchField")
export class DimResearchField {
  @Column("integer", {
    primary: true,
    name: "ResearchFieldID",
    nullable: true,
    default: () => "NULL",
  })
  researchFieldId: number | null;

  @Column("text", { name: "FieldName", nullable: true, default: () => "NULL" })
  fieldName: string | null;

  @Column("text", { name: "ShortName", nullable: true, default: () => "NULL" })
  shortName: string | null;

  @Column("text", {
    name: "Abbreviation",
    nullable: true,
    default: () => "NULL",
  })
  abbreviation: string | null;

  @Column("boolean", {
    name: "DoNotDisplay",
    nullable: true,
    default: () => "FALSE",
  })
  doNotDisplay: boolean | null;
}
