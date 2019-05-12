import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { View } from 'tns-core-modules/ui/page/page';
import { AnimationCurve } from "tns-core-modules/ui/enums";

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
    
    
    constructor() { }

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
}
