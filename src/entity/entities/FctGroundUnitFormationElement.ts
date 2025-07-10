import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_GroundUnitFormationElement')
export class FctGroundUnitFormationElement {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'FormationID' })
  formationId: number | null;

  @Column('integer', { name: 'Units', nullable: true })
  units: number | null;

  @PrimaryColumn('integer', { name: 'ClassID' })
  classId: number | null;

  @PrimaryColumn('integer', { name: 'TemplateID' })
  templateId: number | null;

  @PrimaryColumn('integer', {
    name: 'SpeciesID',
  })
  speciesId: number;

  @Column('integer', { name: 'Morale', nullable: true, default: () => '0' })
  morale: number | null;

  @Column('double', {
    name: 'FortificationLevel',
    nullable: true,
    default: () => '1',
  })
  fortificationLevel: number | null;

  @Column('integer', {
    name: 'CurrentSupply',
    nullable: true,
    default: () => '10',
  })
  currentSupply: number | null;

  @Column('integer', {
    name: 'TargetSelection',
    nullable: true,
    default: () => '0',
  })
  targetSelection: number | null;

  @Column('integer', {
    name: 'FiringDistribution',
    nullable: true,
    default: () => '0',
  })
  firingDistribution: number | null;

  @Column('integer', { name: 'ElementID', nullable: true, default: () => '0' })
  elementId: number | null;
}
