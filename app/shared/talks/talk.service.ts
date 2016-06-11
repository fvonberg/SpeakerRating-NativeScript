import {Injectable} from "@angular/core";
import {FileReader} from "../helpers/fileReader";
import {Talk} from "./talk";

@Injectable()
export class TalkService {

    constructor() {}

    getTalksForConference(conferenceId: number): Promise<Array<Talk>> {
        return new Promise<Array<Talk>>((resolve, reject) => {
           try {
               FileReader.readJSON("/data/talksData.json")
                .then(content => {
                    let json = <any> content;
                    let allTalks: Array<Talk> = [];
                    
                    for (var index = 0; index < json.data.length; index++) {
                        var conferenceParent = json.data[index];
                        if(conferenceParent.conferenceId === conferenceId) {
                            conferenceParent.talks.forEach(talk => {
                                 allTalks.push(new Talk(talk.id, talk.conferenceId, talk.imageUrl, talk.title, talk.description, talk.author, talk.presentationDate));
                            });
                            break;
                        }
                    }
                    
                    resolve(allTalks);
                })
           } catch (err) {
               reject(err);
           }
        });
    }
    
    getTalk(conferenceId: number, talkId: number): Promise<Talk> {
        return new Promise<Talk>((resolve, reject) => {
           try {
               FileReader.readJSON("/data/talksData.json")
                .then(content => {
                    let json = <any> content;
                    let talk: Talk;
                    
                    for (var index = 0; index < json.data.length; index++) {
                        var conferenceParent = json.data[index];
                        if(conferenceParent.conferenceId === conferenceId) {
                            conferenceParent.talks.forEach(conferenceTalk => {
                                if(conferenceTalk.id === talkId) {
                                  talk = new Talk(conferenceTalk.id, conferenceTalk.conferenceId, conferenceTalk.imageUrl, conferenceTalk.title, conferenceTalk.description, conferenceTalk.author, conferenceTalk.presentationDate);
                                }
                            });
                            break;
                        }
                    }
                    
                    if(talk === undefined) {
                        reject();
                    }
                    
                    resolve(talk);
                })
           } catch (err) {
               reject(err);
           }
        });
    }
}