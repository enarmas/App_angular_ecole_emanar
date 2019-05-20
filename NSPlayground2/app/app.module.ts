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
import{ PrepareTestComponent} from "./pages/prepare_test/prepare-test.component";

import { NgShadowModule } from 'nativescript-ng-shadow';

import { AuthGuard } from "./auth-guard.service";

import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import {QuestionComponent} from './pages/questions/question.component'
import { QuestionRoutingModule } from "./pages/questions/question-routing.module"
import { QuestionSlidesService } from "./pages/questions/question-slides.service";
//time circuler
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { CircularProgressBarComponent } from "./pages/questions/circular/circular-progress-bar.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgShadowModule,
        QuestionRoutingModule,
        TNSCheckBoxModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ListTestComponent,
        CodeComponent,
        ItemTestComponent,
        PrepareTestComponent,
        QuestionComponent,
        CircularProgressBarComponent
    ],
    providers: [
        BackendService,
        UtilityService,
        CodeService,
        QuestionSlidesService,
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
