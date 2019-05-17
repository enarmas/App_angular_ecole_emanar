"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var platform_1 = require("platform");
var app = require("application");
var question_slides_service_1 = require("./question-slides.service");
var router_2 = require("@angular/router");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(page, nav, activatedRoute, questionService) {
        this.page = page;
        this.nav = nav;
        this.activatedRoute = activatedRoute;
        this.questionService = questionService;
        //--------------//
        this.listeQuestion = [];
        this.currentSlideNum = 0;
        this.slideCount = 3;
        this.screenWidth = platform_1.screen.mainScreen.widthDIPs;
        // Span the background under status bar on Android
        if (platform_1.isAndroid && platform_1.device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);
            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_test = this.activatedRoute.snapshot.paramMap.get('id_test');
        this.questionService.getListQuestions(this.id_test).subscribe(function (data) {
            _this.listeQuestion = data;
            _this.slideCount = _this.listeQuestion.length;
            console.log("zaher mizyan question");
            console.log(_this.listeQuestion);
            _this.slideView = _this.slideElement.nativeElement;
            var gridViewC = _this.gridViewC.nativeElement;
            _this.slideView.content = (_this.slidesView = gridViewC);
            setTimeout(function () {
                for (var i = 1; i < _this.slideCount; i++)
                    _this.slidesView.getChildAt(i).opacity = 0;
            }, 30);
        }, function (error) {
            console.log("error question");
        });
        //---------------------------//
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("welcome-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
    };
    QuestionComponent.prototype.skipIntro = function () {
        // this.nav.navigate(["/home"], { clearHistory: true });
        // this.nav.navigate(["/home"]);
    };
    QuestionComponent.prototype.onSwipe = function (args) {
        var prevSlideNum = this.currentSlideNum;
        var count = this.slideCount;
        if (args.direction == 2) {
            this.currentSlideNum = (this.currentSlideNum + 1) % count;
        }
        else if (args.direction == 1) {
            this.currentSlideNum = (this.currentSlideNum - 1 + count) % count;
        }
        else {
            // We are interested in left and right directions
            return;
        }
        var currSlide = this.slidesView.getChildAt(prevSlideNum);
        var nextSlide = this.slidesView.getChildAt(this.currentSlideNum);
        this.animate(currSlide, nextSlide, args.direction);
    };
    QuestionComponent.prototype.animate = function (currSlide, nextSlide, direction) {
        nextSlide.translateX = (direction == 2 ? this.screenWidth : -this.screenWidth);
        nextSlide.opacity = 1;
        console.log(nextSlide);
        console.log(nextSlide.opacity);
        var definitions = new Array();
        var defn1 = {
            target: currSlide,
            translate: { x: (direction == 2 ? -this.screenWidth : this.screenWidth), y: 0 },
            duration: 500
        };
        definitions.push(defn1);
        var defn2 = {
            target: nextSlide,
            translate: { x: 0, y: 0 },
            duration: 500
        };
        definitions.push(defn2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play()
            .then(function () {
            console.log("Animation finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    QuestionComponent.prototype.itemSelected = function (item) {
        console.log(item);
    };
    QuestionComponent.prototype.getSliderItemClass = function (item) {
        /*if (item == this.currentSlideNum)
            return "caro-item-dot caro-item-dot-selected";

        return "caro-item-dot";*/
    };
    QuestionComponent.prototype.getTypeQuestion = function (quest) {
        var nbR = 0;
        var nbJ = 0;
        if (quest.rep1 != null)
            nbR += 1;
        if (quest.rep2 != null)
            nbR += 1;
        if (quest.rep3 != null)
            nbR += 1;
        if (quest.rep4 != null)
            nbR += 1;
        if (quest.rep5 != null)
            nbR += 1;
        if (quest.rep6 != null)
            nbR += 1;
        if (quest.just1 != "0")
            nbJ += 1;
        if (quest.just2 != "0")
            nbJ += 1;
        if (quest.just3 != "0")
            nbJ += 1;
        if (quest.just4 != "0")
            nbJ += 1;
        if (quest.just5 != "0")
            nbJ += 1;
        if (quest.just6 != "0")
            nbJ += 1;
        if (nbR == 1 && nbJ == 1)
            return { type: "t", nPro: nbR };
        else if (nbR > 1 && nbJ == 1)
            return { type: "r", nPro: nbR };
        return { type: "c", nPro: nbR };
    };
    __decorate([
        core_1.ViewChild('slideContent'),
        __metadata("design:type", core_1.ElementRef)
    ], QuestionComponent.prototype, "slideElement", void 0);
    __decorate([
        core_1.ViewChild('gridViewC'),
        __metadata("design:type", core_1.ElementRef)
    ], QuestionComponent.prototype, "gridViewC", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: "question",
            moduleId: module.id,
            templateUrl: "./question.component.html",
            styleUrls: ["./question.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            router_2.ActivatedRoute,
            question_slides_service_1.QuestionSlidesService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdGO0FBQ2hGLHNEQUErRDtBQUUvRCxnQ0FBa0Q7QUFHbEQsMENBQThEO0FBQzlELHFDQUFxRDtBQUdyRCxpQ0FBbUM7QUFJbkMscUVBQWtFO0FBQ2xFLDBDQUFpRDtBQWFqRDtJQWtCSSwyQkFDWSxJQUFVLEVBQ1YsR0FBcUIsRUFDckIsY0FBOEIsRUFDOUIsZUFBc0M7UUFIdEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFyQmxELGtCQUFrQjtRQUNsQixrQkFBYSxHQUFHLEVBQUUsQ0FBQTtRQU1WLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFlbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFFL0Msa0RBQWtEO1FBQ2xELElBQUksb0JBQVMsSUFBSSxpQkFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDeEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRW5DLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QyxTQUFTLENBQUMscUJBQXFCLENBQzNCLElBQUksQ0FBQyw0QkFBNEI7a0JBQy9CLElBQUksQ0FBQyxxQ0FBcUM7a0JBQzFDLElBQUksQ0FBQyxn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QUMsVUFBQyxDQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLElBQVk7UUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsOENBQWtCLEdBQWxCLFVBQW1CLElBQVk7UUFDM0I7OztpQ0FHeUI7SUFDN0IsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNoQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFYixJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUUsSUFBSTtZQUFFLEdBQUcsSUFBRyxDQUFDLENBQUE7UUFDNUIsSUFBRyxLQUFLLENBQUMsSUFBSSxJQUFFLElBQUk7WUFBRSxHQUFHLElBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUcsS0FBSyxDQUFDLElBQUksSUFBRSxJQUFJO1lBQUUsR0FBRyxJQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUUsSUFBSTtZQUFFLEdBQUcsSUFBRyxDQUFDLENBQUE7UUFDNUIsSUFBRyxLQUFLLENBQUMsSUFBSSxJQUFFLElBQUk7WUFBRSxHQUFHLElBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUcsS0FBSyxDQUFDLElBQUksSUFBRSxJQUFJO1lBQUUsR0FBRyxJQUFHLENBQUMsQ0FBQTtRQUU1QixJQUFHLEtBQUssQ0FBQyxLQUFLLElBQUUsR0FBRztZQUFFLEdBQUcsSUFBRyxDQUFDLENBQUE7UUFDNUIsSUFBRyxLQUFLLENBQUMsS0FBSyxJQUFFLEdBQUc7WUFBRSxHQUFHLElBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUcsS0FBSyxDQUFDLEtBQUssSUFBRSxHQUFHO1lBQUUsR0FBRyxJQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFHLEtBQUssQ0FBQyxLQUFLLElBQUUsR0FBRztZQUFFLEdBQUcsSUFBRyxDQUFDLENBQUE7UUFDNUIsSUFBRyxLQUFLLENBQUMsS0FBSyxJQUFFLEdBQUc7WUFBRSxHQUFHLElBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUcsS0FBSyxDQUFDLEtBQUssSUFBRSxHQUFHO1lBQUUsR0FBRyxJQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLEdBQUcsSUFBRSxDQUFDLElBQUksR0FBRyxJQUFFLENBQUM7WUFBRSxPQUFPLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLENBQUE7YUFDM0MsSUFBSSxHQUFHLEdBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxDQUFBO1FBQ3BELE9BQU8sRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsQ0FBQTtJQUM5QixDQUFDO0lBaEowQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTsyREFBQztJQUM1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxpQkFBVTt3REFBQztJQWZyQyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7eUNBb0JvQixXQUFJO1lBQ0wseUJBQWdCO1lBQ0wsdUJBQWM7WUFDYiwrQ0FBcUI7T0F0QnpDLGlCQUFpQixDQStKN0I7SUFBRCx3QkFBQztDQUFBLEFBL0pELElBK0pDO0FBL0pZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBhZ2UsIENvbnRlbnRWaWV3LCBWaWV3IH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgR3JpZFVuaXRUeXBlLCBJdGVtU3BlYyB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBBbmltYXRpb25EZWZpbml0aW9uLCBBbmltYXRpb24gfSBmcm9tICd1aS9hbmltYXRpb24nO1xuaW1wb3J0IHsgc2NyZWVuLCBpc0FuZHJvaWQsIGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5cbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0ICogYXMgYnVpbGRlciBmcm9tIFwidWkvYnVpbGRlclwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvblNsaWRlc1NlcnZpY2UgfSBmcm9tIFwiLi9xdWVzdGlvbi1zbGlkZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuXG5cblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJxdWVzdGlvblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9xdWVzdGlvbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9xdWVzdGlvbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLy9cbiAgICBsaXN0ZVF1ZXN0aW9uID0gW11cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLy9cbiAgICAvLyBwcml2YXRlIHNsaWRlc1BhdGggPSAncGFnZXMvcXVlc3Rpb24vc2xpZGVzJztcbiAgICAvLyBwcml2YXRlIHNsaWRlRmlsZXMgPSBbJ3NsaWRlMS54bWwnLCAnc2xpZGUyLnhtbCcsICdzbGlkZTMueG1sJ107XG4gICAgcHVibGljIGlkX3Rlc3Q7XG4gICAgcHJpdmF0ZSBjdXJyZW50U2xpZGVOdW06IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzbGlkZUNvdW50ID0gMztcblxuICAgIHByaXZhdGUgc2NyZWVuV2lkdGg7XG4gICAgcHJpdmF0ZSBzbGlkZXNWaWV3OiBHcmlkTGF5b3V0O1xuXG4gICAgQFZpZXdDaGlsZCgnc2xpZGVDb250ZW50Jykgc2xpZGVFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2dyaWRWaWV3QycpIGdyaWRWaWV3QzogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHNsaWRlVmlldzogQ29udGVudFZpZXc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcXVlc3Rpb25TZXJ2aWNlOiBRdWVzdGlvblNsaWRlc1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcblxuICAgICAgICAvLyBTcGFuIHRoZSBiYWNrZ3JvdW5kIHVuZGVyIHN0YXR1cyBiYXIgb24gQW5kcm9pZFxuICAgICAgICBpZiAoaXNBbmRyb2lkICYmIGRldmljZS5zZGtWZXJzaW9uID49ICcyMScpIHtcbiAgICAgICAgICAgIHZhciBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgICAgICB2YXIgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XG5cbiAgICAgICAgICAgIHZhciBkZWNvclZpZXcgPSB3aW5kb3cuZ2V0RGVjb3JWaWV3KCk7XG4gICAgICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxuICAgICAgICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaWRfdGVzdCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZF90ZXN0Jyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25TZXJ2aWNlLmdldExpc3RRdWVzdGlvbnModGhpcy5pZF90ZXN0KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlUXVlc3Rpb24gPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVDb3VudCA9IHRoaXMubGlzdGVRdWVzdGlvbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ6YWhlciBtaXp5YW4gcXVlc3Rpb25cIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RlUXVlc3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZVZpZXcgPSB0aGlzLnNsaWRlRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBncmlkVmlld0M6IEdyaWRMYXlvdXQgPSB0aGlzLmdyaWRWaWV3Qy5uYXRpdmVFbGVtZW50IGFzIEdyaWRMYXlvdXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZVZpZXcuY29udGVudCA9ICh0aGlzLnNsaWRlc1ZpZXcgPSBncmlkVmlld0MpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc2xpZGVDb3VudDsgaSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXNWaWV3LmdldENoaWxkQXQoaSkub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgfSwgMzApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgcXVlc3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5jc3NDbGFzc2VzLmFkZChcIndlbGNvbWUtcGFnZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XG5cbiAgICB9XG5cbiAgICBza2lwSW50cm8oKSB7XG4gICAgICAgIC8vIHRoaXMubmF2Lm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgLy8gdGhpcy5uYXYubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgIH1cblxuICAgIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG5cbiAgICAgICAgbGV0IHByZXZTbGlkZU51bSA9IHRoaXMuY3VycmVudFNsaWRlTnVtO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLnNsaWRlQ291bnQ7XG5cbiAgICAgICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlTnVtID0gKHRoaXMuY3VycmVudFNsaWRlTnVtICsgMSkgJSBjb3VudDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZU51bSA9ICh0aGlzLmN1cnJlbnRTbGlkZU51bSAtIDEgKyBjb3VudCkgJSBjb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBpbnRlcmVzdGVkIGluIGxlZnQgYW5kIHJpZ2h0IGRpcmVjdGlvbnNcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJTbGlkZSA9IHRoaXMuc2xpZGVzVmlldy5nZXRDaGlsZEF0KHByZXZTbGlkZU51bSk7XG4gICAgICAgIGNvbnN0IG5leHRTbGlkZSA9IHRoaXMuc2xpZGVzVmlldy5nZXRDaGlsZEF0KHRoaXMuY3VycmVudFNsaWRlTnVtKTtcblxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZShjdXJyU2xpZGUsIG5leHRTbGlkZSwgYXJncy5kaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3VyclNsaWRlLCBuZXh0U2xpZGUsIGRpcmVjdGlvbikge1xuXG4gICAgICAgIG5leHRTbGlkZS50cmFuc2xhdGVYID0gKGRpcmVjdGlvbiA9PSAyID8gdGhpcy5zY3JlZW5XaWR0aCA6IC10aGlzLnNjcmVlbldpZHRoKTtcblxuICAgICAgICBuZXh0U2xpZGUub3BhY2l0eSA9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKG5leHRTbGlkZSlcbiAgICAgICAgY29uc29sZS5sb2cobmV4dFNsaWRlLm9wYWNpdHkpXG4gICAgICAgIHZhciBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgICAgICB2YXIgZGVmbjE6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IGN1cnJTbGlkZSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAoZGlyZWN0aW9uID09IDIgPyAtdGhpcy5zY3JlZW5XaWR0aCA6IHRoaXMuc2NyZWVuV2lkdGgpLCB5OiAwIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH07XG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmbjEpO1xuXG4gICAgICAgIHZhciBkZWZuMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIHRhcmdldDogbmV4dFNsaWRlLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgfTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZuMik7XG5cbiAgICAgICAgdmFyIGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xuICAgICAgICBhbmltYXRpb25TZXQucGxheSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbmltYXRpb24gZmluaXNoZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGl0ZW1TZWxlY3RlZChpdGVtOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgIH1cblxuICAgIGdldFNsaWRlckl0ZW1DbGFzcyhpdGVtOiBudW1iZXIpIHtcbiAgICAgICAgLyppZiAoaXRlbSA9PSB0aGlzLmN1cnJlbnRTbGlkZU51bSlcbiAgICAgICAgICAgIHJldHVybiBcImNhcm8taXRlbS1kb3QgY2Fyby1pdGVtLWRvdC1zZWxlY3RlZFwiO1xuXG4gICAgICAgIHJldHVybiBcImNhcm8taXRlbS1kb3RcIjsqL1xuICAgIH1cblxuICAgIGdldFR5cGVRdWVzdGlvbihxdWVzdCl7XG4gICAgICAgICBsZXQgbmJSID0gMDtcbiAgICAgICAgIGxldCBuYkogPSAwO1xuXG4gICAgICAgIGlmKHF1ZXN0LnJlcDEhPW51bGwpIG5iUiArPTFcbiAgICAgICAgaWYocXVlc3QucmVwMiE9bnVsbCkgbmJSICs9MVxuICAgICAgICBpZihxdWVzdC5yZXAzIT1udWxsKSBuYlIgKz0xXG4gICAgICAgIGlmKHF1ZXN0LnJlcDQhPW51bGwpIG5iUiArPTFcbiAgICAgICAgaWYocXVlc3QucmVwNSE9bnVsbCkgbmJSICs9MVxuICAgICAgICBpZihxdWVzdC5yZXA2IT1udWxsKSBuYlIgKz0xXG5cbiAgICAgICAgaWYocXVlc3QuanVzdDEhPVwiMFwiKSBuYkogKz0xXG4gICAgICAgIGlmKHF1ZXN0Lmp1c3QyIT1cIjBcIikgbmJKICs9MVxuICAgICAgICBpZihxdWVzdC5qdXN0MyE9XCIwXCIpIG5iSiArPTFcbiAgICAgICAgaWYocXVlc3QuanVzdDQhPVwiMFwiKSBuYkogKz0xXG4gICAgICAgIGlmKHF1ZXN0Lmp1c3Q1IT1cIjBcIikgbmJKICs9MVxuICAgICAgICBpZihxdWVzdC5qdXN0NiE9XCIwXCIpIG5iSiArPTFcbiAgICAgICAgaWYgKG5iUj09MSAmJiBuYko9PTEpIHJldHVybiB7dHlwZTpcInRcIixuUHJvOm5iUn1cbiAgICAgICAgZWxzZSBpZiAobmJSPjEgJiYgbmJKPT0xKSByZXR1cm4ge3R5cGU6XCJyXCIsblBybzpuYlJ9XG4gICAgICAgIHJldHVybiB7dHlwZTpcImNcIixuUHJvOm5iUn1cbiAgICB9XG59Il19