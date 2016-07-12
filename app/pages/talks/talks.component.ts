import {Component, OnInit, NgZone} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
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

    constructor(private talkService: TalkService, private _router: Router, private _route: ActivatedRoute, private _page: Page, private _zone: NgZone) {
        this._page.actionBarHidden = true;
        this._zone.run(() => {
            this._route.params.subscribe(params => {
                let conferenceId = +params["conferenceId"];
                console.log(conferenceId);
                this.talkService.getTalksForConference(conferenceId)
                    .then(talks => this.talkList = talks);
            });
        });
    }

    ngOnInit() {
        // does not work with this setup
    }

    showRating(talk: Talk) {
        this._router.navigate(["/rating", talk.conferenceId, talk.id]);
    }
    
    getImageSrcForItem(item: Talk): String {
        return ImageHelper.getImagePath(item.imageUrl);
    }
}