import {Component, OnInit} from "@angular/core";
import {Router, RouteParams} from "@angular/router-deprecated";
import {TextView} from "ui/text-view";
import {TalkService} from "../../shared/talks/talk.service";
import {Talk} from "../../shared/talks/talk";
import {Rating} from "../../shared/rating/rating";

@Component({
    selector: "rating",
    templateUrl: "pages/rating/rating.html",
    styleUrls: ["pages/rating/rating.common.css"]
})
export class RatingPage {

    customerRating: string;
    talk: Talk;
    starStrings: Array<string> = ["&#xf005;", "&#xf005;", "&#xf005;", "&#xf005;", "&#xf005;"];

    constructor(private router: Router, private routeParams: RouteParams, private talkService: TalkService) {
        let conferenceId = Number(routeParams.get("conferenceId"));
        let talkId = Number(routeParams.get("talkId"));
        console.log(conferenceId + "   " + talkId);
        this.talk = this.talkService.loadTalk(conferenceId, talkId);
    }
    
    starSelected(starId: number) {
        console.log("update stars");
        // update rating and view
    }
    
    saveInput() {
        // TODO:
        console.log("save input");
    }
}
