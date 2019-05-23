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
    templateUrl: "./list-test.component.html",
    styleUrls:["./list-test.component.css"]
})
export class ListTestComponent implements OnInit {

    isLoading = false;
    inscription_id :string;
    categories = [1,2,3,6,5,8];
    tests:Test[];
    dictionayjson;
    isFrAr = Config.IsArFr;

   /* fabShadow: AndroidData = {
        elevation: 6,
        bgcolor: '#ff1744',
        shape: ShapeEnum.OVAL,
    };*/

    @ViewChild("textAr") textAr: ElementRef;
    @ViewChild("textFr") textFr: ElementRef;

    toggel = true;


    constructor(
        private activatedRoute:ActivatedRoute  ,
        private backendService: BackendService, 
        private routerExtension: RouterExtensions,
        private utilityService: UtilityService) { }

    ngOnInit(): void {

        this.dictionayjson = require(Config.dictionaryUrl);

        this.inscription_id = this.activatedRoute.snapshot.paramMap.get('inscription_id');
        console.log("samrane1home");

        this.backendService.ListTest(this.inscription_id)
        .subscribe(
            data=>{
                this.tests = data;
                console.log("samrane2home" +  this.tests[0].matiere );

            },
            error=>{
                console.log("samrane2homeError "+ JSON.stringify(error.error));
                
            } 
        ); 
        
        console.log("samrane3home"+JSON.stringify(this.dictionayjson[0]));

      
    }

    isAr_Fr(check:number){
        this.isFrAr = check;
        let textAr = <View>this.textAr.nativeElement;
        let textFr = <View>this.textFr.nativeElement;

        if(check==1){
            textAr.style.color = new Color("darkblue");
            textFr.style.color = new Color("white");
        }else if (check==0){
            
            textAr.style.color = new Color("white");
            textFr.style.color = new Color("darkblue");
        }
        

        //console.log("samrane isAr_Fr");


    }

    logout() {
        this.isLoading = true;
        this.backendService.logout()
            .then(() => {
                this.routerExtension.navigate(['/login']);
                this.isLoading = false;
            });
    }

    isTablet() {
        return this.utilityService.isTablet();
    }

    //--------------------------//
    onPasser(id_test){
        //this.routerExtension.navigate(['/welcome',id_test]);
    }

}