// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {setStatusBarColors} from "./utils/status-bar-util";
import {APP_ROUTER_PROVIDERS} from "./app.route";

setStatusBarColors();
nativeScriptBootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);