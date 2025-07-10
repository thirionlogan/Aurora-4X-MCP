import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_WealthHistory')
export class FctWealthHistory {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @Column('double', {
    name: 'IncrementTime',
    nullable: true,
    default: () => '0',
  })
  incrementTime: number | null;

  @Column('double', {
    name: 'WealthAmount',
    nullable: true,
    default: () => '0',
  })
  wealthAmount: number | null;
}
