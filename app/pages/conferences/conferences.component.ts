import {Component, OnInit, NgZone} from "@angular/core";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {ImageHelper} from "../../shared/helpers/ImageHelper";
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
    
    constructor(private conferenceService: ConferenceService, private _router: Router, private _page: Page, private _zone: NgZone) {
        this._zone.run(() => {
            this._page.actionBarHidden = true;
            this.conferenceService.getAllConferences()
                .then(conferences => this.conferenceList = conferences);
        })
    }
    
    ngOnInit() {
        // does not work with this setup
    }
    
    showTalks(conference: Conference) {
        this._router.navigate(["/talks", conference.id]);
    }
    
    getImageSrcForItem(item: Conference): string {
        return ImageHelper.getImagePath(item.imageUrl);
    }
}