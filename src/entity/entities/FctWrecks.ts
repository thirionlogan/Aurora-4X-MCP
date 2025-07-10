import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Wrecks')
export class FctWrecks {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'WreckID' })
  wreckId: number;

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

  @Column('integer', { name: 'ClassID', nullable: true, default: () => 'NULL' })
  classId: number | null;

  @Column('double', { name: 'Size', nullable: true, default: () => '0' })
  size: number | null;

  @Column('integer', {
    name: 'EffectiveSize',
    nullable: true,
    default: () => '0',
  })
  effectiveSize: number | null;

  @Column('integer', {
    name: 'StarSwarmHatching',
    nullable: true,
    default: () => '0',
  })
  starSwarmHatching: number | null;

  @Column('integer', {
    name: 'QueenStatus',
    nullable: true,
    default: () => '0',
  })
  queenStatus: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

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
