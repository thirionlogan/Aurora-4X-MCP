import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_WeaponAssignment')
export class FctWeaponAssignment {
  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @PrimaryColumn('integer', { name: 'WeaponID' })
  weaponId: number;

  @Column('integer', {
    name: 'WeaponNum',
    nullable: true,
    default: () => 'NULL',
  })
  weaponNum: number | null;

  @Column('integer', { name: 'FCTypeID', nullable: true, default: () => '0' })
  fcTypeId: number | null;

  @Column('integer', { name: 'FCNum', nullable: true, default: () => 'NULL' })
  fcNum: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
