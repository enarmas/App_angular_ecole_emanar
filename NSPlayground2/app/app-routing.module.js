"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var list_test_component_1 = require("./pages/list_test/list-test.component");
var prepare_test_component_1 = require("./pages/prepare_test/prepare-test.component");
var code_component_1 = require("./pages/code/code.component");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "code", component: code_component_1.CodeComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "test/:inscription_id", component: list_test_component_1.ListTestComponent },
    { path: "preparetest", component: prepare_test_component_1.PrepareTestComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLHNEQUF1RTtBQUV2RSxpRUFBK0Q7QUFDL0QsNkVBQTBFO0FBQzFFLHNGQUFtRjtBQUNuRiw4REFBNEQ7QUFJNUQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQztJQUM3RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFDO0NBQzFELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdFRlc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9saXN0X3Rlc3QvbGlzdC10ZXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJlcGFyZVRlc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9wcmVwYXJlX3Rlc3QvcHJlcGFyZS10ZXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29kZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NvZGUvY29kZS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9naW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJjb2RlXCIsIGNvbXBvbmVudDogQ29kZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInRlc3QvOmluc2NyaXB0aW9uX2lkXCIsIGNvbXBvbmVudDogTGlzdFRlc3RDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJwcmVwYXJldGVzdFwiLCBjb21wb25lbnQ6IFByZXBhcmVUZXN0Q29tcG9uZW50fSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19