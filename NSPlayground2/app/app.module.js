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
                nativescript_ng_shadow_1.NgShadowModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                list_test_component_1.ListTestComponent,
                code_component_1.CodeComponent,
                item_test_component_1.ItemTestComponent,
                prepare_test_component_1.PrepareTestComponent
            ],
            providers: [
                backend_service_1.BackendService,
                utility_service_1.UtilityService,
                code_service_1.CodeService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBQ25GLDZDQUF3RDtBQUV4RCwyREFBd0Q7QUFFeEQsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFFNUQsaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCw2RUFBMEU7QUFDMUUsOERBQTREO0FBQzVELHVGQUFrRjtBQUNsRixzRkFBaUY7QUFFakYsaUVBQXdEO0FBRXhELDJEQUFpRDtBQW9DakQ7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBakNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIscUNBQWdCO2dCQUNoQix1QkFBZ0I7Z0JBQ2hCLHVDQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHVDQUFpQjtnQkFDakIsOEJBQWE7Z0JBQ2IsdUNBQWlCO2dCQUNqQiw2Q0FBb0I7YUFDdkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsMEJBQVc7Z0JBQ1gsQ0FBQyw4QkFBUyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUVGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvZGVTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29kZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RUZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbGlzdF90ZXN0L2xpc3QtdGVzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29kZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NvZGUvY29kZS5jb21wb25lbnRcIjtcclxuaW1wb3J0eyBJdGVtVGVzdENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbGlzdF90ZXN0L2l0ZW0tdGVzdC9pdGVtLXRlc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydHsgUHJlcGFyZVRlc3RDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3ByZXBhcmVfdGVzdC9wcmVwYXJlLXRlc3QuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xyXG5cclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5nU2hhZG93TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIExpc3RUZXN0Q29tcG9uZW50LFxyXG4gICAgICAgIENvZGVDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbVRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgUHJlcGFyZVRlc3RDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBCYWNrZW5kU2VydmljZSxcclxuICAgICAgICBVdGlsaXR5U2VydmljZSxcclxuICAgICAgICBDb2RlU2VydmljZSxcclxuICAgICAgICBbQXV0aEd1YXJkXVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcblxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==