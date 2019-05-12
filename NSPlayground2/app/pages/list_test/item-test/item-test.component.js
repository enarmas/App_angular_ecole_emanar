"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemTestComponent = /** @class */ (function () {
    function ItemTestComponent() {
        this.columns = ['5*,3*', '3*,5*'];
        this.col = ['0', '1'];
        this.toggel = true;
    }
    ItemTestComponent.prototype.ngOnInit = function () {
    };
    ItemTestComponent.prototype.ontapDetail = function () {
        var d = this.detail.nativeElement;
        var h = d.height;
        var it = this.toggel ? 5 : -5;
        var e = setInterval(function () {
            h += it;
            d.height = h;
            // console.log("height : "+ d.height);
            if (d.height == 60 || d.height == 0) {
                clearInterval(e);
            }
        }, 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0tdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFVaEY7SUFVSTtRQUpBLFlBQU8sR0FBa0IsQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsUUFBRyxHQUFrQixDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQVEvQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBTEUsQ0FBQztJQU9qQixvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFFRSxJQUFJLENBQUMsR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBZ0IsQ0FBQztRQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUNsQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZCxzQ0FBc0M7WUFDckMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBSUw7Ozs7Ozs7OztlQVNPO1FBRVAsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDNUIsQ0FBQztJQWhEUTtRQUFSLFlBQUssRUFBRTs7d0RBQVc7SUFDVjtRQUFSLFlBQUssRUFBRTs7Z0VBQTBCO0lBQ3pCO1FBQVIsWUFBSyxFQUFFOztxREFBZ0I7SUFRSDtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtxREFBQztJQUNyQjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQztrQ0FBTyxpQkFBVTttREFBQztJQWIzQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7O09BQ1csaUJBQWlCLENBbUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWl0ZW0tdGVzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLXRlc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pdGVtLXRlc3QuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSB0ZXN0X2l0ZW07XG4gICAgQElucHV0KCkgZGljdGlvbmF5anNvbnRlc3Q6IGFueVtdO1xuICAgIEBJbnB1dCgpIGlzQXJGcjogbnVtYmVyO1xuXG4gICAgY29sdW1ucyA6QXJyYXk8c3RyaW5nPiA9IFsnNSosMyonLCczKiw1KiddO1xuICAgIGNvbCA6QXJyYXk8c3RyaW5nPiA9IFsnMCcsJzEnXTtcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgQFZpZXdDaGlsZChcImRldGFpbFwiKSBkZXRhaWw6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImltZ0RcIikgaW1nRDogRWxlbWVudFJlZjtcblxuICAgIHRvZ2dlbCA9IHRydWU7XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBvbnRhcERldGFpbCgpIHtcbiAgICAgIFxuICAgICAgbGV0IGQgPSA8Vmlldz50aGlzLmRldGFpbC5uYXRpdmVFbGVtZW50O1xuICAgICAgbGV0IGggPSBkLmhlaWdodCBhcyBudW1iZXI7XG4gICAgICBsZXQgaXQgPSB0aGlzLnRvZ2dlbCA/IDUgOiAtNTtcblxuICAgICAgdmFyIGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGggKz0gaXQ7XG4gICAgICAgIGQuaGVpZ2h0ID0gaDtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImhlaWdodCA6IFwiKyBkLmhlaWdodCk7XG4gICAgICAgIGlmIChkLmhlaWdodCA9PSA2MCB8fCBkLmhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlKTtcbiAgICAgICAgfVxuICAgICAgfSwgMSlcblxuXG5cbiAgICAgIC8qaWYgKHRoaXMudG9nZ2VsKVxuICAgICAgICBpbWdkLmFuaW1hdGUoe1xuICAgICAgICAgIHJvdGF0ZTogMTgwLFxuICAgICAgICAgIGR1cmF0aW9uOiA2MDBcbiAgICAgICAgfSk7XG4gICAgICBlbHNlXG4gICAgICAgIGltZ2QuYW5pbWF0ZSh7XG4gICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiA2MDBcbiAgICAgICAgfSk7Ki9cblxuICAgICAgdGhpcy50b2dnZWwgPSAhdGhpcy50b2dnZWxcbiAgICB9XG59XG4iXX0=