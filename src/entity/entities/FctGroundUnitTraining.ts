import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_GroundUnitTraining')
export class FctGroundUnitTraining {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'TaskID' })
  taskId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
  raceId: number | null;

  @Column('integer', {
    name: 'PopulationID',
    nullable: true,
    default: () => '0',
  })
  populationId: number | null;

  @Column('double', { name: 'TotalBP', nullable: true, default: () => '0' })
  totalBp: number | null;

  @Column('double', { name: 'CompletedBP', nullable: true, default: () => '0' })
  completedBp: number | null;

  @Column('integer', {
    name: 'FormationTemplateID',
    nullable: true,
    default: () => '0',
  })
  formationTemplateId: number | null;

  @Column('text', {
    name: 'FormationName',
    nullable: true,
    default: () => 'NULL',
  })
  formationName: string | null;

  @Column('double', {
    name: 'TaskPercentage',
    nullable: true,
    default: () => '100',
  })
  taskPercentage: number | null;

  @Column('integer', {
    name: 'OrganizationLinkID',
    nullable: true,
    default: () => '0',
  })
  organizationLinkId: number | null;

  @Column('integer', {
    name: 'ParentLinkID',
    nullable: true,
    default: () => '0',
  })
  parentLinkId: number | null;

  @Column('integer', {
    name: 'FieldPosition',
    nullable: true,
    default: () => '0',
  })
  fieldPosition: number | null;
}
