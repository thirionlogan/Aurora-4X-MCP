import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_Squadron')
export class FctSquadron {
  @PrimaryColumn('integer', { name: 'SquadronID' })
  squadronId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('text', { name: 'SquadronName', nullable: true })
  squadronName: string | null;

  @Column('integer', { name: 'ParentShipID' })
  parentShipId: number;
}
