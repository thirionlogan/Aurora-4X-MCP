import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_GroundUnitFormationElementTemplates')
export class FctGroundUnitFormationElementTemplates {
  @PrimaryColumn('integer', { name: 'FormationTemplateID' })
  formationTemplateId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ClassID' })
  classId: number;

  @Column('integer', { name: 'Units', nullable: true })
  units: number | null;
}
