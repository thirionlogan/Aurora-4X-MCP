import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_FleetHistory')
export class FctFleetHistory {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'FleetID' })
  fleetId: number;

  @Column('text', {
    name: 'Description',
    nullable: true,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('double', { name: 'GameTime', nullable: true, default: () => 'NULL' })
  gameTime: number | null;
}
