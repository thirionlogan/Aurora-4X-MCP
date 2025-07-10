import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_GroundUnitFormationTemplate')
export class FctGroundUnitFormationTemplate {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('text', { name: 'Abbreviation', nullable: true })
  abbreviation: string | null;

  @PrimaryColumn('integer', { name: 'TemplateID' })
  templateId: number;

  @Column('integer', {
    name: 'RequiredRank',
    nullable: true,
    default: () => '0',
  })
  requiredRank: number | null;

  @PrimaryColumn('integer', {
    name: 'AutomatedTemplateID',
  })
  automatedTemplateId: number;

  @Column('integer', {
    name: 'FormationsTrained',
    nullable: true,
    default: () => '0',
  })
  formationsTrained: number | null;
}
