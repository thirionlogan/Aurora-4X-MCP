import { PrimaryColumn, Entity } from 'typeorm';

@Entity('FCT_HideEvents')
export class FctHideEvents {
  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'EventID' })
  eventId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
