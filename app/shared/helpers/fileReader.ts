import * as fs from 'file-system';

var documents = fs.knownFolders.currentApp();

export class FileReader {
    static readJSON(path: string) {
        let jsonFile = documents.getFile(path);
        return new Promise<Object>((resolve, reject) => {
            try {

                jsonFile.readText().then((content: string) => {
                    let data = <Array<Object>>JSON.parse(content);
                    resolve(data);   
                });

            }
            catch (err) {
                reject(err);
            }
        });
    }   
}