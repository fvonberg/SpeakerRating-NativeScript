import {Injectable} from "@angular/core";
import {FileReader} from "../helpers/fileReader";
import {Conference} from "./conference";

@Injectable()
export class ConferenceService {
    
    constructor() {}

    getAllConferences(): Promise<Array<Conference>> {
        return new Promise<Array<Conference>>((resolve, reject) => {
           try {
               FileReader.readJSON("/data/conferencesData.json")
                .then(content => {
                    let json = <any> content;
                    let allConferences: Array<Conference> = [];
                    json.data.forEach(element => {
                        allConferences.push(new Conference(element.id, element.imageUrl, element.title, element.description));
                    });
                    resolve(allConferences);
                })
           } catch (err) {
               reject(err);
           }
        });
    }
}