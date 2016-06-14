import {Component, OnInit} from "@angular/core";
import {Router, RouteParams} from "@angular/router-deprecated";
import {Page} from "ui/page";
import {ImageHelper} from "../../shared/helpers/ImageHelper";
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

    constructor(private talkService: TalkService, private router: Router, params: RouteParams, private page: Page) {
        this.conferenceId = Number(params.get('conferenceId'));
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.talkService.getTalksForConference(this.conferenceId)
            .then(talks => this.talkList = talks);
    }

    showRating(talk: Talk) {
        this.router.navigate(["Rating", { conferenceId: talk.conferenceId, talkId: talk.id }]);
    }
    
    getImageSrcForItem(item: Talk): String {
        return ImageHelper.getImagePath(item.imageUrl);
    }
}