import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GovType')
export class GovType {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'GovTypeID',
  })
  govTypeId: number;

  @Column('varchar', {
    name: 'GovName',
    nullable: true,
    length: 30,
    default: () => 'NULL',
  })
  govName: string | null;

  @Column('double', {
    name: 'MissileBases',
    nullable: true,
    default: () => 'NULL',
  })
  missileBases: number | null;

  @Column('integer', {
    name: 'TotalIndustrial',
    nullable: true,
    default: () => 'NULL',
  })
  totalIndustrial: number | null;

  @Column('double', {
    name: 'ResearchRate',
    nullable: true,
    default: () => '1',
  })
  researchRate: number | null;

  @Column('integer', {
    name: 'TrainingLevel',
    nullable: true,
    default: () => '1',
  })
  trainingLevel: number | null;

  @Column('integer', {
    name: 'SYPerAcademy',
    nullable: true,
    default: () => '1',
  })
  syPerAcademy: number | null;

  @Column('smallint', {
    name: 'MaxChance',
    nullable: true,
    default: () => 'NULL',
  })
  maxChance: number | null;

  @Column('double', { name: 'GrowthMod', nullable: true, default: () => '1' })
  growthMod: number | null;

  @Column('double', { name: 'ConstMod', nullable: true, default: () => '1' })
  constMod: number | null;

  @Column('integer', { name: 'Shipyards', nullable: true, default: () => '0' })
  shipyards: number | null;

  @Column('integer', { name: 'Labs', nullable: true, default: () => '0' })
  labs: number | null;

  @Column('integer', {
    name: 'Construction',
    nullable: true,
    default: () => '0',
  })
  construction: number | null;

  @Column('double', { name: 'Refineries', nullable: true, default: () => '0' })
  refineries: number | null;

  @Column('integer', { name: 'Mines', nullable: true, default: () => 'NULL' })
  mines: number | null;

  @Column('integer', { name: 'Sensors', nullable: true, default: () => 'NULL' })
  sensors: number | null;

  @Column('integer', {
    name: 'XenophobiaMod',
    nullable: true,
    default: () => '0',
  })
  xenophobiaMod: number | null;

  @Column('integer', {
    name: 'DiplomacyMod',
    nullable: true,
    default: () => '0',
  })
  diplomacyMod: number | null;

  @Column('integer', {
    name: 'MilitancyMod',
    nullable: true,
    default: () => '0',
  })
  militancyMod: number | null;

  @Column('integer', {
    name: 'ExpansionismMod',
    nullable: true,
    default: () => '0',
  })
  expansionismMod: number | null;

  @Column('integer', {
    name: 'DeterminationMod',
    nullable: true,
    default: () => 'NULL',
  })
  determinationMod: number | null;

  @Column('integer', { name: 'TradeMod', nullable: true, default: () => '0' })
  tradeMod: number | null;

  @Column('boolean', {
    name: 'UserDefined',
    nullable: true,
    default: () => 'NULL',
  })
  userDefined: boolean | null;

  @Column('integer', { name: 'HA', nullable: true, default: () => '0' })
  ha: number | null;

  @Column('integer', { name: 'MI', nullable: true, default: () => '0' })
  mi: number | null;

  @Column('integer', { name: 'AI', nullable: true, default: () => '0' })
  ai: number | null;

  @Column('integer', { name: 'GAR', nullable: true, default: () => '0' })
  gar: number | null;
}
