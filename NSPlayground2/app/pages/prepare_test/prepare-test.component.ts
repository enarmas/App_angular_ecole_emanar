import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { RouterExtensions  } from "nativescript-angular/router";
import { ActivatedRoute   } from "@angular/router";
import { Test  } from "../../services/test.model";
import { View } from "ui/core/view";
import { Color } from "color";
import { UtilityService } from "../../services/utility.service";

import { Config } from "../../parameters/config";

import {getBoolean,setBoolean,getNumber,setNumber, getString, setString, hasKey, remove, clear} from "tns-core-modules/application-settings";
import { ShapeEnum, AndroidData } from "nativescript-ng-shadow";


@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./prepare-test.component.html",
    styleUrls:["./prepare-test.component.css"]
})
export class PrepareTestComponent implements OnInit {

    test:Test = new Test();
    dictionayjson;
    isArFr = 0;
    myDate = new Date();

    @ViewChild("textAr") textAr: ElementRef;
    @ViewChild("textFr") textFr: ElementRef;



    constructor( private backendService: BackendService, private routerExtension: RouterExtensions,
        private utilityService: UtilityService) { 
            
        }

    ngOnInit(): void {
        this.dictionayjson = require(Config.dictionaryUrl);

        console.log("test_titre_pre: "+getString("test_titre_pre"));
    
        this.test.test_titre= getString("test_titre_pre");

        this.test.test_duree= getString("test_duree_pre");
        this.test.NomEtu= getString("NomEtu_pre");
        this.test.PrenomEtu= getString("PrenomEtu_pre");
        this.test.NomEtuArb= getString("NomEtuArb_pre");
        this.test.PrenomEtuArb= getString("PrenomEtuArb_pre");
    }

    isAr_Fr(value:number){
        this.isArFr = value;
        let textAr = <View>this.textAr.nativeElement;
        let textFr = <View>this.textFr.nativeElement;

        if(value==1){
            textAr.style.color = new Color("darkblue");
            textFr.style.color = new Color("white");
        }else if (value==0){
            
            textAr.style.color = new Color("white");
            textFr.style.color = new Color("darkblue");
        }
        

        //console.log("samrane isAr_Fr");


    }

   
    isTablet() {
        return this.utilityService.isTablet();
    }

   
}