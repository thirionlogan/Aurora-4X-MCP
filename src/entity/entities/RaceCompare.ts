import { Column, Entity } from "typeorm";

@Entity("RaceCompare")
export class RaceCompare {
  @Column("integer", {
    primary: true,
    name: "RaceID",
    nullable: true,
    default: () => "NULL",
  })
  raceId: number | null;

  @Column("varchar", {
    name: "RaceName",
    nullable: true,
    length: 255,
    default: () => "NULL",
  })
  raceName: string | null;

  @Column("double", { name: "Pop", nullable: true, default: () => "NULL" })
  pop: number | null;

  @Column("integer", { name: "NavalSY", nullable: true, default: () => "NULL" })
  navalSy: number | null;

  @Column("integer", {
    name: "CommercialSY",
    nullable: true,
    default: () => "NULL",
  })
  commercialSy: number | null;

  @Column("integer", {
    name: "Research",
    nullable: true,
    default: () => "NULL",
  })
  research: number | null;

  @Column("integer", {
    name: "Factories",
    nullable: true,
    default: () => "NULL",
  })
  factories: number | null;

  @Column("integer", { name: "Mines", nullable: true, default: () => "NULL" })
  mines: number | null;

  @Column("integer", { name: "AM", nullable: true, default: () => "NULL" })
  am: number | null;

  @Column("integer", {
    name: "Refineries",
    nullable: true,
    default: () => "NULL",
  })
  refineries: number | null;

  @Column("integer", { name: "Naval", nullable: true, default: () => "NULL" })
  naval: number | null;

  @Column("integer", {
    name: "Commercial",
    nullable: true,
    default: () => "NULL",
  })
  commercial: number | null;

  @Column("integer", {
    name: "Civilian",
    nullable: true,
    default: () => "NULL",
  })
  civilian: number | null;

  @Column("integer", { name: "DSTS", nullable: true, default: () => "NULL" })
  dsts: number | null;

  @Column("integer", {
    name: "Academies",
    nullable: true,
    default: () => "NULL",
  })
  academies: number | null;

  @Column("integer", { name: "Fuel", nullable: true, default: () => "NULL" })
  fuel: number | null;
}
