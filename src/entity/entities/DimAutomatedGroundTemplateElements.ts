import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_AutomatedGroundTemplateElements')
export class DimAutomatedGroundTemplateElements {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'AutomatedTemplateID' })
  automatedTemplateId: number;

  @Column('integer', { name: 'BaseAmount', nullable: true })
  baseAmount: number | null;

  @Column('integer', { name: 'DiceAmount', nullable: true })
  diceAmount: number | null;

  @Column('integer', { name: 'Multiple', nullable: true })
  multiple: number | null;

  @Column('integer', { name: 'DiceSize', nullable: true })
  diceSize: number | null;

  @Column('integer', { name: 'GUClassType', nullable: true })
  guClassType: number | null;

  @Column('boolean', { name: 'PrimaryClass', nullable: true })
  primaryClass: boolean | null;

  @Column('text', { name: 'ClassName', nullable: true })
  className: string | null;

  @Column('boolean', { name: 'HQ', nullable: true, default: () => 'FALSE' })
  hq: boolean | null;

  @Column('boolean', {
    name: 'Logistics',
    nullable: true,
    default: () => 'FALSE',
  })
  logistics: boolean | null;

  @Column('boolean', {
    name: 'Construction',
    nullable: true,
    default: () => '0',
  })
  construction: boolean | null;
}
