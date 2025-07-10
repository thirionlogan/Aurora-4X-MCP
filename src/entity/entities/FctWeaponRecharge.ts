import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_WeaponRecharge')
export class FctWeaponRecharge {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @PrimaryColumn('integer', { name: 'WeaponID' })
  weaponId: number;

  @Column('integer', {
    name: 'WeaponNumber',
    nullable: true,
    default: () => '1',
  })
  weaponNumber: number | null;

  @Column('double', {
    name: 'RechargeRemaining',
    nullable: true,
    default: () => '0',
  })
  rechargeRemaining: number | null;
}
