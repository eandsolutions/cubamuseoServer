import { ImagesService } from './../../services/images/images.service';
import { Controller, Get, Body, Param, Header, Res } from '@nestjs/common';


@Controller('images')
export class ImagesController {

    constructor(private  imageService:ImagesService){

    }

    @Get()
    @Header('Content-Type', 'image/jpg')
    Image(@Res() res){
        return this.imageService.getImage('','','').pipe(res);
    }
}
