import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_AlienGroundUnitClass')
export class FctAlienGroundUnitClass {
  @PrimaryColumn('integer', { name: 'AlienRaceID' })
  alienRaceId: number;

  @PrimaryColumn('integer', { name: 'ActualUnitClassID' })
  actualUnitClassId: number;

  @PrimaryColumn('integer', { name: 'ViewRaceID' })
  viewRaceId: number | null;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('integer', { name: 'Hits', nullable: true, default: () => '0' })
  hits: number | null;

  @Column('integer', { name: 'Penetrated', nullable: true, default: () => '0' })
  penetrated: number | null;

  @Column('integer', { name: 'Destroyed', nullable: true, default: () => '0' })
  destroyed: number | null;

  @PrimaryColumn('integer', { name: 'AlienGroundUnitClassID' })
  alienGroundUnitClassId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('boolean', {
    name: 'WeaponsKnown',
    nullable: true,
    default: () => 'FALSE',
  })
  weaponsKnown: boolean | null;
}
