import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_PlanetaryInstallation')
export class DimPlanetaryInstallation {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'PlanetaryInstallationID',
  })
  planetaryInstallationId: number;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('double', { name: 'Cost', nullable: true, default: () => 'NULL' })
  cost: number | null;

  @Column('integer', {
    name: 'ConversionFrom',
    nullable: true,
    default: () => '0',
  })
  conversionFrom: number | null;

  @Column('integer', {
    name: 'ConversionTo',
    nullable: true,
    default: () => '0',
  })
  conversionTo: number | null;

  @Column('integer', {
    name: 'CargoPoints',
    nullable: true,
    default: () => '0',
  })
  cargoPoints: number | null;

  @Column('double', {
    name: 'ConstructionValue',
    nullable: true,
    default: () => '0',
  })
  constructionValue: number | null;

  @Column('double', {
    name: 'OrdnanceProductionValue',
    nullable: true,
    default: () => '0',
  })
  ordnanceProductionValue: number | null;

  @Column('double', {
    name: 'FighterProductionValue',
    nullable: true,
    default: () => '0',
  })
  fighterProductionValue: number | null;

  @Column('double', {
    name: 'RefineryProductionValue',
    nullable: true,
    default: () => '0',
  })
  refineryProductionValue: number | null;

  @Column('double', {
    name: 'ResearchValue',
    nullable: true,
    default: () => '0',
  })
  researchValue: number | null;

  @Column('double', {
    name: 'TerraformValue',
    nullable: true,
    default: () => '0',
  })
  terraformValue: number | null;

  @Column('double', {
    name: 'MaintenanceValue',
    nullable: true,
    default: () => '0',
  })
  maintenanceValue: number | null;

  @Column('double', {
    name: 'MiningProductionValue',
    nullable: true,
    default: () => '0',
  })
  miningProductionValue: number | null;

  @Column('double', {
    name: 'InfrastructureValue',
    nullable: true,
    default: () => '0',
  })
  infrastructureValue: number | null;

  @Column('double', {
    name: 'LGInfrastructureValue',
    nullable: true,
    default: () => '0',
  })
  lgInfrastructureValue: number | null;

  @Column('double', { name: 'SensorValue', nullable: true, default: () => '0' })
  sensorValue: number | null;

  @Column('double', {
    name: 'GroundTrainingValue',
    nullable: true,
    default: () => '0',
  })
  groundTrainingValue: number | null;

  @Column('double', {
    name: 'AcademyValue',
    nullable: true,
    default: () => '0',
  })
  academyValue: number | null;

  @Column('double', {
    name: 'SectorCommandValue',
    nullable: true,
    default: () => '0',
  })
  sectorCommandValue: number | null;

  @Column('double', {
    name: 'MassDriverValue',
    nullable: true,
    default: () => '0',
  })
  massDriverValue: number | null;

  @Column('double', {
    name: 'FinancialProductionValue',
    nullable: true,
    default: () => '0',
  })
  financialProductionValue: number | null;

  @Column('double', {
    name: 'CargoShuttleValue',
    nullable: true,
    default: () => '0',
  })
  cargoShuttleValue: number | null;

  @Column('double', {
    name: 'GeneticModificationValue',
    nullable: true,
    default: () => '0',
  })
  geneticModificationValue: number | null;

  @Column('integer', {
    name: 'MassRefuelling',
    nullable: true,
    default: () => '0',
  })
  massRefuelling: number | null;

  @Column('double', { name: 'Workers', nullable: true, default: () => '0' })
  workers: number | null;

  @Column('text', {
    name: 'WorkerDesciption',
    nullable: true,
    default: () => 'NULL',
  })
  workerDesciption: string | null;

  @Column('double', {
    name: 'ThermalSignature',
    nullable: true,
    default: () => '0',
  })
  thermalSignature: number | null;

  @Column('double', { name: 'EMsignature', nullable: true, default: () => '0' })
  eMsignature: number | null;

  @Column('integer', {
    name: 'TargetSize',
    nullable: true,
    default: () => 'NULL',
  })
  targetSize: number | null;

  @Column('numeric', {
    name: 'CivilianInstallation',
    nullable: true,
    default: () => '0',
  })
  civilianInstallation: number | null;

  @Column('numeric', {
    name: 'SwarmUse',
    nullable: true,
    default: () => 'NULL',
  })
  swarmUse: number | null;

  @Column('numeric', { name: 'NoBuild', nullable: true, default: () => 'NULL' })
  noBuild: number | null;

  @Column('numeric', { name: 'CivMove', nullable: true, default: () => 'NULL' })
  civMove: number | null;

  @Column('double', {
    name: 'DisplayOrder',
    nullable: true,
    default: () => 'NULL',
  })
  displayOrder: number | null;

  @Column('integer', {
    name: 'RequiredTechID',
    nullable: true,
    default: () => '0',
  })
  requiredTechId: number | null;

  @Column('double', { name: 'Duranium', nullable: true, default: () => '0' })
  duranium: number | null;

  @Column('double', { name: 'Neutronium', nullable: true, default: () => '0' })
  neutronium: number | null;

  @Column('double', { name: 'Corbomite', nullable: true, default: () => '0' })
  corbomite: number | null;

  @Column('double', { name: 'Tritanium', nullable: true, default: () => '0' })
  tritanium: number | null;

  @Column('double', { name: 'Boronide', nullable: true, default: () => '0' })
  boronide: number | null;

  @Column('double', { name: 'Mercassium', nullable: true, default: () => '0' })
  mercassium: number | null;

  @Column('double', { name: 'Vendarite', nullable: true, default: () => '0' })
  vendarite: number | null;

  @Column('double', { name: 'Sorium', nullable: true, default: () => '0' })
  sorium: number | null;

  @Column('double', { name: 'Uridium', nullable: true, default: () => '0' })
  uridium: number | null;

  @Column('double', { name: 'Corundium', nullable: true, default: () => '0' })
  corundium: number | null;

  @Column('double', { name: 'Gallicite', nullable: true, default: () => '0' })
  gallicite: number | null;

  @Column('integer', {
    name: 'NavalHeadquartersValue',
    nullable: true,
    default: () => '0',
  })
  navalHeadquartersValue: number | null;

  @Column('integer', {
    name: 'MassOrdnanceTransfer',
    nullable: true,
    default: () => '0',
  })
  massOrdnanceTransfer: number | null;

  @Column('text', { name: 'Abbreviation', nullable: true })
  abbreviation: string | null;

  @Column('boolean', {
    name: 'TaxableWorkers',
    nullable: true,
    default: () => '0',
  })
  taxableWorkers: boolean | null;
}
