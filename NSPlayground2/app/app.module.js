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
                angular_1.TNSCheckBoxModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                list_test_component_1.ListTestComponent,
                code_component_1.CodeComponent,
                item_test_component_1.ItemTestComponent,
                prepare_test_component_1.PrepareTestComponent,
                question_component_1.QuestionComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBQ25GLDZDQUF3RDtBQUV4RCwyREFBd0Q7QUFFeEQsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFFNUQsaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCw2RUFBMEU7QUFDMUUsOERBQTREO0FBQzVELHVGQUFrRjtBQUNsRixzRkFBaUY7QUFFakYsaUVBQXdEO0FBRXhELDJEQUFpRDtBQUVqRCx5REFBa0U7QUFDbEUsMkVBQXNFO0FBQ3RFLHFGQUFpRjtBQUNqRixxRkFBa0Y7QUF1Q2xGO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXJDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLHFDQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQix1Q0FBYztnQkFDZCwrQ0FBcUI7Z0JBQ3JCLDJCQUFpQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCx1Q0FBaUI7Z0JBQ2pCLDhCQUFhO2dCQUNiLHVDQUFpQjtnQkFDakIsNkNBQW9CO2dCQUNwQixzQ0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsMEJBQVc7Z0JBQ1gsK0NBQXFCO2dCQUNyQixDQUFDLDhCQUFTLENBQUM7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBRUY7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29kZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb2RlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGlzdFRlc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9saXN0X3Rlc3QvbGlzdC10ZXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb2RlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvY29kZS9jb2RlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnR7IEl0ZW1UZXN0Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9saXN0X3Rlc3QvaXRlbS10ZXN0L2l0ZW0tdGVzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0eyBQcmVwYXJlVGVzdENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvcHJlcGFyZV90ZXN0L3ByZXBhcmUtdGVzdC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE5nU2hhZG93TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nLXNoYWRvdyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ29tcG9uZW50fSBmcm9tICcuL3BhZ2VzL3F1ZXN0aW9ucy9xdWVzdGlvbi5jb21wb25lbnQnXHJcbmltcG9ydCB7IFF1ZXN0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3BhZ2VzL3F1ZXN0aW9ucy9xdWVzdGlvbi1yb3V0aW5nLm1vZHVsZVwiXHJcbmltcG9ydCB7IFF1ZXN0aW9uU2xpZGVzU2VydmljZSB9IGZyb20gXCIuL3BhZ2VzL3F1ZXN0aW9ucy9xdWVzdGlvbi1zbGlkZXMuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5nU2hhZG93TW9kdWxlLFxyXG4gICAgICAgIFF1ZXN0aW9uUm91dGluZ01vZHVsZSxcclxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBMaXN0VGVzdENvbXBvbmVudCxcclxuICAgICAgICBDb2RlQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1UZXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFByZXBhcmVUZXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFF1ZXN0aW9uQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgICAgVXRpbGl0eVNlcnZpY2UsXHJcbiAgICAgICAgQ29kZVNlcnZpY2UsXHJcbiAgICAgICAgUXVlc3Rpb25TbGlkZXNTZXJ2aWNlLFxyXG4gICAgICAgIFtBdXRoR3VhcmRdXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuXHJcbi8qXHJcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcclxuKi9cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19