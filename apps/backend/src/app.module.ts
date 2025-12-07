import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // __dirname is apps/backend/dist at runtime; back out to apps/frontend/dist
      rootPath: join(__dirname, '..', '..', 'frontend', 'dist'),
      exclude: ['/api*'], // keep API routes from being intercepted by static assets
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
