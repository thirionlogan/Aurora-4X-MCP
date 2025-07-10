import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_TechProgressionRace')
export class FctTechProgressionRace {
  @Column('integer', { name: 'ProgressionOrder', nullable: true })
  progressionOrder: number | null;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
