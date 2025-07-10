import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_WindowPosition')
export class FctWindowPosition {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('text', { name: 'WindowName', nullable: true, default: () => 'NULL' })
  windowName: string | null;

  @Column('integer', { name: 'Left', nullable: true, default: () => '0' })
  left: number | null;

  @Column('integer', { name: 'Top', nullable: true, default: () => '0' })
  top: number | null;
}
