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

    @Get('imageForCategory/:name/:type')
    @Header('Content-Type', 'image/jpg')
    ImageForCategory(@Res() res, @Param() param){
        return this.imageService.getImageForCategoies(param.name, param.type).pipe(res);
    }

    @Get('imageForText/:name')
    @Header('Content-Type', 'image/jpg')
    ImageForText(@Res() res, @Param() params){
        return this.imageService.getImageForTextInicial(params.name).pipe(res);
    }

    @Get('imageInAllDirectory/:name')
    @Header('Content-Type', 'image/jpg')
    ImageInAllDirectory(@Res() res, @Param() params){
        return this.imageService.findImage(params.name).pipe(res);
    }

    @Get('imageNotice/:folder/:name')
    @Header('Content-Type', 'image/jpg')
    ImageInNotice(@Res() res, @Param() params){
        return this.imageService.findInNotice(params.folder,params.name).pipe(res);
    }
}
