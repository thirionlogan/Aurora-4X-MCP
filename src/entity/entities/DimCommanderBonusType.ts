import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_CommanderBonusType')
export class DimCommanderBonusType {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'BonusID' })
  bonusId: number;

  @Column('text', {
    name: 'Description',
    nullable: true,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('numeric', {
    name: 'Percentage',
    nullable: true,
    default: () => 'NULL',
  })
  percentage: number | null;

  @Column('numeric', { name: 'Naval', nullable: true, default: () => 'NULL' })
  naval: number | null;

  @Column('numeric', { name: 'Ground', nullable: true, default: () => 'NULL' })
  ground: number | null;

  @Column('numeric', {
    name: 'Civilian',
    nullable: true,
    default: () => 'NULL',
  })
  civilian: number | null;

  @Column('numeric', {
    name: 'Scientist',
    nullable: true,
    default: () => 'NULL',
  })
  scientist: number | null;

  @Column('integer', { name: 'DisplayOrder', nullable: true })
  displayOrder: number | null;

  @Column('text', { name: 'BonusAbbrev', nullable: true })
  bonusAbbrev: string | null;

  @Column('double', {
    name: 'MaximumBonus',
    nullable: true,
    default: () => '0',
  })
  maximumBonus: number | null;
}
