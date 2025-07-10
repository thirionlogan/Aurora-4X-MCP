import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_MissileSalvo')
export class FctMissileSalvo {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'MissileSalvoID',
  })
  missileSalvoId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'ShipID', nullable: true, default: () => '0' })
  shipId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
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

  @Column('integer', {
    name: 'MissileID',
    nullable: true,
    default: () => 'NULL',
  })
  missileId: number | null;

  @Column('integer', {
    name: 'MissileNum',
    nullable: true,
    default: () => 'NULL',
  })
  missileNum: number | null;

  @Column('double', { name: 'LaunchTime', nullable: true, default: () => '1' })
  launchTime: number | null;

  @Column('integer', {
    name: 'FireControlID',
    nullable: true,
    default: () => '0',
  })
  fireControlId: number | null;

  @Column('integer', { name: 'FCNum', nullable: true, default: () => '0' })
  fcNum: number | null;

  @Column('integer', { name: 'TargetID', nullable: true, default: () => '0' })
  targetId: number | null;

  @Column('integer', { name: 'TargetType', nullable: true, default: () => '0' })
  targetType: number | null;

  @Column('integer', {
    name: 'MissileSpeed',
    nullable: true,
    default: () => '0',
  })
  missileSpeed: number | null;

  @Column('double', {
    name: 'ModifierToHit',
    nullable: true,
    default: () => '1',
  })
  modifierToHit: number | null;

  @Column('double', {
    name: 'Endurance',
    nullable: true,
    default: () => 'NULL',
  })
  endurance: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('double', { name: 'LastXcor', nullable: true, default: () => 'NULL' })
  lastXcor: number | null;

  @Column('double', { name: 'LastYcor', nullable: true, default: () => 'NULL' })
  lastYcor: number | null;

  @Column('double', { name: 'LastTargetX', nullable: true, default: () => '0' })
  lastTargetX: number | null;

  @Column('double', { name: 'LastTargetY', nullable: true, default: () => '0' })
  lastTargetY: number | null;

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

  @Column('integer', {
    name: 'HomingMethod',
    nullable: true,
    default: () => '0',
  })
  homingMethod: number | null;
}
