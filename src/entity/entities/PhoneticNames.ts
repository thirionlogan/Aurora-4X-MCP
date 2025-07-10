import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PhoneticNames')
export class PhoneticNames {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'PhoneticID',
  })
  phoneticId: number;

  @Column('varchar', {
    name: 'PhoneticName',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  phoneticName: string | null;
}
