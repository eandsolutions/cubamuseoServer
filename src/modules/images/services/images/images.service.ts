import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as sharp from 'sharp'

@Injectable()
export class ImagesService {
    imageLocation: string;

    constructor() {
        this.imageLocation = "";
        fs.readFile('src/assets/config.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            this.imageLocation = JSON.parse(jsonString).imagesLocation;
        })
    }

    getImageForTextInicial() {

    }

    getImageColecciones() {

    }

    getImageMuestra() {

    }

    getImageEstampa() {

    }

    getImage(type: string, folder: string, name: string) {
        let dir = this.imageLocation;
        if (type != "Colecciones") {
            dir += '/' + type + '/' + folder + '/' + name;
        }
        try {
            return this.resize('src/assets/images/Error.jpg', 'jpg');
        }catch(e){
            return this.resize('src/assets/images/Error.jpg', 'jpg');
        }
        
    }

    resize(path, format) {
        let readStream = fs.createReadStream(path);
        let transform = sharp();

        if (format) {
            transform = transform.toFormat(format);
        }

        return readStream.pipe(transform);
    }

}
