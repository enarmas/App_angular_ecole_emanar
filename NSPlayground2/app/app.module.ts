import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { BackendService } from "./services/backend.service";
import { CodeService } from "./services/code.service";
import { UtilityService } from "./services/utility.service";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListTestComponent } from "./pages/list_test/list-test.component";
import { CodeComponent } from "./pages/code/code.component";
import{ ItemTestComponent} from "./pages/list_test/item-test/item-test.component";
import { NgShadowModule } from 'nativescript-ng-shadow';

import { AuthGuard } from "./auth-guard.service";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgShadowModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ListTestComponent,
        CodeComponent,
        ItemTestComponent
    ],
    providers: [
        BackendService,
        UtilityService,
        CodeService,
        [AuthGuard]
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
