import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShipMeasurement')
export class FctShipMeasurement {
  @PrimaryColumn('integer', {
    name: 'ShipID',
  })
  shipId: number;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @Column('integer', {
    name: 'MeasurementType',
    nullable: true,
    default: () => '0',
  })
  measurementType: number | null;

  @Column('double', { name: 'Amount', nullable: true, default: () => '0' })
  amount: number | null;

  @Column('boolean', {
    name: 'StrikeGroup',
    nullable: true,
    default: () => 'FALSE',
  })
  strikeGroup: boolean | null;
}
