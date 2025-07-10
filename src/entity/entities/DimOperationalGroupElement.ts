import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_OperationalGroupElement')
export class DimOperationalGroupElement {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'AutomatedDesignID' })
  automatedDesignId: number;

  @Column('integer', { name: 'NumShips', nullable: true })
  numShips: number | null;

  @Column('boolean', {
    name: 'KeyElement',
    nullable: true,
    default: () => 'false',
  })
  keyElement: boolean | null;

  @Column('integer', { name: 'OperationalGroupID', nullable: true })
  operationalGroupId: number | null;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;

  @Column('integer', {
    name: 'RandomNumShips',
    nullable: true,
    default: () => '0',
  })
  randomNumShips: number | null;

  @Column('integer', {
    name: 'ChanceOfElement',
    nullable: true,
    default: () => '100',
  })
  chanceOfElement: number | null;
}
