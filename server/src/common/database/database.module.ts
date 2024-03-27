import { Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { EnvConfigModule, ConfigService } from 'src/config';
import { DbMigrationService } from './db-migration.service';

@Module({
  imports: [
    EnvConfigModule,
    MongooseModule.forRootAsync({
      imports: [EnvConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DbMigrationService],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
