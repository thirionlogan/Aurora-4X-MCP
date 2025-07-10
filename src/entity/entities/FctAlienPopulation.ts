import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_AlienPopulation')
export class FctAlienPopulation {
  @PrimaryColumn('integer', { name: 'ViewingRaceID' })
  viewingRaceId: number;

  @PrimaryColumn('integer', { name: 'AlienRaceID' })
  alienRaceId: number;

  @PrimaryColumn('integer', { name: 'PopulationID' })
  populationId: number;

  @Column('integer', {
    name: 'Installations',
    nullable: true,
    default: () => '0',
  })
  installations: number | null;

  @Column('integer', { name: 'Mines', nullable: true, default: () => '0' })
  mines: number | null;

  @Column('integer', { name: 'Factories', nullable: true, default: () => '0' })
  factories: number | null;

  @Column('integer', { name: 'Refineries', nullable: true, default: () => '0' })
  refineries: number | null;

  @Column('integer', {
    name: 'ResearchFacilities',
    nullable: true,
    default: () => '0',
  })
  researchFacilities: number | null;

  @Column('integer', {
    name: 'MaintenanceFacilities',
    nullable: true,
    default: () => '0',
  })
  maintenanceFacilities: number | null;

  @Column('integer', { name: 'GFTF', nullable: true, default: () => '0' })
  gftf: number | null;

  @Column('boolean', { name: 'Spaceport', nullable: true })
  spaceport: boolean | null;

  @Column('boolean', { name: 'NavalHeadquarters', nullable: true })
  navalHeadquarters: boolean | null;

  @Column('boolean', { name: 'SectorCommand', nullable: true })
  sectorCommand: boolean | null;

  @Column('boolean', { name: 'RefuellingStation', nullable: true })
  refuellingStation: boolean | null;

  @Column('boolean', { name: 'OrdnanceTransfer', nullable: true })
  ordnanceTransfer: boolean | null;

  @Column('boolean', { name: 'CargoStation', nullable: true })
  cargoStation: boolean | null;

  @Column('double', {
    name: 'AlienPopulationIntelligencePoints',
    nullable: true,
    default: () => '0',
  })
  alienPopulationIntelligencePoints: number | null;

  @Column('double', {
    name: 'PopulationAmount',
    nullable: true,
    default: () => '0',
  })
  populationAmount: number | null;

  @Column('text', { name: 'PopulationName', nullable: true })
  populationName: string | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('double', {
    name: 'MaxIntelligence',
    nullable: true,
    default: () => '0',
  })
  maxIntelligence: number | null;

  @Column('double', {
    name: 'PreviousMaxIntelligence',
    nullable: true,
    default: () => '0',
  })
  previousMaxIntelligence: number | null;

  @Column('double', {
    name: 'ThermalSignature',
    nullable: true,
    default: () => '0',
  })
  thermalSignature: number | null;

  @Column('double', { name: 'EMSignature', nullable: true, default: () => '0' })
  emSignature: number | null;
}
