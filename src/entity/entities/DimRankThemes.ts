import { Column, Entity } from "typeorm";

@Entity("DIM_RankThemes")
export class DimRankThemes {
  @Column("integer", { primary: true, name: "ThemeID", default: () => "0" })
  themeId: number;

  @Column("integer", { primary: true, name: "ThemeRankID", default: () => "0" })
  themeRankId: number;

  @Column("text", { name: "RankName" })
  rankName: string;

  @Column("text", { name: "GFRankName", nullable: true, default: () => "NULL" })
  gfRankName: string | null;

  @Column("boolean", {
    name: "CivilianRank",
    nullable: true,
    default: () => "NULL",
  })
  civilianRank: boolean | null;

  @Column("text", {
    name: "NavalRankAbbrev",
    nullable: true,
    default: () => "NULL",
  })
  navalRankAbbrev: string | null;

  @Column("text", {
    name: "GroundRankAbbrev",
    nullable: true,
    default: () => "NULL",
  })
  groundRankAbbrev: string | null;
}
