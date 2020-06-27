import { MailService } from './services/mail/mail.service';
import { MailController } from './controller/mail/mail.controller';
import { Module } from '@nestjs/common';
import { NodemailerOptions } from '@crowdlinker/nestjs-mailer';
import { NodemailerModule } from '@crowdlinker/nestjs-mailer';
import { NodemailerDrivers } from '@crowdlinker/nestjs-mailer';


@Module({
  imports: [
    NodemailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'cubamuseoserver@gmail.com',
          pass: 'cubamuseoserver2019*',
        },
      },
      defaults: {
        from: 'Hello @Crowdlinker <hello@crowdlinker.com>',
      },
    } as NodemailerOptions<NodemailerDrivers.SMTP>),
  ],
  controllers:[MailController],
  providers:[MailService]
})
export class MailModule {}
