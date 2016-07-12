import {Component,} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {TalkService} from "./shared/talks/talk.service";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [TalkService],
    template: `<page-router-outlet></page-router-outlet>`,
})
export class AppComponent {
 }
