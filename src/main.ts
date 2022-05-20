import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from '@core/providers/postgresql/prisma';
import { AppConfigService } from '@config/app';
import { AppModule } from './app.module';
import { createSwagger } from './swagger/config';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';

declare const module: any;

async function createApp() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      disableErrorMessages: false,
      enableDebugMessages: true,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Shutdown prisma after close application
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.use(cookieParser()); // @!important need set cookie-parser before setup protect middleware

  return app;
}

// ------------------------------------------------

async function bootstrap() {
  const app = await createApp();

  // Set port
  const appConfig = app.get(AppConfigService);
  const port = appConfig.port;

  await createSwagger(app).listen(port, () => {
    console.log(`Application is running on: ${port}`);
  });

  // HMR
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

// ------------------------------------------------

export let viteNodeApp;

if (process.env.NODE_ENV !== 'production') {
  bootstrap();
} else {
  viteNodeApp = createApp();
}
