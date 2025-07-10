import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShipCargo')
export class FctShipCargo {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number | null;

  @Column('numeric', {
    name: 'CargoTypeID',
    nullable: true,
    default: () => 'NULL',
  })
  cargoTypeId: number | null;

  @Column('integer', { name: 'CargoID', nullable: true, default: () => '0' })
  cargoId: number | null;

  @Column('double', { name: 'Amount', nullable: true, default: () => '0' })
  amount: number | null;

  @PrimaryColumn('integer', { name: 'SpeciesID' })
  speciesId: number;

  @Column('integer', {
    name: 'StartingPop',
    nullable: true,
    default: () => '0',
  })
  startingPop: number | null;

  @Column('boolean', { name: 'Neutral', nullable: true, default: () => '0' })
  neutral: boolean | null;
}
