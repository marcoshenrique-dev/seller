import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBooks1604782966135 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
      await queryRunner.createTable(
         new Table({
            name: 'books',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
               },
               {
                  name: 'name',
                  type: 'varchar',
                  isNullable: false,
               },
               {
                  name: 'price',
                  type: 'numeric',
                  isNullable: false,
               },
               {
                  name: 'description',
                  type: 'varchar',
                  isNullable: true,
               },

               {
                  name: 'image',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
               {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ],
         }),
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('books');
   }
}
