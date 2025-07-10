import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_CommanderHistory')
export class FctCommanderHistory {
  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'CommanderID',
  })
  commanderId: number;

  @Column('text', {
    name: 'HistoryText',
    nullable: true,
    default: () => 'NULL',
  })
  historyText: string | null;

  @Column('double', { name: 'GameTime', nullable: true })
  gameTime: number | null;
}
