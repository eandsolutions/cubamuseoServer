import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import sharp from 'sharp'
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

    getImageForTextInicial(name: string, res) {

        let dir = this.globalImagesLocation;
        dir += '/home/' + name;
        try {
            console.log(fs.existsSync(dir));
            if (fs.existsSync(dir)) {

                return this.returnImage(dir, res);
            }

            else {
                return this.returnImage('src/assets/images/Error.png',res);
            }
        } catch (e) {
            return this.returnImage('src/assets/images/Error.png', res);
        }
    }

    getImageForCategoies(name: string, type: string, res) {

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

                return this.returnImage(dir, res);
            }

            else {
                return this.returnImage('src/assets/images/Error.png', res);
            }
        } catch (e) {
            return this.returnImage('src/assets/images/Error.png', res);
        }
    }

    getImage(level: number, folder: string, name: string, type: string, folderLevel1: string, res) {
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
                return this.returnImage(dir, res);
            } else
                return this.returnImage('src/assets/images/Error.png',res);

        } catch (e) {
            return this.returnImage('src/assets/images/Error.png',res);
        }

    }

    findImage(name, res) {
        const dir = this.imageLocation;
        const resp = this.fromDir(dir, name);
        if (fs.existsSync(resp))
            return this.returnImage(resp, res);
    }

    findInNotice(folder:string, name: string, res:any) {
        const dir = this.imageLocation + '/Noticias/' + folder + '/' + name;
        console.log(dir)
        try {
            if (fs.existsSync(dir)) {
                return this.returnImage(dir, res);
            } else
                return this.returnImage('src/assets/images/Error.png',res);

        } catch (e) {
            return this.returnImage('src/assets/images/Error.png',res);
        }

    }

    findInSites(folder:string, name:string, res:any) {
        const dir = this.imageLocation + '/Sitios-Relacionados/' + folder + '/' + name;
        try {
            if (fs.existsSync(dir)) {
                return this.returnImage(dir, res);
            } else
                return this.returnImage('src/assets/images/Error.png',res);

        } catch (e) {
            return this.returnImage('src/assets/images/Error.png',res);
        }
    }

    private returnImage(dir: string, res: any) {
        console.log(dir)
        //const dir = this.uploadFolder + '/' + id + '/' + name;
        fs.readFile(dir, function (err, data) {
            if (err) throw err; // Fail if the file can't be read.            
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data); // Send the file data to the browser.        
        });
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
