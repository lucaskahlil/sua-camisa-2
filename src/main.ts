import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger
  const config = new DocumentBuilder()
    .setTitle('SuaCamisa')
    .setDescription('EComerce de loja de camisa')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('product')
    .addTag('user')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333); //Alterar o app listen para porta 3333 para nao ter conflito com front end
}
bootstrap();