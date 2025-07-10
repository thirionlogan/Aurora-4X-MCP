import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Species')
export class FctSpecies {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'SpeciesID',
  })
  speciesId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', {
    name: 'TechSystemID',
    nullable: true,
    default: () => '0',
  })
  techSystemId: number | null;

  @Column('integer', {
    name: 'HomeworldID',
    nullable: true,
    default: () => 'NULL',
  })
  homeworldId: number | null;

  @Column('integer', {
    name: 'DerivedSpeciesID',
    nullable: true,
    default: () => '0',
  })
  derivedSpeciesId: number | null;

  @Column('text', {
    name: 'SpeciesName',
    nullable: true,
    default: () => 'NULL',
  })
  speciesName: string | null;

  @Column('text', { name: 'RacePic', nullable: true, default: () => 'NULL' })
  racePic: string | null;

  @Column('integer', { name: 'BreatheID', nullable: true, default: () => '10' })
  breatheId: number | null;

  @Column('double', { name: 'Oxygen', nullable: true, default: () => '0.2' })
  oxygen: number | null;

  @Column('double', { name: 'OxyDev', nullable: true, default: () => '0.5' })
  oxyDev: number | null;

  @Column('double', { name: 'PressMax', nullable: true, default: () => 'NULL' })
  pressMax: number | null;

  @Column('double', {
    name: 'Temperature',
    nullable: true,
    default: () => '15',
  })
  temperature: number | null;

  @Column('double', { name: 'TempDev', nullable: true, default: () => '20' })
  tempDev: number | null;

  @Column('double', { name: 'Gravity', nullable: true, default: () => '1' })
  gravity: number | null;

  @Column('double', { name: 'GravDev', nullable: true, default: () => '0.5' })
  gravDev: number | null;

  @Column('integer', {
    name: 'Xenophobia',
    nullable: true,
    default: () => 'NULL',
  })
  xenophobia: number | null;

  @Column('integer', {
    name: 'Diplomacy',
    nullable: true,
    default: () => 'NULL',
  })
  diplomacy: number | null;

  @Column('integer', {
    name: 'Translation',
    nullable: true,
    default: () => 'NULL',
  })
  translation: number | null;

  @Column('integer', {
    name: 'Militancy',
    nullable: true,
    default: () => 'NULL',
  })
  militancy: number | null;

  @Column('integer', {
    name: 'Expansionism',
    nullable: true,
    default: () => 'NULL',
  })
  expansionism: number | null;

  @Column('integer', {
    name: 'Determination',
    nullable: true,
    default: () => 'NULL',
  })
  determination: number | null;

  @Column('integer', { name: 'Trade', nullable: true, default: () => 'NULL' })
  trade: number | null;

  @Column('integer', {
    name: 'SpecialNPRID',
    nullable: true,
    default: () => '0',
  })
  specialNprid: number | null;

  @Column('double', {
    name: 'ProductionRateModifier',
    nullable: true,
    default: () => '1',
  })
  productionRateModifier: number | null;

  @Column('double', {
    name: 'ResearchRateModifier',
    nullable: true,
    default: () => '1',
  })
  researchRateModifier: number | null;

  @Column('double', {
    name: 'PopulationGrowthModifier',
    nullable: true,
    default: () => '1',
  })
  populationGrowthModifier: number | null;

  @Column('double', {
    name: 'PopulationDensityModifier',
    nullable: true,
    default: () => '1',
  })
  populationDensityModifier: number | null;
}
