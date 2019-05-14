import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { View } from 'tns-core-modules/ui/page/page';
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { RouterExtensions  } from "nativescript-angular/router";
import { ActivatedRoute   } from "@angular/router";

import * as dialogs from "tns-core-modules/ui/dialogs";
import { Test  } from "../../../services/test.model";
import { Config } from "../../../parameters/config";

import {getBoolean,setBoolean,getNumber,setNumber, getString, setString, hasKey, remove, clear} from "tns-core-modules/application-settings";
import { ShapeEnum, AndroidData } from "nativescript-ng-shadow";


@Component({
  selector: 'ns-item-test',
  templateUrl: './item-test.component.html',
  styleUrls: ['./item-test.component.css'],
  moduleId: module.id,
})
export class ItemTestComponent implements OnInit {

    @Input() test_item;
    @Input() dictionayjsontest: any[];
    @Input() isArFr: number;

    columns :Array<string> = ['5*,3*','3*,5*'];
    col :Array<string> = ['0','1'];
    
    
    constructor(private activatedRoute:ActivatedRoute  ,private routerExtension: RouterExtensions
      ) { }

    @ViewChild("detail") detail: ElementRef;
    @ViewChild("imgD") imgD: ElementRef;

    toggel = true;
    
    ngOnInit() {

    }

    ontapDetail() {
      
      let d = <View>this.detail.nativeElement;
      let h = d.height as number;
      let it = this.toggel ? 5 : -5;

      var e = setInterval(() => {
        h += it;
        d.height = h;
       // console.log("height : "+ d.height);
        if (d.height == 60 || d.height == 0) {
          clearInterval(e);
        }
      }, 1)



      /*if (this.toggel)
        imgd.animate({
          rotate: 180,
          duration: 600
        });
      else
        imgd.animate({
          rotate: 0,
          duration: 600
        });*/

      this.toggel = !this.toggel
    }


    passer(test_item :Test){
      /*dialogs.alert({
          title: ""+test_item.test_titre,
          message: "Your message",
          okButtonText: "Your button text"
      }).then(() => {
          console.log("Dialog closed!");
      });*/

      console.log("1 : "+test_item.test_duree);
      setString("test_id_pre",test_item.test_id);
      console.log("2 : ");
      setString("test_titre_pre",test_item.test_titre);
      console.log("3 : ");
      setString("test_duree_pre",test_item.test_duree);
      console.log("4 : ");
      setString("NomEtu_pre",test_item.NomEtu);
      console.log("5 : ");
      setString("PrenomEtu_pre",test_item.PrenomEtu);
      console.log("6 : ");
      setString("NomEtuArb_pre",test_item.NomEtuArb);
      console.log("7 : ");
      setString("PrenomEtuArb_pre",test_item.PrenomEtuArb);
      console.log("8 : ");

      this.routerExtension.navigate(['/preparetest']);
     }
}
