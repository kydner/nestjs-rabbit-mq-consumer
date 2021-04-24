import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RabbitMQQueueEnum } from 'src/rabbit-mq-enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://qnfrqfkg:F9hmByxPxiwDrvCiknuFNrVFo-rWNLNd@cougar.rmq.cloudamqp.com/qnfrqfkg',
      ],
      queue: RabbitMQQueueEnum.RQ_EMAIL,
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1,
    },
  });
  await app.listenAsync();
}
bootstrap();
