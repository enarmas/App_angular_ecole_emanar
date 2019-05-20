"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CircularProgressBarComponent = /** @class */ (function () {
    function CircularProgressBarComponent() {
        this.size = 100;
        this.progress = 0;
        this.textColor = "#bfbfc4";
        this.fillColor = "#FDA458";
        this.fillBackgroundColor = "#efeff4";
        this.offset = 0;
    }
    Object.defineProperty(CircularProgressBarComponent.prototype, "height", {
        get: function () {
            return Math.min(this.size, 250);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "value", {
        get: function () {
            return this.Textvalue * 100 / 30;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "text", {
        get: function () {
            return this.value.toFixed() + "%";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "textSize", {
        get: function () {
            return this.height / 3.5;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "textColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "fillColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "fillBackgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircularProgressBarComponent.prototype, "Textvalue", void 0);
    CircularProgressBarComponent = __decorate([
        core_1.Component({
            selector: "circularProgressBar",
            template: "\n    <GridLayout [height]=\"height\" [width]=\"height\">\n        <RadRadialGauge>\n            <RadialScale tkRadialGaugeScales startAngle=\"-90\" sweepAngle=\"360\">\n                <ScaleStyle tkRadialScaleStyle ticksVisible=\"false\" labelsVisible=\"false\" lineThickness=\"0\">\n                </ScaleStyle>\n\n                <RadialBarIndicator tkRadialScaleIndicators minimum=\"0\" maximum=\"100\">\n                    <BarIndicatorStyle tkRadialBarIndicatorStyle [fillColor]=\"fillBackgroundColor\" cap=\"Round\" barWidth=\"0.1\">\n                    </BarIndicatorStyle>\n                </RadialBarIndicator>\n\n                <RadialBarIndicator tkRadialScaleIndicators minimum=\"0\" [maximum]=\"value\" isAnimated=\"true\">\n                    <BarIndicatorStyle tkRadialBarIndicatorStyle [fillColor]=\"fillColor\" cap=\"Round\" barWidth=\"0.1\">\n                    </BarIndicatorStyle>\n                </RadialBarIndicator>\n            </RadialScale>\n        </RadRadialGauge>\n        <Label [text]=\"Textvalue\" [color]=\"textColor\" [fontSize]=\"textSize\" class=\"m-x-auto m-y-auto\" [marginTop]=\"offset\"></Label>\n    </GridLayout>\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], CircularProgressBarComponent);
    return CircularProgressBarComponent;
}());
exports.CircularProgressBarComponent = CircularProgressBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNpcmN1bGFyLXByb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUEyQjFFO0lBekJBO1FBMEJhLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHdCQUFtQixHQUFHLFNBQVMsQ0FBQztRQUNoQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBZXhCLENBQUM7SUFaRyxzQkFBSSxnREFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBQ0Ysc0JBQUksK0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUNGLHNCQUFJLDhDQUFJO2FBQVI7WUFDSSxPQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQUcsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDRixzQkFBSSxrREFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFuQk87UUFBUixZQUFLLEVBQUU7OzhEQUFZO0lBQ1g7UUFBUixZQUFLLEVBQUU7O2tFQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O21FQUF1QjtJQUN0QjtRQUFSLFlBQUssRUFBRTs7bUVBQXVCO0lBQ3RCO1FBQVIsWUFBSyxFQUFFOzs2RUFBaUM7SUFDaEM7UUFBUixZQUFLLEVBQUU7O2dFQUFZO0lBQ1g7UUFBUixZQUFLLEVBQUU7O21FQUFrQjtJQVBqQiw0QkFBNEI7UUF6QnhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSxvcENBb0JUO1lBQ0QsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztPQUNXLDRCQUE0QixDQXFCeEM7SUFBRCxtQ0FBQztDQUFBLEFBckJELElBcUJDO0FBckJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2lyY3VsYXJQcm9ncmVzc0JhclwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxHcmlkTGF5b3V0IFtoZWlnaHRdPVwiaGVpZ2h0XCIgW3dpZHRoXT1cImhlaWdodFwiPlxyXG4gICAgICAgIDxSYWRSYWRpYWxHYXVnZT5cclxuICAgICAgICAgICAgPFJhZGlhbFNjYWxlIHRrUmFkaWFsR2F1Z2VTY2FsZXMgc3RhcnRBbmdsZT1cIi05MFwiIHN3ZWVwQW5nbGU9XCIzNjBcIj5cclxuICAgICAgICAgICAgICAgIDxTY2FsZVN0eWxlIHRrUmFkaWFsU2NhbGVTdHlsZSB0aWNrc1Zpc2libGU9XCJmYWxzZVwiIGxhYmVsc1Zpc2libGU9XCJmYWxzZVwiIGxpbmVUaGlja25lc3M9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICA8L1NjYWxlU3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB0a1JhZGlhbFNjYWxlSW5kaWNhdG9ycyBtaW5pbXVtPVwiMFwiIG1heGltdW09XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZSBbZmlsbENvbG9yXT1cImZpbGxCYWNrZ3JvdW5kQ29sb3JcIiBjYXA9XCJSb3VuZFwiIGJhcldpZHRoPVwiMC4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYXJJbmRpY2F0b3JTdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3IgdGtSYWRpYWxTY2FsZUluZGljYXRvcnMgbWluaW11bT1cIjBcIiBbbWF4aW11bV09XCJ2YWx1ZVwiIGlzQW5pbWF0ZWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGUgW2ZpbGxDb2xvcl09XCJmaWxsQ29sb3JcIiBjYXA9XCJSb3VuZFwiIGJhcldpZHRoPVwiMC4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYXJJbmRpY2F0b3JTdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxyXG4gICAgICAgICAgICA8L1JhZGlhbFNjYWxlPlxyXG4gICAgICAgIDwvUmFkUmFkaWFsR2F1Z2U+XHJcbiAgICAgICAgPExhYmVsIFt0ZXh0XT1cIlRleHR2YWx1ZVwiIFtjb2xvcl09XCJ0ZXh0Q29sb3JcIiBbZm9udFNpemVdPVwidGV4dFNpemVcIiBjbGFzcz1cIm0teC1hdXRvIG0teS1hdXRvXCIgW21hcmdpblRvcF09XCJvZmZzZXRcIj48L0xhYmVsPlxyXG4gICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgYCxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHNpemUgPSAxMDA7XHJcbiAgICBASW5wdXQoKSBwcm9ncmVzcyA9IDA7XHJcbiAgICBASW5wdXQoKSB0ZXh0Q29sb3IgPSBcIiNiZmJmYzRcIjtcclxuICAgIEBJbnB1dCgpIGZpbGxDb2xvciA9IFwiI0ZEQTQ1OFwiO1xyXG4gICAgQElucHV0KCkgZmlsbEJhY2tncm91bmRDb2xvciA9IFwiI2VmZWZmNFwiO1xyXG4gICAgQElucHV0KCkgb2Zmc2V0ID0gMDtcclxuICAgIEBJbnB1dCgpIFRleHR2YWx1ZTpudW1iZXI7XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLCAyNTApO1xyXG4gICAgfTtcclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5UZXh0dmFsdWUqMTAwLzMwO1xyXG4gICAgfTtcclxuICAgIGdldCB0ZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnZhbHVlLnRvRml4ZWQoKX0lYDtcclxuICAgIH07XHJcbiAgICBnZXQgdGV4dFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMy41O1xyXG4gICAgfTtcclxufSJdfQ==