import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_DecoyAssignment')
export class FctDecoyAssignment {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @PrimaryColumn('integer', { name: 'LauncherID' })
  launcherId: number;

  @Column('integer', {
    name: 'LauncherNum',
    nullable: true,
    default: () => '0',
  })
  launcherNum: number | null;
}
