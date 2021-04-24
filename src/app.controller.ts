import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  RmqContext,
  Ctx,
  Payload,
} from '@nestjs/microservices';
import { RabbitMQPatternEnum } from 'src/rabbit-mq-enum';
@Controller()
export class AppController {
  @MessagePattern(RabbitMQPatternEnum.RQP_SEND_EMAIL)
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    console.log('data', data);
    channel.ack(orginalMessage);
  }
}
