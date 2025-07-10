import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('DIM_Constellation')
export class DimConstellation {
  @PrimaryColumn('text', { name: 'Constellation' })
  constellation: string;

  @Column('text', { name: 'MaxFlamsteed', nullable: true })
  maxFlamsteed: string | null;

  @Column('text', { name: 'Alpha', nullable: true })
  alpha: string | null;

  @Column('text', { name: 'Beta', nullable: true })
  beta: string | null;

  @Column('text', { name: 'Gamma', nullable: true })
  gamma: string | null;

  @Column('text', { name: 'Delta', nullable: true })
  delta: string | null;

  @Column('text', { name: 'Epsilon', nullable: true })
  epsilon: string | null;

  @Column('text', { name: 'Zeta', nullable: true })
  zeta: string | null;

  @Column('text', { name: 'Eta', nullable: true })
  eta: string | null;

  @Column('text', { name: 'Theta', nullable: true })
  theta: string | null;

  @Column('text', { name: 'Iota', nullable: true })
  iota: string | null;

  @Column('text', { name: 'Kappa', nullable: true })
  kappa: string | null;

  @Column('text', { name: 'Lambda', nullable: true })
  lambda: string | null;

  @Column('text', { name: 'Mu', nullable: true })
  mu: string | null;

  @Column('text', { name: 'Nu', nullable: true })
  nu: string | null;

  @Column('text', { name: 'Xi', nullable: true })
  xi: string | null;

  @Column('text', { name: 'Omicron', nullable: true })
  omicron: string | null;

  @Column('text', { name: 'Pi', nullable: true })
  pi: string | null;

  @Column('text', { name: 'Rho', nullable: true })
  rho: string | null;

  @Column('text', { name: 'Sigma', nullable: true })
  sigma: string | null;

  @Column('text', { name: 'Tau', nullable: true })
  tau: string | null;

  @Column('text', { name: 'Upsilon', nullable: true })
  upsilon: string | null;

  @Column('text', { name: 'Phi', nullable: true })
  phi: string | null;

  @Column('text', { name: 'Chi', nullable: true })
  chi: string | null;

  @Column('text', { name: 'Psi', nullable: true })
  psi: string | null;

  @Column('text', { name: 'Omega', nullable: true })
  omega: string | null;
}
