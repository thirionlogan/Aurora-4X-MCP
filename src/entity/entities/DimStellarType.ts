import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_StellarType')
export class DimStellarType {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'StellarTypeID',
  })
  stellarTypeId: number;

  @Column('text', {
    name: 'SpectralClass',
    nullable: true,
    default: () => 'NULL',
  })
  spectralClass: string | null;

  @Column('integer', {
    name: 'SpectralNumber',
    nullable: true,
    default: () => 'NULL',
  })
  spectralNumber: number | null;

  @Column('boolean', { name: 'Checked', nullable: true, default: () => 'NULL' })
  checked: boolean | null;

  @Column('boolean', { name: 'NotPS', nullable: true, default: () => 'NULL' })
  notPs: boolean | null;

  @Column('integer', {
    name: 'MaxChance',
    nullable: true,
    default: () => 'NULL',
  })
  maxChance: number | null;

  @Column('integer', {
    name: 'BDMaxChance',
    nullable: true,
    default: () => '0',
  })
  bdMaxChance: number | null;

  @Column('text', { name: 'SizeText', nullable: true, default: () => 'NULL' })
  sizeText: string | null;

  @Column('integer', { name: 'SizeID', nullable: true, default: () => 'NULL' })
  sizeId: number | null;

  @Column('double', {
    name: 'Luminosity',
    nullable: true,
    default: () => 'NULL',
  })
  luminosity: number | null;

  @Column('double', { name: 'Mass', nullable: true, default: () => 'NULL' })
  mass: number | null;

  @Column('integer', {
    name: 'Temperature',
    nullable: true,
    default: () => 'NULL',
  })
  temperature: number | null;

  @Column('double', { name: 'Radius', nullable: true, default: () => 'NULL' })
  radius: number | null;

  @Column('integer', {
    name: 'AgeRangeID',
    nullable: true,
    default: () => 'NULL',
  })
  ageRangeId: number | null;

  @Column('integer', { name: 'Red', nullable: true, default: () => 'NULL' })
  red: number | null;

  @Column('integer', { name: 'Green', nullable: true, default: () => 'NULL' })
  green: number | null;

  @Column('integer', { name: 'Blue', nullable: true, default: () => 'NULL' })
  blue: number | null;

  @Column('integer', {
    name: 'MaxChanceOld',
    nullable: true,
    default: () => 'NULL',
  })
  maxChanceOld: number | null;

  @Column('integer', { name: 'ExtraJP', nullable: true, default: () => '0' })
  extraJp: number | null;
}
