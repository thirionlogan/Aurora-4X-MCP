import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_MapLabel')
export class FctMapLabel {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @Column('text', { name: 'Caption', nullable: true, default: () => 'NULL' })
  caption: string | null;

  @Column('integer', { name: 'Colour', nullable: true, default: () => 'NULL' })
  colour: number | null;

  @Column('integer', {
    name: 'FontSize',
    nullable: true,
    default: () => 'NULL',
  })
  fontSize: number | null;

  @Column('boolean', {
    name: 'FontBold',
    nullable: true,
    default: () => 'NULL',
  })
  fontBold: boolean | null;

  @Column('boolean', {
    name: 'FontItalic',
    nullable: true,
    default: () => 'NULL',
  })
  fontItalic: boolean | null;

  @Column('text', { name: 'FontName', nullable: true, default: () => 'NULL' })
  fontName: string | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;
}
