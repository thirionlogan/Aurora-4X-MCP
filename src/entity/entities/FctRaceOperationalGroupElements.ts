import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_RaceOperationalGroupElements')
export class FctRaceOperationalGroupElements {
  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'RaceID',
  })
  raceId: number;

  @PrimaryColumn('integer', {
    name: 'OperationalGroupID',
  })
  operationalGroupId: number;

  @Column('integer', { name: 'NumShips', nullable: true, default: () => '0' })
  numShips: number | null;

  @Column('integer', {
    name: 'AutomatedDesignID',
    nullable: true,
    default: () => '0',
  })
  automatedDesignId: number | null;

  @Column('boolean', {
    name: 'KeyElement',
    nullable: true,
    default: () => 'FALSE',
  })
  keyElement: boolean | null;
}
