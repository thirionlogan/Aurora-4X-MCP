import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_GameLog')
export class FctGameLog {
  @Column('integer', {
    name: 'IncrementID',
    nullable: true,
    default: () => '0',
  })
  incrementId: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number | null;

  @Column('boolean', { name: 'SMOnly', nullable: true, default: () => false })
  smOnly: boolean;

  @Column('double', { name: 'Time', nullable: true, default: () => 'NULL' })
  time: number | null;

  @Column('integer', { name: 'EventType', nullable: true, default: () => '0' })
  eventType: number | null;

  @Column('text', {
    name: 'MessageText',
    nullable: true,
    default: () => 'NULL',
  })
  messageText: string | null;

  @Column('integer', {
    name: 'SystemID',
    nullable: true,
    default: () => 'NULL',
  })
  systemId: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('integer', { name: 'IDType', nullable: true, default: () => '0' })
  idType: number | null;

  @Column('integer', {
    name: 'PopulationID',
    nullable: true,
    default: () => '0',
  })
  populationId: number | null;
}
