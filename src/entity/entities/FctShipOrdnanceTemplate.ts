import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShipOrdnanceTemplate')
export class FctShipOrdnanceTemplate {
  @PrimaryColumn('integer', {
    name: 'ShipID',
  })
  shipId: number;

  @PrimaryColumn('integer', {
    name: 'MissileID',
  })
  missileId: number;

  @Column('integer', { name: 'Amount', nullable: true, default: () => '0' })
  amount: number;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;
}
