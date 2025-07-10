import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_PopulationWeapon')
export class FctPopulationWeapon {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'PopulationID',
  })
  populationId: number;

  @PrimaryColumn('integer', {
    name: 'MissileID',
  })
  missileId: number;

  @Column('double', { name: 'Amount', nullable: true, default: () => 'NULL' })
  amount: number | null;
}
