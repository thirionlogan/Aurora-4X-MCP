import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_OperationalGroupProgression')
export class DimOperationalGroupProgression {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'OpGroupProgressionType' })
  opGroupProgressionType: number;

  @Column('integer', { name: 'ProgressionOrder', nullable: true })
  progressionOrder: number | null;

  @Column('integer', { name: 'NumGroups', nullable: true })
  numGroups: number | null;

  @Column('integer', {
    name: 'CountGroupType',
    nullable: true,
    default: () => '0',
  })
  countGroupType: number | null;

  @Column('integer', {
    name: 'OperationalGroupID',
    nullable: true,
    default: () => '1',
  })
  operationalGroupId: number | null;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;
}
