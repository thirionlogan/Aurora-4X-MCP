import { Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_STODetected')
export class FctStoDetected {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ElementID' })
  elementId: number;

  @PrimaryColumn('integer', { name: 'DetectingRaceID' })
  detectingRaceId: number;
}
