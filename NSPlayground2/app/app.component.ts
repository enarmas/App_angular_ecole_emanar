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

        //clear();
        if(getString("connectionString")){

            this.connectionString = JSON.parse(getString("connectionString"));
            let IsArFr = getString("IsArFr");
            console.log(this.connectionString[0]);

            Config.ip = this.connectionString[0].ip;
            Config.api = this.connectionString[0].api;
            Config.nom = this.connectionString[0].nom ;
            Config.photos = this.connectionString[0].photos ;
            Config.database = this.connectionString[0].database;
            Config.user = this.connectionString[0].user;
            Config.password = this.connectionString[0].password;
            Config.IsArFr = IsArFr ;

            this.routerExtensions.navigate(["/login"]);
        
        }else{
            this.routerExtensions.navigate(["/code"]);
            console.log("no connectionString");
        }

        console.log("samrane AppComponent");
        
    }
 }
