import { Injectable } from '@nestjs/common';
import { Nodemailer, NodemailerDrivers } from '@crowdlinker/nestjs-mailer';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    //private readonly nodemailer: Nodemailer<NodemailerDrivers.SMTP>
    private readonly mailerService: MailerService
    ) { }

  async mail(from, subject, text) {
    /* const data = await this.nodemailer.sendMail({ to, subject, text });
    return data */
    return this
      .mailerService
      .sendMail({
        to: 'inf@cubamuseo.net', // list of receivers
        from: from, // sender address
        subject: subject, // Subject line
        text: text, // plaintext body
        html: '<b>Message from '+subject+'</b><br><br>'+text, // HTML body content
      })
      .then(() => {return {mesg:'success'}})
      .catch((err) => {return {mesg:'error'+ err}});


  }

  async vpost(image, to, email_t, from, email_f, text) {
    /* const data = await this.nodemailer.sendMail({ to, subject, text });
    return data */
    console.log("entro al correo service")
    return this
      .mailerService
      .sendMail({
        to: email_t, // list of receivers
        from: email_f, // sender address
        text: text, // plaintext body
        html: '<b> Message to '+to+'</b><br><br> Message from '+from  +'</b><br><br>'+text + image, // HTML body content
      })
      .then(() => {return {mesg:'success'}})
      .catch((err) => {return {mesg:'error'+ err}});


  }
}
