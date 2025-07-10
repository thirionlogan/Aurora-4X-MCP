import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Shipyard')
export class FctShipyard {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'ShipyardID',
  })
  shipyardId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', {
    name: 'TractorParentShipID',
    nullable: true,
    default: () => '0',
  })
  tractorParentShipId: number | null;

  @Column('integer', {
    name: 'PopulationID',
    nullable: true,
    default: () => 'NULL',
  })
  populationId: number | null;

  @Column('integer', { name: 'SYType', nullable: true, default: () => '1' })
  syType: number | null;

  @Column('text', {
    name: 'ShipyardName',
    nullable: true,
    default: () => 'NULL',
  })
  shipyardName: string | null;

  @Column('double', { name: 'Slipways', nullable: true, default: () => '1' })
  slipways: number | null;

  @Column('double', { name: 'Capacity', nullable: true, default: () => '1000' })
  capacity: number | null;

  @Column('integer', {
    name: 'BuildClassID',
    nullable: true,
    default: () => '0',
  })
  buildClassId: number | null;

  @Column('integer', {
    name: 'RetoolClassID',
    nullable: true,
    default: () => '0',
  })
  retoolClassId: number | null;

  @Column('integer', { name: 'TaskType', nullable: true, default: () => '0' })
  taskType: number | null;

  @Column('double', { name: 'RequiredBP', nullable: true, default: () => '0' })
  requiredBp: number | null;

  @Column('double', { name: 'CompletedBP', nullable: true, default: () => '0' })
  completedBp: number | null;

  @Column('boolean', {
    name: 'PauseActivity',
    nullable: true,
    default: () => '0',
  })
  pauseActivity: boolean | null;

  @Column('integer', {
    name: 'DefaultFleetID',
    nullable: true,
    default: () => '0',
  })
  defaultFleetId: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => '0' })
  ycor: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', {
    name: 'CapacityTarget',
    nullable: true,
    default: () => '0',
  })
  capacityTarget: number | null;

  @Column('integer', {
    name: 'ParentShipID',
    nullable: true,
    default: () => '0',
  })
  parentShipId: number | null;
}
