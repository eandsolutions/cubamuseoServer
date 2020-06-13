import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from '../../services/mail/mail.service';

@Controller('mail')
export class MailController {

    constructor(private mailService: MailService){

    }

    @Post()
    send(@Body() data:any):any{
        console.log("entro al correo");
        return this.mailService.mail(data.email, data.name,data.text);
    }
}
