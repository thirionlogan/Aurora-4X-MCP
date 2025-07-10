import { Column, Entity } from "typeorm";

@Entity("DIM_NamingThemeTypes")
export class DimNamingThemeTypes {
  @Column("integer", {
    primary: true,
    name: "ThemeID",
    nullable: true,
    default: () => "NULL",
  })
  themeId: number | null;

  @Column("text", {
    name: "Description",
    nullable: true,
    default: () => "NULL",
  })
  description: string | null;

  @Column("boolean", {
    name: "RaceNameEligible",
    nullable: true,
    default: () => "False",
  })
  raceNameEligible: boolean | null;
}
