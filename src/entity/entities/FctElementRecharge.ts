import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ElementRecharge')
export class FctElementRecharge {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'ElementID',
  })
  elementId: number;

  @Column('integer', {
    name: 'RechargeRemaining',
    nullable: true,
    default: () => '0',
  })
  rechargeRemaining: number | null;
}
