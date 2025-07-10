import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_CommanderNames')
export class DimCommanderNames {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'NameThemeID' })
  nameThemeId: number;

  @Column('boolean', {
    name: 'FirstName',
    nullable: true,
    default: () => 'NULL',
  })
  firstName: boolean | null;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('boolean', { name: 'Female', nullable: true, default: () => '0' })
  female: boolean | null;

  @Column('boolean', { name: 'ThirdName', nullable: true })
  thirdName: boolean | null;

  @Column('boolean', { name: 'FamilyName', nullable: true })
  familyName: boolean | null;
}
