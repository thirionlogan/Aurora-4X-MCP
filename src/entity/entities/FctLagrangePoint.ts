import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_LagrangePoint')
export class FctLagrangePoint {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'LagrangePointID',
  })
  lagrangePointId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', {
    name: 'SystemID',
    nullable: true,
    default: () => 'NULL',
  })
  systemId: number | null;

  @Column('integer', { name: 'StarID', nullable: true, default: () => 'NULL' })
  starId: number | null;

  @Column('integer', {
    name: 'PlanetID',
    nullable: true,
    default: () => 'NULL',
  })
  planetId: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('double', { name: 'Distance', nullable: true, default: () => 'NULL' })
  distance: number | null;

  @Column('double', { name: 'Bearing', nullable: true, default: () => 'NULL' })
  bearing: number | null;
}
