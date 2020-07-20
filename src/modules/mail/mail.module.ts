import { MailService } from './services/mail/mail.service';
import { MailController } from './controller/mail/mail.controller';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: 'cubamuseoserver@gmail.com',
            pass: 'cubamuseoserver2019*',
          },
        },
        defaults: {
          from: 'Message Form Cubamuseo.net',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule { }
