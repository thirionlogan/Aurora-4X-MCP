import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_MedalCondition')
export class DimMedalCondition {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'MedalConditionID',
  })
  medalConditionId: number;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;

  @Column('integer', {
    name: 'MeasurementType',
    nullable: true,
    default: () => '0',
  })
  measurementType: number | null;

  @Column('integer', {
    name: 'AmountRequired',
    nullable: true,
    default: () => '1',
  })
  amountRequired: number | null;

  @Column('integer', {
    name: 'DisplayOrder',
    nullable: true,
    default: () => '0',
  })
  displayOrder: number | null;
}
