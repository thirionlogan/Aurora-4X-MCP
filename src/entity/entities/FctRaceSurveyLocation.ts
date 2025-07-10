import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_RaceSurveyLocation')
export class FctRaceSurveyLocation {
  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('integer', {
    name: 'SystemID',
  })
  systemId: number;

  @Column('integer', {
    name: 'LocationNumber',
    nullable: true,
    default: () => 'NULL',
  })
  locationNumber: number | null;
}
