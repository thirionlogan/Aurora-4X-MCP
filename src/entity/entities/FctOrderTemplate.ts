import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_OrderTemplate')
export class FctOrderTemplate {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'OrderTemplateID',
  })
  orderTemplateId: number;

  @Column('text', {
    name: 'TemplateName',
    nullable: true,
    default: () => 'NULL',
  })
  templateName: string | null;

  @Column('integer', {
    name: 'StartSystemID',
    nullable: true,
    default: () => 'NULL',
  })
  startSystemId: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
  raceId: number | null;
}
