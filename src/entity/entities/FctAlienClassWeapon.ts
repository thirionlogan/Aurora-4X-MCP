import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_AlienClassWeapon')
export class FctAlienClassWeapon {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'AlienClassID' })
  alienClassId: number;

  @PrimaryColumn('integer', { name: 'WeaponID' })
  weaponId: number;

  @Column('integer', { name: 'Amount', nullable: true, default: () => 'NULL' })
  amount: number | null;

  @Column('double', { name: 'Range', nullable: true, default: () => 'NULL' })
  range: number | null;

  @Column('integer', { name: 'ROF', nullable: true, default: () => 'NULL' })
  rof: number | null;

  @Column('double', { name: 'LastFired', nullable: true, default: () => '0' })
  lastFired: number | null;
}
