import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_CompanyNames')
export class DimCompanyNames {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'ID' })
  id: number;

  @Column('varchar', {
    name: 'CompanySuffix',
    nullable: true,
    length: 255,
    default: () => 'NULL',
  })
  companySuffix: string | null;

  @Column('integer', {
    name: 'CompanyType',
    nullable: true,
    default: () => '1',
  })
  companyType: number | null;
}
