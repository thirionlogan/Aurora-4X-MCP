import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('RaceMedals_RaceID', ['raceId'], {})
@Entity('FCT_RaceMedals')
export class FctRaceMedals {
  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @Column('text', {
    name: 'MedalFileName',
    nullable: true,
    default: () => 'NULL',
  })
  medalFileName: string | null;

  @Column('text', { name: 'MedalName', nullable: true, default: () => 'NULL' })
  medalName: string | null;

  @Column('text', {
    name: 'MedalDescription',
    nullable: true,
    default: () => "'Award Details'",
  })
  medalDescription: string | null;

  @Column('integer', {
    name: 'MedalPoints',
    nullable: true,
    default: () => '0',
  })
  medalPoints: number | null;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @Column('boolean', {
    name: 'MultipleAwards',
    nullable: true,
    default: () => '0',
  })
  multipleAwards: boolean | null;

  @PrimaryColumn('integer', { name: 'MedalID' })
  medalId: number;

  @Column('text', { name: 'Abbreviation', nullable: true })
  abbreviation: string | null;
}
