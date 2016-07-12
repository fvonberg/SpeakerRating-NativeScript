import {Component, OnInit, NgZone} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Page} from "ui/page";
import * as Dialog from "ui/dialogs";
import {ImageHelper} from "../../shared/helpers/ImageHelper";
import {TalkService} from "../../shared/talks/talk.service";
import {Talk} from "../../shared/talks/talk";
import {CustomActionBar} from "../customActionBar/customActionBar.component";

@Component({
    selector: "rating",
    directives: [CustomActionBar],
    templateUrl: "pages/rating/rating.html",
    styleUrls: ["pages/rating/rating.common.css"]
})
export class RatingPage implements OnInit {

    customerRating: string = "";
    talk: Talk;
    buttonActive: Array<boolean> = [true, true, true, true, true];
    private selectedStars = 5;

    constructor(private _router: Router, private _route: ActivatedRoute, private talkService: TalkService, private _page: Page, private _zone: NgZone) {
        this._page.actionBarHidden = true;
        this._zone.run(() => {
            this._route.params.subscribe(params => {
                let conferenceId = +params["conferenceId"];
                let talkId = +params["talkId"];
                this.talkService.getTalk(conferenceId, talkId)
                    .then(talk => {
                        this.talk = talk;
                    });
            });
        });
    }
    
    ngOnInit() {
        // does not work with this setup
    }
    
    starSelected(starId: number) {
        this.selectedStars = starId + 1;
        for (var index = 0; index < this.buttonActive.length; index++) {
            if( index <= starId ) {
                this.buttonActive[index] = true;
            } else {
                this.buttonActive[index] = false;
            }
        }
    }
    
    getImageSrcForItem(imageUrl: string): string {
        return ImageHelper.getImagePath(imageUrl);
    }
    
    saveInput() {
        
        let starMessage = "Vielen Dank für Ihre Bewertung mit " + this.selectedStars + " Sternen";
        
        let options = {
            title: "Bewertung",
            message: starMessage,
            okButtonText: "OK"
        };
        Dialog.alert(options).then(() => {
            this._router.navigate(["/"]);
        });
    }
}
