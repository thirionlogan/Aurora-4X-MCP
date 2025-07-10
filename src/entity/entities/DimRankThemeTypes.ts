import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_RankThemeTypes')
export class DimRankThemeTypes {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'ThemeID' })
  themeId: number;

  @Column('text', { name: 'ThemeName', nullable: true, default: () => 'NULL' })
  themeName: string | null;

  @Column('numeric', {
    name: 'RankDone',
    nullable: true,
    default: () => 'NULL',
  })
  rankDone: number | null;
}
