import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_DesignPhilosophyTechProgression')
export class DimDesignPhilosophyTechProgression {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'TechTypeID' })
  techTypeId: number;

  @Column('integer', { name: 'TechGroupID', nullable: true })
  techGroupId: number | null;

  @Column('double', { name: 'ProgressionOrder', nullable: true })
  progressionOrder: number | null;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;

  @Column('text', { name: 'Notes', nullable: true })
  notes: string | null;

  @Column('integer', {
    name: 'ResearchField',
    nullable: true,
    default: () => '0',
  })
  researchField: number | null;

  @Column('integer', {
    name: 'EstimatedRP',
    nullable: true,
    default: () => '0',
  })
  estimatedRp: number | null;

  @Column('integer', {
    name: 'TechProgressionCategoryID',
    nullable: true,
    default: () => '0',
  })
  techProgressionCategoryId: number | null;

  @Column('boolean', {
    name: 'Mandatory',
    nullable: true,
    default: () => 'FALSE',
  })
  mandatory: boolean | null;

  @Column('boolean', {
    name: 'CheckList',
    nullable: true,
    default: () => 'FALSE',
  })
  checkList: boolean | null;
}
