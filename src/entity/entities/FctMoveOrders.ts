import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_MoveOrders')
export class FctMoveOrders {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'MoveOrderID',
  })
  moveOrderId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
  raceId: number | null;

  @Column('integer', { name: 'FleetID', nullable: true, default: () => '0' })
  fleetId: number | null;

  @Column('integer', {
    name: 'MoveActionID',
    nullable: true,
    default: () => '1',
  })
  moveActionId: number | null;

  @Column('integer', { name: 'MoveOrder', nullable: true, default: () => '0' })
  moveOrder: number | null;

  @Column('integer', {
    name: 'StartSystemID',
    nullable: true,
    default: () => '0',
  })
  startSystemId: number | null;

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
    name: 'PopulationID',
    nullable: true,
    default: () => '0',
  })
  populationId: number | null;

  @Column('integer', {
    name: 'DestinationItemType',
    nullable: true,
    default: () => '0',
  })
  destinationItemType: number | null;

  @Column('integer', {
    name: 'DestinationItemID',
    nullable: true,
    default: () => '0',
  })
  destinationItemId: number | null;

  @Column('double', { name: 'MaxItems', nullable: true, default: () => '0' })
  maxItems: number | null;

  @Column('integer', { name: 'OrderDelay', nullable: true, default: () => '0' })
  orderDelay: number | null;

  @Column('integer', {
    name: 'OrbDistance',
    nullable: true,
    default: () => '0',
  })
  orbDistance: number | null;

  @Column('double', { name: 'MinDistance', nullable: true, default: () => '0' })
  minDistance: number | null;

  @Column('integer', {
    name: 'NewSystemID',
    nullable: true,
    default: () => '0',
  })
  newSystemId: number | null;

  @Column('integer', {
    name: 'NewWarpPointID',
    nullable: true,
    default: () => '0',
  })
  newWarpPointId: number | null;

  @Column('text', {
    name: 'Description',
    nullable: true,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('boolean', { name: 'Arrived', nullable: true, default: () => '0' })
  arrived: boolean | null;

  @Column('double', {
    name: 'SurveyPointsRequired',
    nullable: true,
    default: () => '0',
  })
  surveyPointsRequired: number | null;

  @Column('integer', {
    name: 'TimeRequired',
    nullable: true,
    default: () => '0',
  })
  timeRequired: number | null;

  @Column('text', {
    name: 'MessageText',
    nullable: true,
    default: () => 'NULL',
  })
  messageText: string | null;

  @Column('boolean', {
    name: 'LoadSubUnits',
    nullable: true,
    default: () => '0',
  })
  loadSubUnits: boolean | null;

  @Column('double', { name: 'MinQuantity', nullable: true, default: () => '0' })
  minQuantity: number | null;

  @Column('integer', {
    name: 'OrderDelayRemaining',
    nullable: true,
    default: () => '0',
  })
  orderDelayRemaining: number | null;
}
