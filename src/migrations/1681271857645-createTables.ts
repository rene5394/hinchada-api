import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export class createTables1681271857645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const entitiesMetadata = queryRunner.connection.entityMetadatas;
      const driver = queryRunner.connection.driver;

      for (const entityMetadata of entitiesMetadata) {
        const repository = queryRunner.connection.getRepository(entityMetadata.target);
        const tableName = repository.metadata.tableName;
        const tableExists = await queryRunner.hasTable(tableName);
        if (!tableExists) {
          const table = Table.create(entityMetadata, driver);
          await queryRunner.createTable(table);
        }
      }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      const entitiesMetadata = queryRunner.connection.entityMetadatas;
      const driver = queryRunner.connection.driver;
      
      for (const entityMetadata of entitiesMetadata) {
        const tableName = entityMetadata.tableName;
        const tableExists = await queryRunner.hasTable(tableName);

        if (tableExists) {
          const table = Table.create(entityMetadata, driver);
          await queryRunner.dropTable(table);
        }
      }
    }

}
