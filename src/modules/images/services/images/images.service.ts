import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as sharp from 'sharp'

@Injectable()
export class ImagesService {
    imageLocation: string;
    globalImagesLocation: string;
    constructor() {
        this.imageLocation = "";
        this.globalImagesLocation = "";
        fs.readFile('src/assets/config.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            this.imageLocation = JSON.parse(jsonString).imagesLocation;
            this.globalImagesLocation = JSON.parse(jsonString).globalImagesLocation;
        })
    }

    getImageForTextInicial(name: string) {

        let dir = this.globalImagesLocation;
        dir += '/home/' + name;
        try {
            console.log(fs.existsSync(dir));
            if (fs.existsSync(dir)) {

                return this.resize(dir, 'jpg');
            }

            else {
                return this.resize('src/assets/images/Error.jpg', 'jpg');
            }
        } catch (e) {
            return this.resize('src/assets/images/Error.jpg', 'jpg');
        }
    }

    getImageColecciones() {

    }

    getImageMuestra() {

    }

    getImageEstampa() {

    }

    getImage(level: number, folder: string, name: string, type: string, folderLevel1: string) {
        let dir = this.imageLocation;
        console.log("level");
        if (type != "collection") {
            dir += '/' + type + '/' + folder + '/' + name;
        } else {
            if (level == 3)
                dir += '/' + folder + '/' + name;
            if (level == 1 || level == 2)
                dir += '/' + folderLevel1 + '/'+ folder + '/' + name;

        }
        try {
            if (fs.existsSync(dir)) {
                return this.resize(dir, 'jpg');
            } else
                return this.resize('src/assets/images/Error.jpg', 'jpg');
            
        } catch (e) {
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
