import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_GroundUnitTrainingQueue')
export class FctGroundUnitTrainingQueue {
  @Column('text', { name: 'FormationName', nullable: true })
  formationName: string | null;

  @Column('integer', {
    name: 'FormationTemplateID',
    nullable: true,
    default: () => '0',
  })
  formationTemplateId: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'PopulationID' })
  populationId: number;

  @PrimaryColumn('integer', { name: 'QueueID' })
  queueId: number;

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
