import { ImagesService } from './../../services/images/images.service';
import { Controller, Get, Body, Param, Header, Res } from '@nestjs/common';


@Controller('images')
export class ImagesController {

    constructor(private  imageService:ImagesService){

    }

    @Get(':level/:folder/:name/:type/:folderLevel1')
    @Header('Content-Type', 'image/jpg')
    Image(@Res() res, @Param() param){
        return this.imageService.getImage(param.level,param.folder,param.name, param.type, param.folderLevel1).pipe(res);
    }

    @Get('imageForText/:name')
    @Header('Content-Type', 'image/jpg')
    ImageForText(@Res() res, @Param() params){
        return this.imageService.getImageForTextInicial(params.name).pipe(res);
    }
}
