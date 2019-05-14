import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { ListTestComponent } from "./pages/list_test/list-test.component";
import { PrepareTestComponent } from "./pages/prepare_test/prepare-test.component";
import { CodeComponent } from "./pages/code/code.component";

import { AuthGuard } from "./auth-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "code", component: CodeComponent },
    { path: "login", component: LoginComponent },
    { path: "test/:inscription_id", component: ListTestComponent},
    { path: "preparetest", component: PrepareTestComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }