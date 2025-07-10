import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_AlienRace')
export class FctAlienRace {
  @PrimaryColumn('integer', {
    name: 'AlienRaceID',
  })
  alienRaceId: number | null;

  @PrimaryColumn('integer', {
    name: 'ViewRaceID',
  })
  viewRaceId: number | null;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number | null;

  @Column('text', {
    name: 'AlienRaceName',
    nullable: true,
    default: () => 'NULL',
  })
  alienRaceName: string | null;

  @Column('integer', {
    name: 'FixedRelationship',
    nullable: true,
    default: () => '0',
  })
  fixedRelationship: number | null;

  @Column('integer', {
    name: 'ClassThemeID',
    nullable: true,
    default: () => '0',
  })
  classThemeId: number | null;

  @Column('double', {
    name: 'FirstDetected',
    nullable: true,
    default: () => 'NULL',
  })
  firstDetected: number | null;

  @Column('integer', {
    name: 'ContactStatus',
    nullable: true,
    default: () => '0',
  })
  contactStatus: number | null;

  @Column('text', { name: 'Abbrev', nullable: true, default: () => 'NULL' })
  abbrev: string | null;

  @Column('integer', { name: 'CommStatus', nullable: true, default: () => '0' })
  commStatus: number | null;

  @Column('double', {
    name: 'CommModifier',
    nullable: true,
    default: () => '0',
  })
  commModifier: number | null;

  @Column('double', {
    name: 'CommEstablished',
    nullable: true,
    default: () => '0',
  })
  commEstablished: number | null;

  @Column('double', {
    name: 'DiplomaticPoints',
    nullable: true,
    default: () => '0',
  })
  diplomaticPoints: number | null;

  @Column('boolean', {
    name: 'TradeTreaty',
    nullable: true,
    default: () => 'NULL',
  })
  tradeTreaty: boolean | null;

  @Column('boolean', {
    name: 'TechTreaty',
    nullable: true,
    default: () => 'NULL',
  })
  techTreaty: boolean | null;

  @Column('boolean', {
    name: 'GeoTreaty',
    nullable: true,
    default: () => 'NULL',
  })
  geoTreaty: boolean | null;

  @Column('boolean', {
    name: 'GravTreaty',
    nullable: true,
    default: () => 'NULL',
  })
  gravTreaty: boolean | null;

  @Column('integer', {
    name: 'RealClassNames',
    nullable: true,
    default: () => '0',
  })
  realClassNames: number | null;

  @Column('double', {
    name: 'AlienRaceIntelligencePoints',
    nullable: true,
    default: () => '0',
  })
  alienRaceIntelligencePoints: number | null;

  @Column('double', {
    name: 'DamageCausedByAlienRace',
    nullable: true,
    default: () => '0',
  })
  damageCausedByAlienRace: number | null;

  @Column('integer', {
    name: 'RandomNameOrder',
    nullable: true,
    default: () => '1',
  })
  randomNameOrder: number | null;
}
