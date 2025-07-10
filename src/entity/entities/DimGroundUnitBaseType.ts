import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('DIM_GroundUnitBaseType')
export class DimGroundUnitBaseType {
  @PrimaryColumn('text', { name: 'Name' })
  name: string | null;

  @Column('integer', { name: 'HitPoints', nullable: true, default: () => '1' })
  hitPoints: number | null;

  @Column('double', {
    name: 'MaxSelfFortification',
    nullable: true,
    default: () => '1',
  })
  maxSelfFortification: number | null;

  @Column('double', {
    name: 'MaxFortification',
    nullable: true,
    default: () => '1',
  })
  maxFortification: number | null;

  @Column('integer', {
    name: 'UnitBaseTypeID',
    nullable: true,
    default: () => '0',
  })
  unitBaseTypeId: number | null;

  @Column('integer', { name: 'Size', nullable: true, default: () => '0' })
  size: number | null;

  @Column('integer', { name: 'TechSystemID', nullable: true })
  techSystemId: number | null;

  @Column('text', { name: 'Abbreviation', nullable: true })
  abbreviation: string | null;

  @Column('double', {
    name: 'ToHitModifier',
    nullable: true,
    default: () => '1',
  })
  toHitModifier: number | null;

  @Column('integer', {
    name: 'ComponentSlots',
    nullable: true,
    default: () => '1',
  })
  componentSlots: number | null;

  @Column('integer', {
    name: 'DisplayOrder',
    nullable: true,
    default: () => '0',
  })
  displayOrder: number | null;
}
