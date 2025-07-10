import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_CommanderBonuses')
export class FctCommanderBonuses {
  @PrimaryColumn('integer', { name: 'CommanderID' })
  commanderId: number;

  @PrimaryColumn('integer', { name: 'BonusID' })
  bonusId: number;

  @Column('double', { name: 'BonusValue', nullable: true })
  bonusValue: number;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;
}
