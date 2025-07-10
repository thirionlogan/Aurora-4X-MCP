import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShipWeapon')
export class FctShipWeapon {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @Column('integer', { name: 'MissileID' })
  missileId: number;

  @Column('integer', { name: 'Amount', nullable: true, default: () => 'NULL' })
  amount: number | null;
}
