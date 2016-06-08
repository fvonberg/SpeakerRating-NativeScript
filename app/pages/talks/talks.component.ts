import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {RouteParams} from "@angular/router-deprecated";
import {TalkService} from "../../shared/talks/talk.service";
import {Talk} from "../../shared/talks/talk";

@Component({
    selector: "talks",
    templateUrl: "pages/talks/talks.html",
    styleUrls: ["pages/talks/talks.common.css"]
})
export class TalksPage implements OnInit{
    talkList: Array<Talk> = [];
    conferenceId: number;

    constructor(private talkService: TalkService, private router: Router, params: RouteParams) {
        this.conferenceId = Number(params.get('conferenceId'));
    }

    ngOnInit() {
        this.talkList = this.talkService.getTalksForConference(this.conferenceId);
    }

    showRating(talk: Talk) {
        console.log("talk selected: " + talk.title);
        this.router.navigate(["Rating", { conferenceId: talk.conferenceId, talkId: talk.id }]);
    }
}