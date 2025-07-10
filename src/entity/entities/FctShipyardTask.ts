import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_ShipyardTask')
export class FctShipyardTask {
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

  @Column('integer', {
    name: 'ShipyardID',
    nullable: true,
    default: () => 'NULL',
  })
  shipyardId: number | null;

  @Column('integer', { name: 'TaskTypeID', nullable: true, default: () => '0' })
  taskTypeId: number | null;

  @Column('boolean', {
    name: 'Freighter',
    nullable: true,
    default: () => 'NULL',
  })
  freighter: boolean | null;

  @Column('integer', { name: 'FleetID', nullable: true, default: () => '0' })
  fleetId: number | null;

  @Column('integer', { name: 'ShipID', nullable: true, default: () => '0' })
  shipId: number | null;

  @Column('integer', { name: 'ClassID', nullable: true, default: () => '0' })
  classId: number | null;

  @Column('boolean', { name: 'NPRShip', nullable: true, default: () => '0' })
  nprShip: boolean | null;

  @Column('integer', { name: 'RefitID', nullable: true, default: () => '0' })
  refitId: number | null;

  @Column('double', { name: 'TotalBP', nullable: true, default: () => '0' })
  totalBp: number | null;

  @Column('double', { name: 'CompletedBP', nullable: true, default: () => '0' })
  completedBp: number | null;

  @Column('boolean', { name: 'Paused', nullable: true, default: () => 'NULL' })
  paused: boolean | null;

  @Column('text', { name: 'UnitName', nullable: true, default: () => 'NULL' })
  unitName: string | null;

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

  @Column('boolean', {
    name: 'UseComponents',
    nullable: true,
    default: () => 'FALSE',
  })
  useComponents: boolean | null;
}
