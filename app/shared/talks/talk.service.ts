import {Injectable} from "@angular/core";
import {Talk} from "./talk";

@Injectable()
export class TalkService {

    private allTalks: Array<Talk> = [];

    constructor() {
        // Needs correct implementation
        let talk01 = new Talk(0, 0, "https://placekitten.com/g/900/400", "Talk 1", "Lorem ipsum", "Frederik von Berg");
        let talk02 = new Talk(1, 0, "", "Talk 2", "Lorem ipsum", "Dragan Zuvic");
        let talk03 = new Talk(2, 0, "", "Talk 3", "Lorem ipsum", "Philipp Burgmer");

        this.allTalks.push(talk01);
        this.allTalks.push(talk02);
        this.allTalks.push(talk03);
    }

    getTalksForConference(conferenceId: number): Array<Talk> {
        // return correct values
        return this.allTalks;
    }
    
    loadTalk(conferenceId: number, talkId: number): Talk {
        // Needs correct implementation
        return this.allTalks[talkId];
    }
}