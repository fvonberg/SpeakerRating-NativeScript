import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {ConferenceService} from "../../shared/conferences/conference.service";
import {Conference} from "../../shared/conferences/conference";

@Component({
    selector: "conferences",
    providers: [ConferenceService],
    templateUrl: "pages/conferences/conferences.html",
    styleUrls: ["pages/conferences/conferences.common.css"]
})
export class ConferencesPage implements OnInit{
    conferenceList: Array<Conference> = [];
    
    constructor(private conferenceService: ConferenceService, private router: Router) {}
    
    ngOnInit() {
        this.conferenceService.getAllConferences()
            .then(conferences => this.conferenceList = conferences);
    }
    
    showTalks(conference: Conference) {
        this.router.navigate(["Talks", { conferenceId: conference.id }]);
    }
}