import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_Population')
export class FctPopulation {
  @PrimaryColumn('integer', { name: 'PopulationID' })
  populationId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'SpeciesID' })
  speciesId: number;

  @Column('text', { name: 'PopName', nullable: true })
  popName: string | null;

  @Column('real', { name: 'AcademyOfficers', nullable: true })
  academyOfficers: number | null;

  @Column('numeric', { name: 'Capital', nullable: true })
  capital: number | null;

  @Column('integer', { name: 'TerraformStatus', nullable: true })
  terraformStatus: number | null;

  @Column('numeric', { name: 'PurchaseCivilianMinerals', nullable: true })
  purchaseCivilianMinerals: number | null;

  @Column('integer', { name: 'ColonistDestination', nullable: true })
  colonistDestination: number | null;

  @Column('real', { name: 'Efficiency', nullable: true })
  efficiency: number | null;

  @Column('integer', { name: 'FighterDestFleetID', nullable: true })
  fighterDestFleetId: number | null;

  @Column('numeric', { name: 'FuelProdStatus', nullable: true })
  fuelProdStatus: number | null;

  @Column('real', { name: 'FuelStockpile', nullable: true })
  fuelStockpile: number | null;

  @Column('integer', { name: 'GenModSpeciesID', nullable: true })
  genModSpeciesId: number | null;

  @Column('integer', { name: 'GroundAttackID', nullable: true })
  groundAttackId: number | null;

  @Column('integer', { name: 'GroundAttackType', nullable: true })
  groundAttackType: number | null;

  @Column('real', { name: 'LastColonyCost', nullable: true })
  lastColonyCost: number | null;

  @Column('real', { name: 'MaintenanceStockpile', nullable: true })
  maintenanceStockpile: number | null;

  @Column('numeric', { name: 'MaintProdStatus', nullable: true })
  maintProdStatus: number | null;

  @Column('integer', { name: 'MassDriverDest', nullable: true })
  massDriverDest: number | null;

  @Column('real', { name: 'MaxAtm', nullable: true })
  maxAtm: number | null;

  @Column('integer', { name: 'NoStatusChange', nullable: true })
  noStatusChange: number | null;

  @Column('integer', { name: 'PoliticalStatus', nullable: true })
  politicalStatus: number | null;

  @Column('real', { name: 'Population', nullable: true })
  population: number | null;

  @Column('real', { name: 'PreviousUnrest', nullable: true })
  previousUnrest: number | null;

  @Column('integer', { name: 'ProvideColonists', nullable: true })
  provideColonists: number | null;

  @Column('integer', { name: 'ReqInf', nullable: true })
  reqInf: number | null;

  @Column('real', { name: 'StatusPoints', nullable: true })
  statusPoints: number | null;

  @Column('integer', { name: 'SystemID', nullable: true })
  systemId: number | null;

  @Column('integer', { name: 'SystemBodyID', nullable: true })
  systemBodyId: number | null;

  @Column('integer', { name: 'TempMF', nullable: true })
  tempMf: number | null;

  @Column('integer', { name: 'TerraformingGasID', nullable: true })
  terraformingGasId: number | null;

  @Column('real', { name: 'UnrestPoints', nullable: true })
  unrestPoints: number | null;

  @Column('real', { name: 'Duranium', nullable: true })
  duranium: number | null;

  @Column('real', { name: 'Neutronium', nullable: true })
  neutronium: number | null;

  @Column('real', { name: 'Corbomite', nullable: true })
  corbomite: number | null;

  @Column('real', { name: 'Tritanium', nullable: true })
  tritanium: number | null;

  @Column('real', { name: 'Boronide', nullable: true })
  boronide: number | null;

  @Column('real', { name: 'Mercassium', nullable: true })
  mercassium: number | null;

  @Column('real', { name: 'Vendarite', nullable: true })
  vendarite: number | null;

  @Column('real', { name: 'Sorium', nullable: true })
  sorium: number | null;

  @Column('real', { name: 'Uridium', nullable: true })
  uridium: number | null;

  @Column('real', { name: 'Corundium', nullable: true })
  corundium: number | null;

  @Column('real', { name: 'Gallicite', nullable: true })
  gallicite: number | null;

  @Column('real', { name: 'LastDuranium', nullable: true })
  lastDuranium: number | null;

  @Column('real', { name: 'LastNeutronium', nullable: true })
  lastNeutronium: number | null;

  @Column('real', { name: 'LastCorbomite', nullable: true })
  lastCorbomite: number | null;

  @Column('real', { name: 'LastTritanium', nullable: true })
  lastTritanium: number | null;

  @Column('real', { name: 'LastBoronide', nullable: true })
  lastBoronide: number | null;

  @Column('real', { name: 'LastMercassium', nullable: true })
  lastMercassium: number | null;

  @Column('real', { name: 'LastVendarite', nullable: true })
  lastVendarite: number | null;

  @Column('real', { name: 'LastSorium', nullable: true })
  lastSorium: number | null;

  @Column('real', { name: 'LastUridium', nullable: true })
  lastUridium: number | null;

  @Column('real', { name: 'LastCorundium', nullable: true })
  lastCorundium: number | null;

  @Column('real', { name: 'LastGallicite', nullable: true })
  lastGallicite: number | null;

  @Column('real', { name: 'ReserveDuranium', nullable: true })
  reserveDuranium: number | null;

  @Column('real', { name: 'ReserveNeutronium', nullable: true })
  reserveNeutronium: number | null;

  @Column('real', { name: 'ReserveCorbomite', nullable: true })
  reserveCorbomite: number | null;

  @Column('real', { name: 'ReserveTritanium', nullable: true })
  reserveTritanium: number | null;

  @Column('real', { name: 'ReserveBoronide', nullable: true })
  reserveBoronide: number | null;

  @Column('real', { name: 'ReserveMercassium', nullable: true })
  reserveMercassium: number | null;

  @Column('real', { name: 'ReserveVendarite', nullable: true })
  reserveVendarite: number | null;

  @Column('real', { name: 'ReserveSorium', nullable: true })
  reserveSorium: number | null;

  @Column('real', { name: 'ReserveUridium', nullable: true })
  reserveUridium: number | null;

  @Column('real', { name: 'ReserveCorundium', nullable: true })
  reserveCorundium: number | null;

  @Column('real', { name: 'ReserveGallicite', nullable: true })
  reserveGallicite: number | null;

  @Column('real', { name: 'GroundGeoSurvey', nullable: true })
  groundGeoSurvey: number | null;

  @Column('integer', { name: 'DestroyedInstallationSize', nullable: true })
  destroyedInstallationSize: number | null;

  @Column('integer', { name: 'AIValue', nullable: true })
  aiValue: number | null;

  @Column('numeric', { name: 'InvasionStagingPoint', nullable: true })
  invasionStagingPoint: number | null;

  @Column('integer', { name: 'OriginalRaceID', nullable: true })
  originalRaceId: number | null;

  @Column('numeric', { name: 'DoNotDelete', nullable: true })
  doNotDelete: number | null;

  @Column('numeric', { name: 'MilitaryRestrictedColony', nullable: true })
  militaryRestrictedColony: number | null;

  @Column('text', { name: 'AcademyName', nullable: true })
  academyName: string | null;

  @Column('integer', {
    name: 'SpaceStationDestFleetID',
    nullable: true,
    default: () => '0',
  })
  spaceStationDestFleetId: number | null;

  @Column('integer', { name: 'Importance', nullable: true, default: () => '0' })
  importance: number | null;

  @Column('integer', { name: 'AutoAssign', nullable: true, default: () => '0' })
  autoAssign: number | null;

  @Column('integer', { name: 'BonusOne', nullable: true, default: () => '8' })
  bonusOne: number | null;

  @Column('integer', { name: 'BonusTwo', nullable: true, default: () => '20' })
  bonusTwo: number | null;

  @Column('integer', { name: 'BonusThree', nullable: true, default: () => '6' })
  bonusThree: number | null;

  @Column('boolean', {
    name: 'AutoRefuel',
    nullable: true,
    default: () => 'TRUE',
  })
  autoRefuel: boolean | null;

  @Column('integer', {
    name: 'ParasiteSourceID',
    nullable: true,
    default: () => '0',
  })
  parasiteSourceId: number | null;

  @Column('boolean', {
    name: 'GeneticProdStatus',
    nullable: true,
    default: () => 'FALSE',
  })
  geneticProdStatus: boolean | null;
}
