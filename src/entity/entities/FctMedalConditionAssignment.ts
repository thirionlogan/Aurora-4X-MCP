import { Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_MedalConditionAssignment')
export class FctMedalConditionAssignment {
  @PrimaryColumn('integer', { name: 'MedalConditionID' })
  medalConditionId: number;

  @PrimaryColumn('integer', { name: 'MedalID' })
  medalId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
