import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {ConferencesPage} from "./pages/conferences/conferences.component";
import {TalksPage} from "./pages/talks/talks.component";
import {RatingPage} from "./pages/rating/rating.component";
import {TalkService} from "./shared/talks/talk.service";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS, TalkService],
    template: `<page-router-outlet></page-router-outlet>`,
})
@RouteConfig([
    { path: "/conferences", component: ConferencesPage, name: "Conferences", useAsDefault: true },
    { path: "/talks/:conferenceId", component: TalksPage, name: "Talks" },
    { path: "/rating/:conferenceId/:talkId", component: RatingPage, name: "Rating" },
])
export class AppComponent {
 }
