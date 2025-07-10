import { Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_AlienRaceSystemStatus')
export class FctAlienRaceSystemStatus {
  @PrimaryColumn('integer', {
    name: 'AlienRaceID',
  })
  alienRaceId: number;

  @PrimaryColumn('integer', {
    name: 'ProtectionStatusID',
  })
  protectionStatusId: number;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'SystemID',
  })
  systemId: number;

  @PrimaryColumn('integer', {
    name: 'ViewingRaceID',
  })
  viewingRaceId: number;
}
