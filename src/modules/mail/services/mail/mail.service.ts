import { Injectable } from '@nestjs/common';
import { Nodemailer, NodemailerDrivers } from '@crowdlinker/nestjs-mailer';

@Injectable()
export class MailService {
    constructor(
        private readonly nodemailer: Nodemailer<NodemailerDrivers.SMTP>
      ) {}
    
      async mail(to, subject, text) {
        try{
          this.nodemailer.sendMail({ to, subject, text });
          return {msg:"Success"}
        }
        catch(e){
          console.log("exeption");
          return {msg:"Error"}
        }
        
      }
}
