import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_AetherRift')
export class FctAetherRift {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'SystemID' })
  systemId: number;

  @PrimaryGeneratedColumn({ type: 'integer', name: 'GameID' })
  gameId: number;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => '0' })
  ycor: number | null;

  @Column('double', { name: 'Diameter', nullable: true, default: () => '0' })
  diameter: number | null;
}
