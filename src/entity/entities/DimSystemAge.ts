import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_SystemAge')
export class DimSystemAge {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'AgeID' })
  ageId: number;

  @Column('text', {
    name: 'SpectralClass',
    nullable: true,
    default: () => 'NULL',
  })
  spectralClass: string | null;

  @Column('double', {
    name: 'TotalLife',
    nullable: true,
    default: () => 'NULL',
  })
  totalLife: number | null;

  @Column('double', { name: 'Lum1', nullable: true, default: () => 'NULL' })
  lum1: number | null;

  @Column('double', { name: 'Lum2', nullable: true, default: () => 'NULL' })
  lum2: number | null;

  @Column('double', { name: 'Lum3', nullable: true, default: () => 'NULL' })
  lum3: number | null;

  @Column('double', { name: 'Lum4', nullable: true, default: () => 'NULL' })
  lum4: number | null;

  @Column('double', { name: 'Lum5', nullable: true, default: () => 'NULL' })
  lum5: number | null;

  @Column('double', { name: 'Lum6', nullable: true, default: () => 'NULL' })
  lum6: number | null;

  @Column('double', { name: 'Lum7', nullable: true, default: () => 'NULL' })
  lum7: number | null;

  @Column('double', { name: 'Lum8', nullable: true, default: () => 'NULL' })
  lum8: number | null;

  @Column('double', { name: 'Lum9', nullable: true, default: () => 'NULL' })
  lum9: number | null;

  @Column('double', { name: 'Lum10', nullable: true, default: () => 'NULL' })
  lum10: number | null;

  @Column('double', { name: 'Age1', nullable: true, default: () => 'NULL' })
  age1: number | null;

  @Column('double', { name: 'Age2', nullable: true, default: () => 'NULL' })
  age2: number | null;

  @Column('double', { name: 'Age3', nullable: true, default: () => 'NULL' })
  age3: number | null;

  @Column('double', { name: 'Age4', nullable: true, default: () => 'NULL' })
  age4: number | null;

  @Column('double', { name: 'Age5', nullable: true, default: () => 'NULL' })
  age5: number | null;

  @Column('double', { name: 'Age6', nullable: true, default: () => 'NULL' })
  age6: number | null;

  @Column('double', { name: 'Age7', nullable: true, default: () => 'NULL' })
  age7: number | null;

  @Column('double', { name: 'Age8', nullable: true, default: () => 'NULL' })
  age8: number | null;

  @Column('double', { name: 'Age9', nullable: true, default: () => 'NULL' })
  age9: number | null;

  @Column('double', { name: 'Age10', nullable: true, default: () => 'NULL' })
  age10: number | null;
}
