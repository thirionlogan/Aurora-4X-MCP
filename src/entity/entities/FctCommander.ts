import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Commander')
export class FctCommander {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'CommanderID',
  })
  commanderId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', {
    name: 'SpeciesID',
    nullable: true,
    default: () => 'NULL',
  })
  speciesId: number | null;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('integer', { name: 'ResSpecID', nullable: true, default: () => '0' })
  resSpecId: number | null;

  @Column('integer', {
    name: 'CommanderType',
    nullable: true,
    default: () => '0',
  })
  commanderType: number | null;

  @Column('text', { name: 'Title', nullable: true, default: () => 'NULL' })
  title: string | null;

  @Column('integer', { name: 'RankID', nullable: true, default: () => '0' })
  rankId: number | null;

  @Column('integer', {
    name: 'PromotionScore',
    nullable: true,
    default: () => '0',
  })
  promotionScore: number | null;

  @Column('integer', {
    name: 'PopPromotionScore',
    nullable: true,
    default: () => '0',
  })
  popPromotionScore: number | null;

  @Column('double', {
    name: 'GameTimePromoted',
    nullable: true,
    default: () => '0',
  })
  gameTimePromoted: number | null;

  @Column('double', {
    name: 'GameTimeAssigned',
    nullable: true,
    default: () => '0',
  })
  gameTimeAssigned: number | null;

  @Column('integer', {
    name: 'DoNotRelieve',
    nullable: true,
    default: () => '0',
  })
  doNotRelieve: number | null;

  @Column('integer', {
    name: 'CommandType',
    nullable: true,
    default: () => '0',
  })
  commandType: number | null;

  @Column('integer', { name: 'CommandID', nullable: true, default: () => '0' })
  commandId: number | null;

  @Column('integer', {
    name: 'PopLocationID',
    nullable: true,
    default: () => '0',
  })
  popLocationId: number | null;

  @Column('integer', {
    name: 'TransportShipID',
    nullable: true,
    default: () => '0',
  })
  transportShipId: number | null;

  @Column('integer', { name: 'Seniority', nullable: true, default: () => '0' })
  seniority: number | null;

  @Column('integer', {
    name: 'RetireStatus',
    nullable: true,
    default: () => '0',
  })
  retireStatus: number | null;

  @Column('integer', { name: 'LifepodID', nullable: true, default: () => '0' })
  lifepodId: number | null;

  @Column('text', { name: 'Orders', nullable: true })
  orders: string | null;

  @Column('text', { name: 'Notes', nullable: true })
  notes: string | null;

  @Column('integer', {
    name: 'HomeworldID',
    nullable: true,
    default: () => 'NULL',
  })
  homeworldId: number | null;

  @Column('integer', { name: 'POWRaceID', nullable: true, default: () => '0' })
  powRaceId: number | null;

  @Column('double', { name: 'CareerStart', nullable: true, default: () => '1' })
  careerStart: number | null;

  @Column('boolean', { name: 'Deceased', nullable: true, default: () => '0' })
  deceased: boolean | null;

  @Column('integer', { name: 'Loyalty', nullable: true, default: () => '100' })
  loyalty: number | null;

  @Column('integer', {
    name: 'HealthRisk',
    nullable: true,
    default: () => 'NULL',
  })
  healthRisk: number | null;

  @Column('boolean', { name: 'Female', nullable: true, default: () => '0' })
  female: boolean | null;

  @Column('integer', {
    name: 'KillTonnageCommercial',
    nullable: true,
    default: () => '0',
  })
  killTonnageCommercial: number | null;

  @Column('integer', {
    name: 'KillTonnageMilitary',
    nullable: true,
    default: () => '0',
  })
  killTonnageMilitary: number | null;

  @Column('integer', { name: 'EducationColony', nullable: true })
  educationColony: number | null;

  @Column('boolean', {
    name: 'StoryCharacter',
    nullable: true,
    default: () => 'FALSE',
  })
  storyCharacter: boolean | null;

  @Column('boolean', {
    name: 'DoNotPromote',
    nullable: true,
    default: () => 'FALSE',
  })
  doNotPromote: boolean | null;

  @Column('boolean', {
    name: 'RetainRetired',
    nullable: true,
    default: () => 'FALSE',
  })
  retainRetired: boolean | null;
}
