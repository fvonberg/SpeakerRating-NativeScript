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
export class RatingPage implements OnInit {

    customerRating: string;
    talk: Talk;
    starStrings: Array<string> = ["&#xf005;", "&#xf005;", "&#xf005;", "&#xf005;", "&#xf005;"];
    private conferenceId: number;
    private talkId: number;
    buttonActive: Array<boolean> = [true, true, true, true, true];

    constructor(private router: Router, private routeParams: RouteParams, private talkService: TalkService) {
        this.conferenceId = Number(routeParams.get("conferenceId"));
        this.talkId = Number(routeParams.get("talkId"));
    }
    
    ngOnInit() {
       this.talkService.getTalk(this.conferenceId, this.talkId)
            .then(talk => {
                this.talk = talk;
            });
       
    }
    
    starSelected(starId: number) {
        for (var index = 0; index < this.buttonActive.length; index++) {
            if( index <= starId ) {
                this.buttonActive[index] = true;
            } else {
                this.buttonActive[index] = false;
            }
        }
    }
    
    saveInput() {
        console.log("save input");
    }
}
