import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_HullNumber')
export class FctHullNumber {
  @PrimaryColumn('integer', {
    name: 'HullTypeID',
  })
  hullTypeId: number;

  @Column('integer', { name: 'HullCount', nullable: true, default: () => '0' })
  hullCount: number | null;

  @PrimaryColumn('integer', {
    name: 'RaceID',
  })
  raceId: number;

  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;
}
