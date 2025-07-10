import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_LineNames')
export class DimLineNames {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'LineNameID' })
  lineNameId: number;

  @Column('varchar', {
    name: 'LineNames',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  lineNames: string | null;
}
