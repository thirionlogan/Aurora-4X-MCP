import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ECCMAssignment')
export class FctEccmAssignment {
  @PrimaryColumn('integer', {
    name: 'ShipID',
  })
  shipId: number;

  @PrimaryColumn('integer', {
    name: 'ECCMID',
  })
  eccmid: number;

  @Column('integer', { name: 'ECCMNum', nullable: true, default: () => 'NULL' })
  eccmNum: number | null;

  @PrimaryColumn('integer', { name: 'FCTypeID' })
  fcTypeId: number;

  @Column('integer', { name: 'FCNum', nullable: true, default: () => 'NULL' })
  fcNum: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
