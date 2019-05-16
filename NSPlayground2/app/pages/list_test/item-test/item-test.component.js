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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0tdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFHaEYsc0RBQWdFO0FBQ2hFLDBDQUFtRDtBQU1uRCw4RUFBNkk7QUFVN0k7SUFVSSwyQkFBb0IsY0FBNkIsRUFBVyxlQUFpQztRQUF6RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFXLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUo3RixZQUFPLEdBQWtCLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLFFBQUcsR0FBa0IsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFTL0IsV0FBTSxHQUFHLElBQUksQ0FBQztJQUxSLENBQUM7SUFPUCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFFRSxJQUFJLENBQUMsR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBZ0IsQ0FBQztRQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUNsQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZCxzQ0FBc0M7WUFDckMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBSUw7Ozs7Ozs7OztlQVNPO1FBRVAsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDNUIsQ0FBQztJQUdELGtDQUFNLEdBQU4sVUFBTyxTQUFlO1FBQ3BCOzs7Ozs7YUFNSztRQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxnQ0FBUyxDQUFDLGFBQWEsRUFBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixnQ0FBUyxDQUFDLGdCQUFnQixFQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLGdDQUFTLENBQUMsZ0JBQWdCLEVBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxlQUFlLEVBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxlQUFlLEVBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsZ0NBQVMsQ0FBQyxrQkFBa0IsRUFBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQTlFTztRQUFSLFlBQUssRUFBRTs7d0RBQVc7SUFDVjtRQUFSLFlBQUssRUFBRTs7Z0VBQTBCO0lBQ3pCO1FBQVIsWUFBSyxFQUFFOztxREFBZ0I7SUFTSDtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtxREFBQztJQUNyQjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQztrQ0FBTyxpQkFBVTttREFBQztJQWQzQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBV3FDLHVCQUFjLEVBQTRCLHlCQUFnQjtPQVZwRixpQkFBaUIsQ0FpRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztBQWpGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSAgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFRlc3QgIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3Rlc3QubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBTaGFwZUVudW0sIEFuZHJvaWREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1zaGFkb3dcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLWl0ZW0tdGVzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tdGVzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaXRlbS10ZXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbVRlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHRlc3RfaXRlbTtcclxuICAgIEBJbnB1dCgpIGRpY3Rpb25heWpzb250ZXN0OiBhbnlbXTtcclxuICAgIEBJbnB1dCgpIGlzQXJGcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbHVtbnMgOkFycmF5PHN0cmluZz4gPSBbJzUqLDMqJywnMyosNSonXTtcclxuICAgIGNvbCA6QXJyYXk8c3RyaW5nPiA9IFsnMCcsJzEnXTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlICAscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICAgKSB7IH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZGV0YWlsXCIpIGRldGFpbDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbWdEXCIpIGltZ0Q6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgdG9nZ2VsID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9udGFwRGV0YWlsKCkge1xyXG4gICAgICBcclxuICAgICAgbGV0IGQgPSA8Vmlldz50aGlzLmRldGFpbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBsZXQgaCA9IGQuaGVpZ2h0IGFzIG51bWJlcjtcclxuICAgICAgbGV0IGl0ID0gdGhpcy50b2dnZWwgPyA1IDogLTU7XHJcblxyXG4gICAgICB2YXIgZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBoICs9IGl0O1xyXG4gICAgICAgIGQuaGVpZ2h0ID0gaDtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGVpZ2h0IDogXCIrIGQuaGVpZ2h0KTtcclxuICAgICAgICBpZiAoZC5oZWlnaHQgPT0gNjAgfHwgZC5oZWlnaHQgPT0gMCkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEpXHJcblxyXG5cclxuXHJcbiAgICAgIC8qaWYgKHRoaXMudG9nZ2VsKVxyXG4gICAgICAgIGltZ2QuYW5pbWF0ZSh7XHJcbiAgICAgICAgICByb3RhdGU6IDE4MCxcclxuICAgICAgICAgIGR1cmF0aW9uOiA2MDBcclxuICAgICAgICB9KTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGltZ2QuYW5pbWF0ZSh7XHJcbiAgICAgICAgICByb3RhdGU6IDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogNjAwXHJcbiAgICAgICAgfSk7Ki9cclxuXHJcbiAgICAgIHRoaXMudG9nZ2VsID0gIXRoaXMudG9nZ2VsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBhc3Nlcih0ZXN0X2l0ZW0gOlRlc3Qpe1xyXG4gICAgICAvKmRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiXCIrdGVzdF9pdGVtLnRlc3RfdGl0cmUsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgYnV0dG9uIHRleHRcIlxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgIH0pOyovXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIjEgOiBcIit0ZXN0X2l0ZW0udGVzdF9kdXJlZSk7XHJcbiAgICAgIHNldFN0cmluZyhcInRlc3RfaWRfcHJlXCIsdGVzdF9pdGVtLnRlc3RfaWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjIgOiBcIik7XHJcbiAgICAgIHNldFN0cmluZyhcInRlc3RfdGl0cmVfcHJlXCIsdGVzdF9pdGVtLnRlc3RfdGl0cmUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjMgOiBcIik7XHJcbiAgICAgIHNldFN0cmluZyhcInRlc3RfZHVyZWVfcHJlXCIsdGVzdF9pdGVtLnRlc3RfZHVyZWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjQgOiBcIik7XHJcbiAgICAgIHNldFN0cmluZyhcIk5vbUV0dV9wcmVcIix0ZXN0X2l0ZW0uTm9tRXR1KTtcclxuICAgICAgY29uc29sZS5sb2coXCI1IDogXCIpO1xyXG4gICAgICBzZXRTdHJpbmcoXCJQcmVub21FdHVfcHJlXCIsdGVzdF9pdGVtLlByZW5vbUV0dSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiNiA6IFwiKTtcclxuICAgICAgc2V0U3RyaW5nKFwiTm9tRXR1QXJiX3ByZVwiLHRlc3RfaXRlbS5Ob21FdHVBcmIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjcgOiBcIik7XHJcbiAgICAgIHNldFN0cmluZyhcIlByZW5vbUV0dUFyYl9wcmVcIix0ZXN0X2l0ZW0uUHJlbm9tRXR1QXJiKTtcclxuICAgICAgY29uc29sZS5sb2coXCI4IDogXCIpO1xyXG5cclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWycvcHJlcGFyZXRlc3QnXSk7XHJcbiAgICAgfVxyXG59XHJcbiJdfQ==