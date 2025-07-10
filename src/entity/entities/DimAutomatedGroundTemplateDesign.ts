import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_AutomatedGroundTemplateDesign')
export class DimAutomatedGroundTemplateDesign {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'AutomatedTemplateID',
  })
  automatedTemplateId: number;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('text', { name: 'Abbreviation', nullable: true })
  abbreviation: string | null;

  @Column('double', {
    name: 'StandardProportion',
    nullable: true,
    default: () => '0',
  })
  standardProportion: number | null;

  @Column('integer', { name: 'Priority', nullable: true, default: () => '0' })
  priority: number | null;

  @Column('integer', { name: 'SpecialNPR', nullable: true, default: () => '0' })
  specialNpr: number | null;

  @Column('integer', {
    name: 'FieldPosition',
    nullable: true,
    default: () => '0',
  })
  fieldPosition: number | null;

  @Column('integer', {
    name: 'PrimaryFunction',
    nullable: true,
    default: () => '0',
  })
  primaryFunction: number | null;

  @Column('integer', {
    name: 'RequiredTechID',
    nullable: true,
    default: () => '0',
  })
  requiredTechId: number | null;
}
