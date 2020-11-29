import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as sharp from 'sharp'
import * as path from 'path'

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
                return this.resize('src/assets/images/Error.png', 'png');
            }
        } catch (e) {
            return this.resize('src/assets/images/Error.png', 'png');
        }
    }

    getImageForCategoies(name: string, type: string) {

        let dir = this.globalImagesLocation;

        if (type === 'collection') {
            dir += '/menu/' + name;
        } else
            if (type == 'samples') {
                dir += '/menuestampas/' + name
            } else
                if (type == 'stamps') {
                    dir += '/menuestampas/' + name
                } else
                    if (type == 'postcards') {
                        dir += '/menupostales/' + name
                    } else
                        if (type == 'store')
                            dir += '/menutienda/' + name;
        try {
            console.log(dir);
            if (fs.existsSync(dir)) {

                return this.resize(dir, 'jpg');
            }

            else {
                return this.resize('src/assets/images/Error.png', 'png');
            }
        } catch (e) {
            return this.resize('src/assets/images/Error.png', 'png');
        }
    }

    getImage(level: number, folder: string, name: string, type: string, folderLevel1: string) {
        let dir = this.imageLocation;
        if (type == "collection") {
            if (level == 3)
                dir += '/' + folder + '/' + name;
            if (level == 1 || level == 2)
                dir += '/' + folderLevel1 + '/' + folder + '/' + name;
        }
        if (type == 'samples') {
            dir += '/Muestras/' + folder + '/' + name
        } else
            if (type == 'stamps') {
                dir += '/Estampas/' + folder + '/' + name
            } else
                if (type == 'postcards') {
                    dir += '/V-Posts/' + folder + '/' + name
                } else
                    if (type == 'store')
                        dir += '/Tienda' + '/' + folder + '/' + name;
        console.log(dir)
        try {
            if (fs.existsSync(dir)) {
                return this.resize(dir, 'jpg');
            } else
                return this.resize('src/assets/images/Error.png', 'png');

        } catch (e) {
            return this.resize('src/assets/images/Error.png', 'png');
        }

    }

    findImage(name) {
        const directory = this.imageLocation;
        const res = this.fromDir(directory, name);
        return this.resize(res, 'png');
    }

    findInNotice(folder, name) {
        const directory = this.imageLocation + '/' + folder + '/';
        if (fs.existsSync(directory)) {
            return this.resize(directory + name, 'png');
        } else
            return this.resize('src/assets/images/Error.png', 'png');
        
    }

    private fromDir(startPath, filter) {

        //console.log('Starting from dir '+startPath+'/');
        let res = 'src/assets/images/Error.png';
        if (!fs.existsSync(startPath)) {
            console.log("no dir ", startPath);
            return;
        }

        const files = fs.readdirSync(startPath);
        for (let i = 0; i < files.length; i++) {
            const filename = path.join(startPath, files[i]);
            const stat = fs.lstatSync(filename);
            if (stat.isDirectory()) {
                res = this.fromDir(filename, filter); //recurse
                if (res != 'src/assets/images/Error.png')
                    break
            }
            else if (filename.indexOf(filter) >= 0) {
                //console.log('-- found: ', filename);
                res = filename;
                break;
            }
        };

        return res;
    };


    resize(path, format) {
        const readStream = fs.createReadStream(path);
        let transform = sharp();

        if (format) {
            transform = transform.toFormat(format);
        }

        return readStream.pipe(transform);
    }

}
