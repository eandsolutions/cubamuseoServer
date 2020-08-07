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
            user: 'inf@cubamuseo.net',
            pass: 'T3rr0r8080',
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
