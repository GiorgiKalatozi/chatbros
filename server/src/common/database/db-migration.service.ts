import { Injectable, OnModuleInit } from '@nestjs/common';
import { config, database, up } from 'migrate-mongo';
import { ConfigService } from 'src/config';

@Injectable()
export class DbMigrationService implements OnModuleInit {
  private readonly dbMigrationConfig: Partial<config.Config> = {
    mongodb: {
      databaseName: this.configService.get('DB_NAME'),
      url: this.configService.get('MONGODB_URI'),
    },
    migrationsDir: `${__dirname}/../../migrations`,
    changelogCollectionName: 'changelog',
    migrationFileExtension: '.js',
  };

  constructor(private readonly configService: ConfigService) {}

  public async onModuleInit() {
    config.set(this.dbMigrationConfig);
    const { db, client } = await database.connect();
    await up(db, client);
  }
}
