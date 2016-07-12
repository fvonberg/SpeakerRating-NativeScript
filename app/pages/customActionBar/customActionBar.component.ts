import * as application from "application";
import {Location} from '@angular/common';
import {Component, Input} from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "CustomActionBar",
    inputs: ['activeBackLink'],
    templateUrl: "pages/customActionBar/customActionBar.html"
})
export class CustomActionBar {

    @Input() activeBackLink: boolean;

    constructor(private _page: Page, private _location: Location) {

        if(application.ios) {
            this._page.actionBarHidden = false;
        } else if (application.android) {
            this._page.actionBarHidden = true;
        }
    }

    goBack() {
        this._location.back();
    }
}