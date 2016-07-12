import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router";
import {ConferencesPage} from "./pages/conferences/conferences.component";
import {TalksPage} from "./pages/talks/talks.component";
import {RatingPage} from "./pages/rating/rating.component";

export const routes: RouterConfig = [
    { path: "", component: ConferencesPage },
    { path: "talks/:conferenceId", component: TalksPage },
    { path: "rating/:conferenceId/:talkId", component: RatingPage },
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];