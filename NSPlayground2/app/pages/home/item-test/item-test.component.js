"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemTestComponent = /** @class */ (function () {
    function ItemTestComponent() {
        this.toggel = true;
    }
    ItemTestComponent.prototype.ngOnInit = function () {
    };
    ItemTestComponent.prototype.ontapDetail = function () {
        var d = this.detail.nativeElement;
        var imgd = this.imgD.nativeElement;
        var h = d.height;
        var it = this.toggel ? 5 : -5;
        var e = setInterval(function () {
            h += it;
            d.height = h;
            if (d.height == 70 || d.height == 0) {
                clearInterval(e);
            }
        }, 1);
        if (this.toggel)
            imgd.animate({
                rotate: 180,
                duration: 600
            });
        else
            imgd.animate({
                rotate: 0,
                duration: 600
            });
        this.toggel = !this.toggel;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ItemTestComponent.prototype, "test_item", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ItemTestComponent.prototype, "dictionayjsontest", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ItemTestComponent.prototype, "isArFr", void 0);
    __decorate([
        core_1.ViewChild("detail"),
        __metadata("design:type", core_1.ElementRef)
    ], ItemTestComponent.prototype, "detail", void 0);
    __decorate([
        core_1.ViewChild("imgD"),
        __metadata("design:type", core_1.ElementRef)
    ], ItemTestComponent.prototype, "imgD", void 0);
    ItemTestComponent = __decorate([
        core_1.Component({
            selector: 'ns-item-test',
            templateUrl: './item-test.component.html',
            styleUrls: ['./item-test.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], ItemTestComponent);
    return ItemTestComponent;
}());
exports.ItemTestComponent = ItemTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0tdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFVaEY7SUFNSTtRQUtBLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFMRSxDQUFDO0lBT2pCLG9DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUVFLElBQUksQ0FBQyxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFnQixDQUFDO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1lBQ2xCLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDUCxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUVMLElBQUksSUFBSSxDQUFDLE1BQU07WUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDOztZQUVILElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUM1QixDQUFDO0lBMUNRO1FBQVIsWUFBSyxFQUFFOzt3REFBVztJQUNWO1FBQVIsWUFBSyxFQUFFOztnRUFBMEI7SUFDekI7UUFBUixZQUFLLEVBQUU7O3FEQUFnQjtJQUlIO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3FEQUFDO0lBQ3JCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDO2tDQUFPLGlCQUFVO21EQUFDO0lBVDNCLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxpQkFBaUIsQ0E2QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaXRlbS10ZXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tdGVzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0tdGVzdC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1UZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHRlc3RfaXRlbTtcbiAgICBASW5wdXQoKSBkaWN0aW9uYXlqc29udGVzdDogYW55W107XG4gICAgQElucHV0KCkgaXNBckZyOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIEBWaWV3Q2hpbGQoXCJkZXRhaWxcIikgZGV0YWlsOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJpbWdEXCIpIGltZ0Q6IEVsZW1lbnRSZWY7XG5cbiAgICB0b2dnZWwgPSB0cnVlO1xuICAgIFxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgb250YXBEZXRhaWwoKSB7XG4gICAgICBcbiAgICAgIGxldCBkID0gPFZpZXc+dGhpcy5kZXRhaWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGxldCBpbWdkID0gPFZpZXc+dGhpcy5pbWdELm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBsZXQgaCA9IGQuaGVpZ2h0IGFzIG51bWJlcjtcbiAgICAgIGxldCBpdCA9IHRoaXMudG9nZ2VsID8gNSA6IC01O1xuXG4gICAgICB2YXIgZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaCArPSBpdFxuICAgICAgICBkLmhlaWdodCA9IGg7XG4gICAgICAgIGlmIChkLmhlaWdodCA9PSA3MCB8fCBkLmhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlKTtcbiAgICAgICAgfVxuICAgICAgfSwgMSlcblxuICAgICAgaWYgKHRoaXMudG9nZ2VsKVxuICAgICAgICBpbWdkLmFuaW1hdGUoe1xuICAgICAgICAgIHJvdGF0ZTogMTgwLFxuICAgICAgICAgIGR1cmF0aW9uOiA2MDBcbiAgICAgICAgfSk7XG4gICAgICBlbHNlXG4gICAgICAgIGltZ2QuYW5pbWF0ZSh7XG4gICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiA2MDBcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMudG9nZ2VsID0gIXRoaXMudG9nZ2VsXG4gICAgfVxufVxuIl19