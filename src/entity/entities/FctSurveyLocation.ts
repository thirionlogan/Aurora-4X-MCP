import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_SurveyLocation')
export class FctSurveyLocation {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'SurveyLocationID',
  })
  surveyLocationId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', {
    name: 'SystemID',
    nullable: true,
    default: () => 'NULL',
  })
  systemId: number | null;

  @Column('integer', {
    name: 'LocationNumber',
    nullable: true,
    default: () => 'NULL',
  })
  locationNumber: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => '0' })
  ycor: number | null;
}
