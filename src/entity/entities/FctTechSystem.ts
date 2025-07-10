import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_TechSystem')
export class FctTechSystem {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'TechSystemID',
  })
  techSystemId: number;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('text', {
    name: 'ComponentName',
    nullable: true,
    default: () => 'NULL',
  })
  componentName: string | null;

  @Column('integer', {
    name: 'CategoryID',
    nullable: true,
    default: () => 'NULL',
  })
  categoryId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
  raceId: number | null;

  @Column('integer', { name: 'TechTypeID', nullable: true, default: () => '0' })
  techTypeId: number | null;

  @Column('boolean', { name: 'NoTechScan', nullable: true, default: () => '0' })
  noTechScan: boolean | null;

  @Column('boolean', { name: 'RuinOnly', nullable: true, default: () => '0' })
  ruinOnly: boolean | null;

  @Column('integer', {
    name: 'Prerequisite1',
    nullable: true,
    default: () => '0',
  })
  prerequisite1: number | null;

  @Column('integer', {
    name: 'Prerequisite2',
    nullable: true,
    default: () => '0',
  })
  prerequisite2: number | null;

  @Column('boolean', {
    name: 'StartingSystem',
    nullable: true,
    default: () => 'NULL',
  })
  startingSystem: boolean | null;

  @Column('boolean', {
    name: 'ConventionalSystem',
    nullable: true,
    default: () => 'NULL',
  })
  conventionalSystem: boolean | null;

  @Column('integer', {
    name: 'DevelopCost',
    nullable: true,
    default: () => '0',
  })
  developCost: number | null;

  @Column('double', {
    name: 'AdditionalInfo',
    nullable: true,
    default: () => '0',
  })
  additionalInfo: number | null;

  @Column('double', {
    name: 'AdditionalInfo2',
    nullable: true,
    default: () => '0',
  })
  additionalInfo2: number | null;

  @Column('double', {
    name: 'AdditionalInfo3',
    nullable: true,
    default: () => '0',
  })
  additionalInfo3: number | null;

  @Column('double', {
    name: 'AdditionalInfo4',
    nullable: true,
    default: () => '0',
  })
  additionalInfo4: number | null;

  @Column('text', {
    name: 'TechDescription',
    nullable: true,
    default: () => 'NULL',
  })
  techDescription: string | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('boolean', {
    name: 'AutomaticResearch',
    nullable: true,
    default: () => 'FALSE',
  })
  automaticResearch: boolean | null;
}
