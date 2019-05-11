import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { CodeComponent } from "./pages/code/code.component";

import { AuthGuard } from "./auth-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "code", component: CodeComponent },
    { path: "login", component: LoginComponent },
    { path: "home/:inscription_id", component: HomeComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }