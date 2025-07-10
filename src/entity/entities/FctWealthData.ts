import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_WealthData')
export class FctWealthData {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @Column('double', { name: 'Amount', nullable: true, default: () => 'NULL' })
  amount: number | null;

  @Column('integer', { name: 'UseID', nullable: true, default: () => 'NULL' })
  useId: number | null;

  @Column('double', { name: 'TimeUsed', nullable: true, default: () => 'NULL' })
  timeUsed: number | null;
}
