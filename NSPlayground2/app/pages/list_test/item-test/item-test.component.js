"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var application_settings_1 = require("tns-core-modules/application-settings");
var ItemTestComponent = /** @class */ (function () {
    function ItemTestComponent(activatedRoute, routerExtension) {
        this.activatedRoute = activatedRoute;
        this.routerExtension = routerExtension;
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
    ItemTestComponent.prototype.passer = function (test_item) {
        /*dialogs.alert({
            title: ""+test_item.test_titre,
            message: "Your message",
            okButtonText: "Your button text"
        }).then(() => {
            console.log("Dialog closed!");
        });*/
        console.log("1 : " + test_item.test_duree);
        application_settings_1.setString("test_id_pre", test_item.test_id);
        console.log("2 : ");
        application_settings_1.setString("test_titre_pre", test_item.test_titre);
        console.log("3 : ");
        application_settings_1.setString("test_duree_pre", test_item.test_duree);
        console.log("4 : ");
        application_settings_1.setString("NomEtu_pre", test_item.NomEtu);
        console.log("5 : ");
        application_settings_1.setString("PrenomEtu_pre", test_item.PrenomEtu);
        console.log("6 : ");
        application_settings_1.setString("NomEtuArb_pre", test_item.NomEtuArb);
        console.log("7 : ");
        application_settings_1.setString("PrenomEtuArb_pre", test_item.PrenomEtuArb);
        console.log("8 : ");
        this.routerExtension.navigate(['/preparetest']);
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
        __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.RouterExtensions])
    ], ItemTestComponent);
    return ItemTestComponent;
}());
exports.ItemTestComponent = ItemTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0tdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFHaEYsc0RBQWdFO0FBQ2hFLDBDQUFtRDtBQU1uRCw4RUFBNkk7QUFVN0k7SUFVSSwyQkFBb0IsY0FBNkIsRUFBVyxlQUFpQztRQUF6RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFXLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUo3RixZQUFPLEdBQWtCLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLFFBQUcsR0FBa0IsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFTL0IsV0FBTSxHQUFHLElBQUksQ0FBQztJQUxSLENBQUM7SUFPUCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFFRSxJQUFJLENBQUMsR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBZ0IsQ0FBQztRQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUNsQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZCxzQ0FBc0M7WUFDckMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBSUw7Ozs7Ozs7OztlQVNPO1FBRVAsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDNUIsQ0FBQztJQUdELGtDQUFNLEdBQU4sVUFBTyxTQUFlO1FBQ3BCOzs7Ozs7YUFNSztRQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxnQ0FBUyxDQUFDLGFBQWEsRUFBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixnQ0FBUyxDQUFDLGdCQUFnQixFQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLGdDQUFTLENBQUMsZ0JBQWdCLEVBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxlQUFlLEVBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxlQUFlLEVBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxrQkFBa0IsRUFBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQTlFTztRQUFSLFlBQUssRUFBRTs7d0RBQVc7SUFDVjtRQUFSLFlBQUssRUFBRTs7Z0VBQTBCO0lBQ3pCO1FBQVIsWUFBSyxFQUFFOztxREFBZ0I7SUFTSDtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtxREFBQztJQUNyQjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQztrQ0FBTyxpQkFBVTttREFBQztJQWQzQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBV3FDLHVCQUFjLEVBQTRCLHlCQUFnQjtPQVZwRixpQkFBaUIsQ0FpRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztBQWpGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgICB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBUZXN0ICB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy90ZXN0Lm1vZGVsXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vcGFyYW1ldGVycy9jb25maWdcIjtcblxuaW1wb3J0IHtnZXRCb29sZWFuLHNldEJvb2xlYW4sZ2V0TnVtYmVyLHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFNoYXBlRW51bSwgQW5kcm9pZERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5nLXNoYWRvd1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWl0ZW0tdGVzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLXRlc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pdGVtLXRlc3QuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSB0ZXN0X2l0ZW07XG4gICAgQElucHV0KCkgZGljdGlvbmF5anNvbnRlc3Q6IGFueVtdO1xuICAgIEBJbnB1dCgpIGlzQXJGcjogbnVtYmVyO1xuXG4gICAgY29sdW1ucyA6QXJyYXk8c3RyaW5nPiA9IFsnNSosMyonLCczKiw1KiddO1xuICAgIGNvbCA6QXJyYXk8c3RyaW5nPiA9IFsnMCcsJzEnXTtcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlICAscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnNcbiAgICAgICkgeyB9XG5cbiAgICBAVmlld0NoaWxkKFwiZGV0YWlsXCIpIGRldGFpbDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiaW1nRFwiKSBpbWdEOiBFbGVtZW50UmVmO1xuXG4gICAgdG9nZ2VsID0gdHJ1ZTtcbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIG9udGFwRGV0YWlsKCkge1xuICAgICAgXG4gICAgICBsZXQgZCA9IDxWaWV3PnRoaXMuZGV0YWlsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBsZXQgaCA9IGQuaGVpZ2h0IGFzIG51bWJlcjtcbiAgICAgIGxldCBpdCA9IHRoaXMudG9nZ2VsID8gNSA6IC01O1xuXG4gICAgICB2YXIgZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaCArPSBpdDtcbiAgICAgICAgZC5oZWlnaHQgPSBoO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGVpZ2h0IDogXCIrIGQuaGVpZ2h0KTtcbiAgICAgICAgaWYgKGQuaGVpZ2h0ID09IDYwIHx8IGQuaGVpZ2h0ID09IDApIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGUpO1xuICAgICAgICB9XG4gICAgICB9LCAxKVxuXG5cblxuICAgICAgLyppZiAodGhpcy50b2dnZWwpXG4gICAgICAgIGltZ2QuYW5pbWF0ZSh7XG4gICAgICAgICAgcm90YXRlOiAxODAsXG4gICAgICAgICAgZHVyYXRpb246IDYwMFxuICAgICAgICB9KTtcbiAgICAgIGVsc2VcbiAgICAgICAgaW1nZC5hbmltYXRlKHtcbiAgICAgICAgICByb3RhdGU6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDYwMFxuICAgICAgICB9KTsqL1xuXG4gICAgICB0aGlzLnRvZ2dlbCA9ICF0aGlzLnRvZ2dlbFxuICAgIH1cblxuXG4gICAgcGFzc2VyKHRlc3RfaXRlbSA6VGVzdCl7XG4gICAgICAvKmRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgIHRpdGxlOiBcIlwiK3Rlc3RfaXRlbS50ZXN0X3RpdHJlLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBtZXNzYWdlXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgYnV0dG9uIHRleHRcIlxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgIH0pOyovXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiMSA6IFwiK3Rlc3RfaXRlbS50ZXN0X2R1cmVlKTtcbiAgICAgIHNldFN0cmluZyhcInRlc3RfaWRfcHJlXCIsdGVzdF9pdGVtLnRlc3RfaWQpO1xuICAgICAgY29uc29sZS5sb2coXCIyIDogXCIpO1xuICAgICAgc2V0U3RyaW5nKFwidGVzdF90aXRyZV9wcmVcIix0ZXN0X2l0ZW0udGVzdF90aXRyZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIjMgOiBcIik7XG4gICAgICBzZXRTdHJpbmcoXCJ0ZXN0X2R1cmVlX3ByZVwiLHRlc3RfaXRlbS50ZXN0X2R1cmVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiNCA6IFwiKTtcbiAgICAgIHNldFN0cmluZyhcIk5vbUV0dV9wcmVcIix0ZXN0X2l0ZW0uTm9tRXR1KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiNSA6IFwiKTtcbiAgICAgIHNldFN0cmluZyhcIlByZW5vbUV0dV9wcmVcIix0ZXN0X2l0ZW0uUHJlbm9tRXR1KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiNiA6IFwiKTtcbiAgICAgIHNldFN0cmluZyhcIk5vbUV0dUFyYl9wcmVcIix0ZXN0X2l0ZW0uTm9tRXR1QXJiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiNyA6IFwiKTtcbiAgICAgIHNldFN0cmluZyhcIlByZW5vbUV0dUFyYl9wcmVcIix0ZXN0X2l0ZW0uUHJlbm9tRXR1QXJiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiOCA6IFwiKTtcblxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWycvcHJlcGFyZXRlc3QnXSk7XG4gICAgIH1cbn1cbiJdfQ==