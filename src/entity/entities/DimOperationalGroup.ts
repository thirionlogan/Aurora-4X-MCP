import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('DIM_OperationalGroup')
export class DimOperationalGroup {
  @PrimaryColumn('text', { name: 'Description' })
  description: string;

  @Column('integer', {
    name: 'TechRequirementA',
    nullable: true,
    default: () => '0',
  })
  techRequirementA: number | null;

  @Column('integer', { name: 'PrimaryStandingOrder', nullable: true })
  primaryStandingOrder: number | null;

  @Column('integer', { name: 'SecondaryStandingOrder', nullable: true })
  secondaryStandingOrder: number | null;

  @Column('integer', {
    name: 'MainFunction',
    nullable: true,
    default: () => '0',
  })
  mainFunction: number | null;

  @Column('boolean', { name: 'AvoidDanger', nullable: true })
  avoidDanger: boolean | null;

  @Column('integer', { name: 'OperationalGroupID', nullable: true })
  operationalGroupId: number | null;

  @Column('boolean', {
    name: 'ChangeStandingToFuel',
    nullable: true,
    default: () => 'FALSE',
  })
  changeStandingToFuel: boolean | null;

  @Column('integer', {
    name: 'MainFunctionPriority',
    nullable: true,
    default: () => '0',
  })
  mainFunctionPriority: number | null;

  @Column('integer', {
    name: 'MobileMilitary',
    nullable: true,
    default: () => '0',
  })
  mobileMilitary: number | null;

  @Column('boolean', {
    name: 'OffensiveForce',
    nullable: true,
    default: () => 'FALSE',
  })
  offensiveForce: boolean | null;

  @Column('boolean', {
    name: 'StaticForce',
    nullable: true,
    default: () => 'FALSE',
  })
  staticForce: boolean | null;
}
