import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_MissileAssignment')
export class FctMissileAssignment {
  @PrimaryColumn('integer', {
    name: 'ShipID',
  })
  shipId: number;

  @PrimaryColumn('integer', {
    name: 'MissileID',
  })
  missileId: number;

  @PrimaryColumn('integer', {
    name: 'WeaponID',
  })
  weaponId: number;

  @Column('integer', {
    name: 'WeaponNum',
    nullable: true,
    default: () => 'NULL',
  })
  weaponNum: number | null;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;
}
