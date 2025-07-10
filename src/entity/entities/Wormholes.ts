import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Wormholes')
export class Wormholes {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'WormholeID',
  })
  wormholeId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', {
    name: 'SystemID',
    nullable: true,
    default: () => 'NULL',
  })
  systemId: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;
}
