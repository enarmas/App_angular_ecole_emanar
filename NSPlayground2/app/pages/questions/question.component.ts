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
import { Question } from "../../services/question";
import { Config } from "../../parameters/config";


import { RadioOption } from "../../services/radio-option";

import { Progress } from "tns-core-modules/ui/progress";
import { getString } from "tns-core-modules/application-settings/application-settings";

declare var android: any;

@Component({
    selector: "question",
    moduleId: module.id,
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
    //--------------//
    listeQuestion: Question[];
    pathImage = Config;
    timeQCM;
    timeSecond;
    radioOptions = [];
    showSlideQuestion = false;
    dictionayjson;
    //---------------//
    public id_test;
    public currentSlideNum: number = 0;
    private slideCount: number;

    private screenWidth;
    private slidesView: GridLayout;

    @ViewChild('slideContent') slideElement: ElementRef;
    @ViewChild('gridViewC') gridViewC: ElementRef;
    @ViewChild('gridMain') gridMain: ElementRef;
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
        this.dictionayjson = require(Config.dictionaryUrl);
        this.id_test = this.activatedRoute.snapshot.paramMap.get('id_test');
        this.timeQCM = getString("test_duree_pre");
        this.timeSecond=60;
        let gridMain: GridLayout = this.gridMain.nativeElement as GridLayout;
        gridMain.height = 0
        this.questionService.getListQuestions(this.id_test).subscribe(
            data => {
                this.listeQuestion = data;
                this.slideCount = this.listeQuestion.length;

                //---------RadioButton-----------//
                this.listeQuestion.forEach(item => {
                    if (this.getTypeQuestion(item).type == 'r') {
                        this.radioOptions
                            .push(new RadioOption(item.id, item.rep1, false));
                        this.radioOptions
                            .push(new RadioOption(item.id, item.rep2, false));
                        this.radioOptions
                            .push(new RadioOption(item.id, item.rep3, false));
                        this.radioOptions
                            .push(new RadioOption(item.id, item.rep4, false));
                        this.radioOptions
                            .push(new RadioOption(item.id, item.rep5, false));
                        this.radioOptions
                            .push(new RadioOption(item.id, item.rep6, false));
                    }
                });

                //------------------//
                this.slideView = this.slideElement.nativeElement;
                let gridViewC: GridLayout = this.gridViewC.nativeElement as GridLayout;
                this.slideView.content = (this.slidesView = gridViewC);
                setTimeout(() => {
                    for (let i = 1; i < this.slideCount; i++) {
                        this.slidesView.getChildAt(i).opacity = 0;
                    }

                    this.listeQuestion.forEach(item => {
                        let ii = 0;
                        this.onSwipe(2, 10)
                        console.log(ii++)

                    }, 50);

                    console.log(this.currentSlideNum)
                })

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
    //-------------------------------//

    onProgressBarLoaded(args) {
        let myProgressBar = <Progress>args.object;

        myProgressBar.value = 10;
        myProgressBar.maxValue = 200;

        setInterval(function () {
            myProgressBar.value += 4;
        }, 100);
    }

    onValueChanged(args) {
        let myProgressBar = <Progress>args.object;

        console.log("Old Value: " + args.oldValue);
        console.log("New Value: " + args.value);
        if (args.value == 200) {
            this.showSlideQuestion = true;
            let gridMain: GridLayout = this.gridMain.nativeElement as GridLayout;
            gridMain.height = 10000;
            //------------time circulation --------//
            var timeM = setInterval(() => {
                this.timeQCM -= 1;
                this.timeSecond =60;
                if (this.timeQCM == 0){
                    clearInterval(timeM);
                }
                   
            }, 60000);

            var timeS = setInterval(() => {
                this.timeSecond -= 1;
                if (this.timeQCM == 0)
                    clearInterval(timeS);
            }, 1000);
        }
    }

    //-------------------------------//
    onSwipe(direction: number, duree: number) {

        let prevSlideNum = this.currentSlideNum;
        let count = this.slideCount;

        if (direction == 2) {
            this.currentSlideNum = (this.currentSlideNum + 1) % count;
        } else if (direction == 1) {
            this.currentSlideNum = (this.currentSlideNum - 1 + count) % count;
        } else {
            // We are interested in left and right directions
            return;
        }

        const currSlide = this.slidesView.getChildAt(prevSlideNum);
        const nextSlide = this.slidesView.getChildAt(this.currentSlideNum);

        console.log(this.currentSlideNum);
        this.animate(currSlide, nextSlide, direction, duree);
    }

    animate(currSlide, nextSlide, direction, duree) {
        nextSlide.translateX = (direction == 2 ? this.screenWidth : -this.screenWidth);
        nextSlide.opacity = 1;
        var definitions = new Array<AnimationDefinition>();
        var defn1: AnimationDefinition = {
            target: currSlide,
            translate: { x: (direction == 2 ? -this.screenWidth : this.screenWidth), y: 0 },
            duration: duree
        };
        definitions.push(defn1);

        var defn2: AnimationDefinition = {
            target: nextSlide,
            translate: { x: 0, y: 0 },
            duration: duree
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


    getSliderItemClass(item: number) {
        if (item == this.currentSlideNum)
            return "caro-item-dot-selected";

        return "caro-item-dot";
    }

    getTypeQuestion(quest) {
        let nbR = 0;
        let nbJ = 0;

        if (quest.rep1 != null) nbR += 1
        if (quest.rep2 != null) nbR += 1
        if (quest.rep3 != null) nbR += 1
        if (quest.rep4 != null) nbR += 1
        if (quest.rep5 != null) nbR += 1
        if (quest.rep6 != null) nbR += 1

        if (quest.just1 != "0") nbJ += 1
        if (quest.just2 != "0") nbJ += 1
        if (quest.just3 != "0") nbJ += 1
        if (quest.just4 != "0") nbJ += 1
        if (quest.just5 != "0") nbJ += 1
        if (quest.just6 != "0") nbJ += 1
        if (nbR == 1 && nbJ == 1) return { type: "t", nPro: nbR }
        else if (nbR > 1 && nbJ == 1) return { type: "r", nPro: nbR }
        return { type: "c", nPro: nbR }
    }
    //------Radio Button--------/
    changeCheckedRadio(idQ, txtR) {
        console.log(idQ + "  " + txtR)

        for (let i = 0; i < this.radioOptions.length; i++)
            if (this.radioOptions[i].idQue == idQ && this.radioOptions[i].txtRep == txtR)
                this.radioOptions[i].selected = true;
            else if (this.radioOptions[i].idQue == idQ && this.radioOptions[i].txtRep != txtR)
                this.radioOptions[i].selected = false;

        console.log(this.radioOptions)
    }
    elatRadio(idQ, txtR): boolean {
        for (let i = 0; i < this.radioOptions.length; i++)
            if (this.radioOptions[i].idQue == idQ && this.radioOptions[i].txtRep == txtR)
                return this.radioOptions[i].selected || false;
        return false;
    }

    onCheckBoxTap() {
        console.log("aaaaaa")
    }
}