import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_SystemAbundance')
export class DimSystemAbundance {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'AbundanceID',
  })
  abundanceId: number;

  @Column('text', {
    name: 'Description',
    nullable: true,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('integer', {
    name: 'MaxChance',
    nullable: true,
    default: () => 'NULL',
  })
  maxChance: number | null;

  @Column('integer', {
    name: 'Modifier',
    nullable: true,
    default: () => 'NULL',
  })
  modifier: number | null;
}
