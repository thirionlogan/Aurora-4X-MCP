import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_DamageControlQueue')
export class FctDamageControlQueue {
  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @Column('integer', {
    name: 'RepairOrder',
    nullable: true,
    default: () => 'NULL',
  })
  repairOrder: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ComponentID' })
  componentId: number;
}
