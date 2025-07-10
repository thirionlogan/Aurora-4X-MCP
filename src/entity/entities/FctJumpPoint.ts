import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_JumpPoint')
export class FctJumpPoint {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'WarpPointID',
  })
  warpPointId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', { name: 'SystemID', nullable: true, default: () => '0' })
  systemId: number | null;

  @Column('double', { name: 'Distance', nullable: true, default: () => '0' })
  distance: number | null;

  @Column('integer', { name: 'Bearing', nullable: true, default: () => '0' })
  bearing: number | null;

  @Column('integer', { name: 'WPLink', nullable: true, default: () => '0' })
  wpLink: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('integer', {
    name: 'JumpGateStrength',
    nullable: true,
    default: () => '0',
  })
  jumpGateStrength: number | null;

  @Column('integer', {
    name: 'JumpGateRaceID',
    nullable: true,
    default: () => '0',
  })
  jumpGateRaceId: number | null;
}
