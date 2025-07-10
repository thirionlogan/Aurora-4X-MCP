import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_DesignPhilosophyGroundForceDeployments')
export class DimDesignPhilosophyGroundForceDeployments {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'GroundForceDeploymentThemeID',
  })
  groundForceDeploymentThemeId: number;

  @Column('integer', {
    name: 'AutomatedTemplateID',
    nullable: true,
    default: () => '0',
  })
  automatedTemplateId: number | null;

  @Column('integer', {
    name: 'NumberRequired',
    nullable: true,
    default: () => '0',
  })
  numberRequired: number | null;

  @Column('integer', {
    name: 'PopulationValue',
    nullable: true,
    default: () => '0',
  })
  populationValue: number | null;

  @Column('integer', { name: 'Priority', nullable: true, default: () => '0' })
  priority: number | null;
}
