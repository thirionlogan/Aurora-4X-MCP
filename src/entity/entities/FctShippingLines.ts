import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_ShippingLines')
export class FctShippingLines {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'ShippingLineID',
  })
  shippingLineId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', {
    name: 'EmpireID',
    nullable: true,
    default: () => 'NULL',
  })
  empireId: number | null;

  @Column('boolean', { name: 'NPRace', nullable: true, default: () => 'NULL' })
  npRace: boolean | null;

  @Column('text', { name: 'LineName', nullable: true, default: () => 'NULL' })
  lineName: string | null;

  @Column('text', { name: 'ShortName', nullable: true, default: () => 'NULL' })
  shortName: string | null;

  @Column('integer', { name: 'ShipNum', nullable: true, default: () => '1' })
  shipNum: number | null;

  @Column('double', {
    name: 'WealthBalance',
    nullable: true,
    default: () => '2000',
  })
  wealthBalance: number | null;

  @Column('double', {
    name: 'LastDividendPaid',
    nullable: true,
    default: () => '0',
  })
  lastDividendPaid: number | null;

  @Column('double', {
    name: 'LastDividendTime',
    nullable: true,
    default: () => 'NULL',
  })
  lastDividendTime: number | null;

  @Column('double', {
    name: 'MaxAssets',
    nullable: true,
    default: () => '1000',
  })
  maxAssets: number | null;

  @Column('integer', {
    name: 'CommEngineID',
    nullable: true,
    default: () => '0',
  })
  commEngineId: number | null;

  @Column('integer', {
    name: 'CommercialEngines',
    nullable: true,
    default: () => '0',
  })
  commercialEngines: number | null;
}
