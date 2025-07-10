import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FGNicknames')
export class FgNicknames {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'NicknameID',
  })
  nicknameId: number;

  @Column('varchar', {
    name: 'Nickname',
    nullable: true,
    length: 22,
    default: () => 'NULL',
  })
  nickname: string | null;
}
