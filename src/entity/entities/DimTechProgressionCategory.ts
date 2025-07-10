import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_TechProgressionCategory')
export class DimTechProgressionCategory {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'TechProgressionCategoryID',
  })
  techProgressionCategoryId: number;

  @Column('boolean', { name: 'Standard', nullable: true })
  standard: boolean | null;

  @Column('boolean', { name: 'StandardGauss', nullable: true })
  standardGauss: boolean | null;

  @Column('boolean', { name: 'StandardEnergy', nullable: true })
  standardEnergy: boolean | null;

  @Column('boolean', { name: 'StandardEnergyGauss', nullable: true })
  standardEnergyGauss: boolean | null;

  @Column('boolean', { name: 'StandardJump', nullable: true })
  standardJump: boolean | null;

  @Column('boolean', { name: 'StandardJumpGauss', nullable: true })
  standardJumpGauss: boolean | null;

  @Column('boolean', { name: 'StandardJumpShields', nullable: true })
  standardJumpShields: boolean | null;

  @Column('boolean', { name: 'StandardJumpGaussShields', nullable: true })
  standardJumpGaussShields: boolean | null;

  @Column('boolean', { name: 'Precursor', nullable: true })
  precursor: boolean | null;

  @Column('boolean', { name: 'StarSwarm', nullable: true })
  starSwarm: boolean | null;

  @Column('boolean', { name: 'Invader', nullable: true })
  invader: boolean | null;

  @Column('boolean', { name: 'Ork', nullable: true })
  ork: boolean | null;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;

  @Column('boolean', {
    name: 'StandardEnergyJump',
    nullable: true,
    default: () => '0',
  })
  standardEnergyJump: boolean | null;

  @Column('boolean', {
    name: 'StandardEnergyJumpGauss',
    nullable: true,
    default: () => '0',
  })
  standardEnergyJumpGauss: boolean | null;

  @Column('boolean', { name: 'Eldar', nullable: true, default: () => 'FALSE' })
  eldar: boolean | null;
}
