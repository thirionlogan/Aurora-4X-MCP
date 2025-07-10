import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Waypoint')
export class FctWaypoint {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'WaypointID',
  })
  waypointId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', {
    name: 'SystemID',
    nullable: true,
    default: () => 'NULL',
  })
  systemId: number | null;

  @Column('integer', {
    name: 'OrbitBodyID',
    nullable: true,
    default: () => '0',
  })
  orbitBodyId: number | null;

  @Column('double', {
    name: 'CreationTime',
    nullable: true,
    default: () => '0',
  })
  creationTime: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('integer', { name: 'Number', nullable: true, default: () => '0' })
  number: number | null;

  @Column('integer', {
    name: 'WaypointType',
    nullable: true,
    default: () => '0',
  })
  waypointType: number | null;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('integer', {
    name: 'JumpPointID',
    nullable: true,
    default: () => '0',
  })
  jumpPointId: number | null;
}
