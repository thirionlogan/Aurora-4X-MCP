import { Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_SystemBodySurveys')
export class FctSystemBodySurveys {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'SystemBodyID' })
  systemBodyId: number;
}
