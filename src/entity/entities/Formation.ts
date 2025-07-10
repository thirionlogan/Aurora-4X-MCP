import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Formation')
export class Formation {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'FormationID',
  })
  formationId: number;

  @Column('integer', {
    name: 'EscortFleetID',
    nullable: true,
    default: () => 'NULL',
  })
  escortFleetId: number | null;

  @Column('integer', { name: 'ShipID', nullable: true, default: () => 'NULL' })
  shipId: number | null;

  @Column('integer', {
    name: 'ProtectedFleetID',
    nullable: true,
    default: () => 'NULL',
  })
  protectedFleetId: number | null;

  @Column('integer', {
    name: 'Distance',
    nullable: true,
    default: () => 'NULL',
  })
  distance: number | null;

  @Column('integer', {
    name: 'OffsetBearing',
    nullable: true,
    default: () => 'NULL',
  })
  offsetBearing: number | null;

  @Column('varchar', {
    name: 'FleetName',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  fleetName: string | null;
}
