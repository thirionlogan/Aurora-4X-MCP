import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShippingWealthData')
export class FctShippingWealthData {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ShippingLineID' })
  shippingLineId: number;

  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @Column('boolean', {
    name: 'Contract',
    nullable: true,
    default: () => 'NULL',
  })
  contract: boolean | null;

  @Column('boolean', { name: 'Colonist', nullable: true, default: () => '0' })
  colonist: boolean | null;

  @Column('boolean', { name: 'Fuel', nullable: true, default: () => '0' })
  fuel: boolean | null;

  @Column('double', { name: 'Amount', nullable: true, default: () => 'NULL' })
  amount: number | null;

  @Column('integer', {
    name: 'TradeGood',
    nullable: true,
    default: () => 'NULL',
  })
  tradeGood: number | null;

  @Column('double', {
    name: 'TradeTime',
    nullable: true,
    default: () => 'NULL',
  })
  tradeTime: number | null;

  @Column('integer', { name: 'OriginPop', nullable: true, default: () => '0' })
  originPop: number | null;

  @Column('integer', {
    name: 'DestinationPop',
    nullable: true,
    default: () => 'NULL',
  })
  destinationPop: number | null;
}
