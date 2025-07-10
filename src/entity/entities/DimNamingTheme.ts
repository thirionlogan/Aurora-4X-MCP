import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_NamingTheme')
export class DimNamingTheme {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'NameThemeID' })
  nameThemeId: number;

  @Column('varchar', {
    name: 'Name',
    nullable: true,
    length: 255,
    default: () => 'NULL',
  })
  name: string | null;
}
