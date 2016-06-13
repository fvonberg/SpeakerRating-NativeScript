import {Component, OnInit} from "@angular/core";
import {Router, RouteParams} from "@angular/router-deprecated";
import {Page} from "ui/page";
import {TextView} from "ui/text-view";
import * as Dialog from "ui/dialogs";
import {TalkService} from "../../shared/talks/talk.service";
import {Talk} from "../../shared/talks/talk";

@Component({
    selector: "rating",
    templateUrl: "pages/rating/rating.html",
    styleUrls: ["pages/rating/rating.common.css"]
})
export class RatingPage implements OnInit {

    customerRating: string = "";
    talk: Talk;
    private conferenceId: number;
    private talkId: number;
    buttonActive: Array<boolean> = [true, true, true, true, true];
    private selectedStars = 5;

    constructor(private router: Router, private routeParams: RouteParams, private talkService: TalkService, private page: Page) {
        this.conferenceId = Number(routeParams.get("conferenceId"));
        this.talkId = Number(routeParams.get("talkId"));
    }
    
    ngOnInit() {
       this.page.actionBarHidden = true;
       this.talkService.getTalk(this.conferenceId, this.talkId)
            .then(talk => {
                this.talk = talk;
            });
       
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
        if(imageUrl !== "") {
            return imageUrl;
        }
        return "images/default_placeholder_image.png";
    }
    
    saveInput() {
        console.log("save input");
        
        let starMessage = "Vielen Dank für Ihre Bewertung mit " + this.selectedStars + " Sternen";
        let customerInput = ""
        
 /*       if( this.customerRating !== "" ) {
              customerInput = "And thanks for your Input! (" + this.customerRating + ")";
        }  */
        
        let options = {
            title: "Bewertung",
            message: starMessage + "\n" + customerInput,
            okButtonText: "OK"
        };
        Dialog.alert(options).then(() => {
            this.router.navigate(["Conferences"]);
        });
    }
}
