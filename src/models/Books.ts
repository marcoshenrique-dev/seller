import {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   CreateDateColumn,
   UpdateDateColumn,
} from 'typeorm';

@Entity('books')
class Books {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   price: number;

   @Column()
   description: string;

   @Column()
   image: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}

export default Books;
