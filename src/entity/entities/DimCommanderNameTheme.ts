import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_CommanderNameTheme')
export class DimCommanderNameTheme {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'NameThemeID',
  })
  nameThemeId: number;

  @Column('text', {
    name: 'Description',
    nullable: true,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('integer', { name: 'NameOne', nullable: true, default: () => '0' })
  nameOne: number | null;

  @Column('integer', { name: 'NameTwo', nullable: true, default: () => '0' })
  nameTwo: number | null;

  @Column('integer', { name: 'NameThree', nullable: true, default: () => '0' })
  nameThree: number | null;

  @Column('integer', {
    name: 'SpecialRule',
    nullable: true,
    default: () => '0',
  })
  specialRule: number | null;

  @Column('text', { name: 'NameOneAddition', nullable: true })
  nameOneAddition: string | null;

  @Column('integer', {
    name: 'NameOneAdditionChance',
    nullable: true,
    default: () => '0',
  })
  nameOneAdditionChance: number | null;
}
