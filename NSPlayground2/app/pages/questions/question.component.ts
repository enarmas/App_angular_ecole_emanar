import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Page, ContentView, View } from "ui/page";
import { SwipeGestureEventData } from "ui/gestures/gestures";
import { GridLayout, GridUnitType, ItemSpec } from "ui/layouts/grid-layout";
import { AnimationDefinition, Animation } from 'ui/animation';
import { screen, isAndroid, device } from "platform";


import * as app from "application";
import * as fs from "file-system";
import * as builder from "ui/builder";

import { QuestionSlidesService } from "./question-slides.service";
import { ActivatedRoute } from "@angular/router";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import {Question} from "../../services/question";
import { Config } from "../../parameters/config";

declare var android: any;

@Component({
    selector: "question",
    moduleId: module.id,
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
    //--------------//
    listeQuestion:Question[] ;
    pathImage = Config;
    //---------------//
    // private slidesPath = 'pages/question/slides';
    // private slideFiles = ['slide1.xml', 'slide2.xml', 'slide3.xml'];
    public id_test;
    private currentSlideNum: number = 0;
    private slideCount = 3;

    private screenWidth;
    private slidesView: GridLayout;

    @ViewChild('slideContent') slideElement: ElementRef;
    @ViewChild('gridViewC') gridViewC: ElementRef;
    private slideView: ContentView;

    constructor(
        private page: Page,
        private nav: RouterExtensions,
        private activatedRoute: ActivatedRoute,
        private questionService: QuestionSlidesService
    ) {
        this.screenWidth = screen.mainScreen.widthDIPs;

        // Span the background under status bar on Android
        if (isAndroid && device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);

            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
    }

    ngOnInit() {
        this.id_test = this.activatedRoute.snapshot.paramMap.get('id_test');
        this.questionService.getListQuestions(this.id_test).subscribe(
            data => {
                this.listeQuestion = data;
                this.slideCount = this.listeQuestion.length;
                console.log("zaher mizyan question");
                console.log(this.listeQuestion);
                
                this.slideView = this.slideElement.nativeElement;
                let gridViewC: GridLayout = this.gridViewC.nativeElement as GridLayout;
                this.slideView.content = (this.slidesView = gridViewC);
                setTimeout(() => {
                    for (let i = 1; i < this.slideCount; i++)
                        this.slidesView.getChildAt(i).opacity = 0;
                }, 50);

                console.log("http://"+this.pathImage.ip+this.pathImage.photosUrl+ this.listeQuestion[1].image);
							

            },
            error => {
                console.log("error question");
            }
        );
        //---------------------------//
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("welcome-page-background");
        this.page.backgroundSpanUnderStatusBar = true;

    }

    skipIntro() {
        // this.nav.navigate(["/home"], { clearHistory: true });
        // this.nav.navigate(["/home"]);
    }

    onSwipe(args: SwipeGestureEventData) {

        let prevSlideNum = this.currentSlideNum;
        let count = this.slideCount;

        if (args.direction == 2) {
            this.currentSlideNum = (this.currentSlideNum + 1) % count;
        } else if (args.direction == 1) {
            this.currentSlideNum = (this.currentSlideNum - 1 + count) % count;
        } else {
            // We are interested in left and right directions
            return;
        }

        const currSlide = this.slidesView.getChildAt(prevSlideNum);
        const nextSlide = this.slidesView.getChildAt(this.currentSlideNum);


        this.animate(currSlide, nextSlide, args.direction);
    }

    animate(currSlide, nextSlide, direction) {

        nextSlide.translateX = (direction == 2 ? this.screenWidth : -this.screenWidth);

        nextSlide.opacity = 1;
        console.log(nextSlide)
        console.log(nextSlide.opacity)
        var definitions = new Array<AnimationDefinition>();
        var defn1: AnimationDefinition = {
            target: currSlide,
            translate: { x: (direction == 2 ? -this.screenWidth : this.screenWidth), y: 0 },
            duration: 500
        };
        definitions.push(defn1);

        var defn2: AnimationDefinition = {
            target: nextSlide,
            translate: { x: 0, y: 0 },
            duration: 500
        };
        definitions.push(defn2);

        var animationSet = new Animation(definitions);
        animationSet.play()
            .then(() => {
                console.log("Animation finished");
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    itemSelected(item: number) {

        console.log(item)
    }

    getSliderItemClass(item: number) {
        /*if (item == this.currentSlideNum)
            return "caro-item-dot caro-item-dot-selected";

        return "caro-item-dot";*/
    }

    getTypeQuestion(quest){
         let nbR = 0;
         let nbJ = 0;

        if(quest.rep1!=null) nbR +=1
        if(quest.rep2!=null) nbR +=1
        if(quest.rep3!=null) nbR +=1
        if(quest.rep4!=null) nbR +=1
        if(quest.rep5!=null) nbR +=1
        if(quest.rep6!=null) nbR +=1

        if(quest.just1!="0") nbJ +=1
        if(quest.just2!="0") nbJ +=1
        if(quest.just3!="0") nbJ +=1
        if(quest.just4!="0") nbJ +=1
        if(quest.just5!="0") nbJ +=1
        if(quest.just6!="0") nbJ +=1
        if (nbR==1 && nbJ==1) return {type:"t",nPro:nbR}
        else if (nbR>1 && nbJ==1) return {type:"r",nPro:nbR}
        return {type:"c",nPro:nbR}
    }
}