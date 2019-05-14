import { Component } from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router";
import {getBoolean,setBoolean,getNumber,setNumber, getString, setString, hasKey, remove, clear} from "tns-core-modules/application-settings";
import { Config } from "./parameters/config";



@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    connectionString :JSON;

    constructor(private routerExtensions: RouterExtensions,) {
    }

    ngOnInit(): void {

       // clear();
        if(getString("connectionString")){

            this.connectionString = JSON.parse(getString("connectionString"));
            console.log(this.connectionString[0]);

            Config.ip = this.connectionString[0].ip;
            Config.api = this.connectionString[0].api;
            Config.nameSchool = this.connectionString[0].nameSchool ;
            Config.photosUrl = this.connectionString[0].photosUrl ;
            Config.nameDB = this.connectionString[0].nameDB;
            Config.userDB = this.connectionString[0].userDB;
            Config.passDB = this.connectionString[0].passDB;

            this.routerExtensions.navigate(["/login"]);
        
        }else{
            this.routerExtensions.navigate(["/code"]);
            console.log("no connectionString");
        }

        console.log("samrane AppComponent");
        
    }
 }
