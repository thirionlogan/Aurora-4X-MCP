import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_MassDriverPackets')
export class FctMassDriverPackets {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'PacketID' })
  packetId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', { name: 'SysID', nullable: true, default: () => 'NULL' })
  sysId: number | null;

  @Column('integer', { name: 'DestID', nullable: true, default: () => 'NULL' })
  destId: number | null;

  @Column('double', {
    name: 'TotalSize',
    nullable: true,
    default: () => 'NULL',
  })
  totalSize: number | null;

  @Column('integer', { name: 'Speed', nullable: true, default: () => 'NULL' })
  speed: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('double', { name: 'LastXcor', nullable: true, default: () => 'NULL' })
  lastXcor: number | null;

  @Column('double', { name: 'LastYcor', nullable: true, default: () => 'NULL' })
  lastYcor: number | null;

  @Column('double', {
    name: 'IncrementStartX',
    nullable: true,
    default: () => '0',
  })
  incrementStartX: number | null;

  @Column('double', {
    name: 'IncrementStartY',
    nullable: true,
    default: () => '0',
  })
  incrementStartY: number | null;

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
}
