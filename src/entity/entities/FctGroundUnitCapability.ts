import { PrimaryColumn, Entity } from 'typeorm';

@Entity('FCT_GroundUnitCapability')
export class FctGroundUnitCapability {
  @PrimaryColumn('integer', { name: 'GroundUnitClassID' })
  groundUnitClassId: number;

  @PrimaryColumn('integer', { name: 'CapabilityID' })
  capabilityId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
