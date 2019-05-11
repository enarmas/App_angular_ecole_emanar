// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { Kinvey } from 'kinvey-nativescript-sdk';

import { AppModule } from "./app.module";

import { appConfig } from './app.config';

Kinvey.init(appConfig);

platformNativeScriptDynamic().bootstrapModule(AppModule);
