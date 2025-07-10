import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_MiningNames')
export class DimMiningNames {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'MNID' })
  mnid: number;

  @Column('varchar', {
    name: 'MiningName',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  miningName: string | null;
}
