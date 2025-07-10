import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_RaceGroundCombat')
export class FctRaceGroundCombat {
  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'SystemBodyID' })
  systemBodyId: number;

  @Column('integer', {
    name: 'ConsecutiveCombatRounds',
    nullable: true,
    default: () => '1',
  })
  consecutiveCombatRounds: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
