import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_KnownSystems_Old')
export class DimKnownSystemsOld {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'KnownSystemID',
  })
  knownSystemId: number;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('text', {
    name: 'PrimaryName',
    nullable: true,
    default: () => 'NULL',
  })
  primaryName: string | null;

  @Column('integer', {
    name: 'Component1ID',
    nullable: true,
    default: () => 'NULL',
  })
  component1Id: number | null;

  @Column('integer', {
    name: 'Component2ID',
    nullable: true,
    default: () => '0',
  })
  component2Id: number | null;

  @Column('double', { name: 'C2Orbit', nullable: true, default: () => '0' })
  c2Orbit: number | null;

  @Column('integer', {
    name: 'Component3ID',
    nullable: true,
    default: () => '0',
  })
  component3Id: number | null;

  @Column('double', { name: 'C3Orbit', nullable: true, default: () => '0' })
  c3Orbit: number | null;

  @Column('integer', {
    name: 'C3OrbitType',
    nullable: true,
    default: () => '0',
  })
  c3OrbitType: number | null;

  @Column('integer', {
    name: 'Component4ID',
    nullable: true,
    default: () => '0',
  })
  component4Id: number | null;

  @Column('double', { name: 'C4Orbit', nullable: true, default: () => '0' })
  c4Orbit: number | null;

  @Column('integer', {
    name: 'C4OrbitType',
    nullable: true,
    default: () => '0',
  })
  c4OrbitType: number | null;

  @Column('double', { name: 'X', nullable: true, default: () => '0' })
  x: number | null;

  @Column('double', { name: 'Y', nullable: true, default: () => '0' })
  y: number | null;

  @Column('double', { name: 'Z', nullable: true, default: () => '0' })
  z: number | null;

  @Column('double', { name: 'Distance', nullable: true, default: () => 'NULL' })
  distance: number | null;

  @Column('text', { name: 'ConstellationName', nullable: true })
  constellationName: string | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;
}
