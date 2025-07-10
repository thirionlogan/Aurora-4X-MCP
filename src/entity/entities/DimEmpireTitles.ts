import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_EmpireTitles')
export class DimEmpireTitles {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'EmpireTitleID',
  })
  empireTitleId: number;

  @Column('text', { name: 'Title', nullable: true, default: () => 'NULL' })
  title: string | null;

  @Column('numeric', { name: 'Prefix', nullable: true, default: () => 'NULL' })
  prefix: number | null;

  @Column('numeric', { name: 'Suffix', nullable: true, default: () => 'NULL' })
  suffix: number | null;

  @Column('integer', {
    name: 'MaxChance',
    nullable: true,
    default: () => 'NULL',
  })
  maxChance: number | null;
}
