import { Column, Entity } from "typeorm";

@Entity("FCT_AtmosphericGas")
export class FctAtmosphericGas {
  @Column("integer", { name: "GameID", nullable: true, default: () => "NULL" })
  gameId: number | null;

  @Column("integer", {
    name: "SystemBodyID",
    nullable: true,
    default: () => "NULL",
  })
  systemBodyId: number | null;

  @Column("integer", {
    name: "AtmosGasID",
    nullable: true,
    default: () => "NULL",
  })
  atmosGasId: number | null;

  @Column("double", {
    name: "AtmosGasAmount",
    nullable: true,
    default: () => "0",
  })
  atmosGasAmount: number | null;

  @Column("double", { name: "GasAtm", nullable: true, default: () => "0" })
  gasAtm: number | null;

  @Column("boolean", {
    name: "FrozenOut",
    nullable: true,
    default: () => "NULL",
  })
  frozenOut: boolean | null;
}
