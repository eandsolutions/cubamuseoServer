import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from '../../services/mail/mail.service';

@Controller('mail')
export class MailController {

    constructor(private mailService: MailService){

    }

    @Post()
    send(@Body() data:any):any{
        console.log("entro al correo");
        return this.mailService.mail(data.from, data.name,data.text);
    }

    @Post('send_vpost')
    sendVpost(@Body() data:any):any{
        return this.mailService.vpost(data.image, data.nombre_d, data.email_d, data.nombre, data.email, data.mensaje);
    }
}
