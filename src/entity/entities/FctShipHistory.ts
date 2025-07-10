import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShipHistory')
export class FctShipHistory {
  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'ShipID',
  })
  shipId: number;

  @Column('text', {
    name: 'Description',
    nullable: true,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('double', { name: 'GameTime', nullable: true, default: () => 'NULL' })
  gameTime: number | null;
}
