import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_MoveOrderTemplate')
export class FctMoveOrderTemplate {
  @PrimaryColumn('integer', {
    name: 'OrderTemplateID',
  })
  orderTemplateId: number;

  @Column('integer', {
    name: 'PopulationID',
    nullable: true,
    default: () => '0',
  })
  populationId: number | null;

  @Column('double', { name: 'MinDistance', nullable: true, default: () => '0' })
  minDistance: number | null;

  @Column('integer', {
    name: 'OrbDistance',
    nullable: true,
    default: () => '0',
  })
  orbDistance: number | null;

  @Column('integer', {
    name: 'MoveActionID',
    nullable: true,
    default: () => '1',
  })
  moveActionId: number | null;

  @Column('integer', {
    name: 'NewSystemID',
    nullable: true,
    default: () => '0',
  })
  newSystemId: number | null;

  @Column('text', {
    name: 'Description',
    nullable: true,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('integer', {
    name: 'OrderDelay',
    nullable: true,
    default: () => 'NULL',
  })
  orderDelay: number | null;

  @Column('integer', {
    name: 'DestinationType',
    nullable: true,
    default: () => 'NULL',
  })
  destinationType: number | null;

  @Column('integer', {
    name: 'DestinationID',
    nullable: true,
    default: () => '0',
  })
  destinationId: number | null;

  @Column('integer', {
    name: 'NewJumpPointID',
    nullable: true,
    default: () => '0',
  })
  newJumpPointId: number | null;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @Column('integer', {
    name: 'DestinationItemID',
    nullable: true,
    default: () => '0',
  })
  destinationItemId: number | null;

  @Column('integer', { name: 'MaxItems', nullable: true, default: () => '0' })
  maxItems: number | null;

  @Column('text', { name: 'MessageText', nullable: true, default: () => '0' })
  messageText: string | null;

  @Column('boolean', {
    name: 'LoadSubUnits',
    nullable: true,
    default: () => 'FALSE',
  })
  loadSubUnits: boolean | null;

  @Column('double', { name: 'MinQuantity', nullable: true })
  minQuantity: number | null;

  @Column('integer', {
    name: 'StartSystemID',
    nullable: true,
    default: () => '0',
  })
  startSystemId: number | null;

  @Column('integer', { name: 'MoveIndex', nullable: true, default: () => '0' })
  moveIndex: number | null;

  @Column('integer', { name: 'DestinationItemType', nullable: true })
  destinationItemType: number | null;

  @Column('double', {
    name: 'SurveyPointsRequired',
    nullable: true,
    default: () => '0',
  })
  surveyPointsRequired: number | null;
}
