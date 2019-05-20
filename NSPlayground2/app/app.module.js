"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var backend_service_1 = require("./services/backend.service");
var code_service_1 = require("./services/code.service");
var utility_service_1 = require("./services/utility.service");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var list_test_component_1 = require("./pages/list_test/list-test.component");
var code_component_1 = require("./pages/code/code.component");
var item_test_component_1 = require("./pages/list_test/item-test/item-test.component");
var prepare_test_component_1 = require("./pages/prepare_test/prepare-test.component");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var auth_guard_service_1 = require("./auth-guard.service");
var angular_1 = require("nativescript-checkbox/angular");
var question_component_1 = require("./pages/questions/question.component");
var question_routing_module_1 = require("./pages/questions/question-routing.module");
var question_slides_service_1 = require("./pages/questions/question-slides.service");
//time circuler
var common_1 = require("nativescript-angular/common");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var angular_3 = require("nativescript-ui-listview/angular");
var angular_4 = require("nativescript-ui-calendar/angular");
var angular_5 = require("nativescript-ui-chart/angular");
var angular_6 = require("nativescript-ui-dataform/angular");
var angular_7 = require("nativescript-ui-autocomplete/angular");
var angular_8 = require("nativescript-ui-gauge/angular");
var circular_progress_bar_component_1 = require("./pages/questions/circular/circular-progress-bar.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                nativescript_ng_shadow_1.NgShadowModule,
                question_routing_module_1.QuestionRoutingModule,
                angular_1.TNSCheckBoxModule,
                angular_2.NativeScriptUISideDrawerModule,
                angular_3.NativeScriptUIListViewModule,
                angular_4.NativeScriptUICalendarModule,
                angular_5.NativeScriptUIChartModule,
                angular_6.NativeScriptUIDataFormModule,
                angular_7.NativeScriptUIAutoCompleteTextViewModule,
                angular_8.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                list_test_component_1.ListTestComponent,
                code_component_1.CodeComponent,
                item_test_component_1.ItemTestComponent,
                prepare_test_component_1.PrepareTestComponent,
                question_component_1.QuestionComponent,
                circular_progress_bar_component_1.CircularProgressBarComponent
            ],
            providers: [
                backend_service_1.BackendService,
                utility_service_1.UtilityService,
                code_service_1.CodeService,
                question_slides_service_1.QuestionSlidesService,
                [auth_guard_service_1.AuthGuard]
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBQ25GLDZDQUF3RDtBQUV4RCwyREFBd0Q7QUFFeEQsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFFNUQsaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCw2RUFBMEU7QUFDMUUsOERBQTREO0FBQzVELHVGQUFrRjtBQUNsRixzRkFBaUY7QUFFakYsaUVBQXdEO0FBRXhELDJEQUFpRDtBQUVqRCx5REFBa0U7QUFDbEUsMkVBQXNFO0FBQ3RFLHFGQUFpRjtBQUNqRixxRkFBa0Y7QUFDbEYsZUFBZTtBQUNmLHNEQUF1RTtBQUN2RSw4REFBb0Y7QUFDcEYsNERBQWdGO0FBQ2hGLDREQUFnRjtBQUNoRix5REFBMEU7QUFDMUUsNERBQWdGO0FBQ2hGLGdFQUFnRztBQUNoRyx5REFBMEU7QUFDMUUsOEdBQTBHO0FBZ0QxRztJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE5Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QixxQ0FBZ0I7Z0JBQ2hCLHVCQUFnQjtnQkFDaEIsdUNBQWM7Z0JBQ2QsK0NBQXFCO2dCQUNyQiwyQkFBaUI7Z0JBQ2pCLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1QixrREFBd0M7Z0JBQ3hDLG1DQUF5QjtnQkFDekIsaUNBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHVDQUFpQjtnQkFDakIsOEJBQWE7Z0JBQ2IsdUNBQWlCO2dCQUNqQiw2Q0FBb0I7Z0JBQ3BCLHNDQUFpQjtnQkFDakIsOERBQTRCO2FBQy9CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLDBCQUFXO2dCQUNYLCtDQUFxQjtnQkFDckIsQ0FBQyw4QkFBUyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUVGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvZGVTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29kZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RUZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbGlzdF90ZXN0L2xpc3QtdGVzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29kZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NvZGUvY29kZS5jb21wb25lbnRcIjtcclxuaW1wb3J0eyBJdGVtVGVzdENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbGlzdF90ZXN0L2l0ZW0tdGVzdC9pdGVtLXRlc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydHsgUHJlcGFyZVRlc3RDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3ByZXBhcmVfdGVzdC9wcmVwYXJlLXRlc3QuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xyXG5cclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcclxuaW1wb3J0IHtRdWVzdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9wYWdlcy9xdWVzdGlvbnMvcXVlc3Rpb24uY29tcG9uZW50J1xyXG5pbXBvcnQgeyBRdWVzdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9wYWdlcy9xdWVzdGlvbnMvcXVlc3Rpb24tcm91dGluZy5tb2R1bGVcIlxyXG5pbXBvcnQgeyBRdWVzdGlvblNsaWRlc1NlcnZpY2UgfSBmcm9tIFwiLi9wYWdlcy9xdWVzdGlvbnMvcXVlc3Rpb24tc2xpZGVzLnNlcnZpY2VcIjtcclxuLy90aW1lIGNpcmN1bGVyXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9xdWVzdGlvbnMvY2lyY3VsYXIvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5nU2hhZG93TW9kdWxlLFxyXG4gICAgICAgIFF1ZXN0aW9uUm91dGluZ01vZHVsZSxcclxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIExpc3RUZXN0Q29tcG9uZW50LFxyXG4gICAgICAgIENvZGVDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbVRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgUHJlcGFyZVRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgUXVlc3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgQ2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIFV0aWxpdHlTZXJ2aWNlLFxyXG4gICAgICAgIENvZGVTZXJ2aWNlLFxyXG4gICAgICAgIFF1ZXN0aW9uU2xpZGVzU2VydmljZSxcclxuICAgICAgICBbQXV0aEd1YXJkXVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcblxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==