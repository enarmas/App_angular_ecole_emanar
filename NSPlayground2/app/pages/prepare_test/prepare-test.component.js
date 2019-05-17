"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../../services/backend.service");
var router_1 = require("nativescript-angular/router");
var test_model_1 = require("../../services/test.model");
var color_1 = require("color");
var utility_service_1 = require("../../services/utility.service");
var config_1 = require("../../parameters/config");
var application_settings_1 = require("tns-core-modules/application-settings");
var PrepareTestComponent = /** @class */ (function () {
    function PrepareTestComponent(backendService, routerExtension, utilityService) {
        this.backendService = backendService;
        this.routerExtension = routerExtension;
        this.utilityService = utilityService;
        this.test = new test_model_1.Test();
        this.isArFr = 0;
        this.myDate = new Date();
    }
    PrepareTestComponent.prototype.ngOnInit = function () {
        this.dictionayjson = require(config_1.Config.dictionaryUrl);
        console.log("test_titre_pre: " + application_settings_1.getString("test_titre_pre"));
        this.test.test_titre = application_settings_1.getString("test_titre_pre");
        this.test.test_id = application_settings_1.getString("test_id_pre");
        this.test.test_duree = application_settings_1.getString("test_duree_pre");
        this.test.NomEtu = application_settings_1.getString("NomEtu_pre");
        this.test.PrenomEtu = application_settings_1.getString("PrenomEtu_pre");
        this.test.NomEtuArb = application_settings_1.getString("NomEtuArb_pre");
        this.test.PrenomEtuArb = application_settings_1.getString("PrenomEtuArb_pre");
    };
    PrepareTestComponent.prototype.isAr_Fr = function (value) {
        this.isArFr = value;
        var textAr = this.textAr.nativeElement;
        var textFr = this.textFr.nativeElement;
        var btnComTest = this.btnComTest.nativeElement;
        if (value == 1) {
            textAr.style.color = new color_1.Color("darkblue");
            textFr.style.color = new color_1.Color("white");
            btnComTest.width = 85;
        }
        else if (value == 0) {
            textAr.style.color = new color_1.Color("white");
            textFr.style.color = new color_1.Color("darkblue");
            btnComTest.width = 160;
        }
        //console.log("samrane isAr_Fr");
    };
    PrepareTestComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    //-----------------//
    PrepareTestComponent.prototype.onPasse = function () {
        this.routerExtension.navigate(['/question', this.test.test_id]);
    };
    __decorate([
        core_1.ViewChild("textAr"),
        __metadata("design:type", core_1.ElementRef)
    ], PrepareTestComponent.prototype, "textAr", void 0);
    __decorate([
        core_1.ViewChild("textFr"),
        __metadata("design:type", core_1.ElementRef)
    ], PrepareTestComponent.prototype, "textFr", void 0);
    __decorate([
        core_1.ViewChild("btnComTest"),
        __metadata("design:type", core_1.ElementRef)
    ], PrepareTestComponent.prototype, "btnComTest", void 0);
    PrepareTestComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./prepare-test.component.html",
            styleUrls: ["./prepare-test.component.css"]
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            router_1.RouterExtensions,
            utility_service_1.UtilityService])
    ], PrepareTestComponent);
    return PrepareTestComponent;
}());
exports.PrepareTestComponent = PrepareTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXBhcmUtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUVoRSx3REFBa0Q7QUFFbEQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFFakQsOEVBQTZJO0FBVTdJO0lBY0ksOEJBQ1ksY0FBOEIsRUFDOUIsZUFBaUMsRUFDakMsY0FBOEI7UUFGOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmMUMsU0FBSSxHQUFRLElBQUksaUJBQUksRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQWNoQixDQUFDO0lBRUwsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLGdDQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLGdDQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLGdDQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRSxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFFLGdDQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRSxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksVUFBVSxHQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRXJELElBQUcsS0FBSyxJQUFFLENBQUMsRUFBQztZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO2FBQUssSUFBSSxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FFMUI7UUFHRCxpQ0FBaUM7SUFHckMsQ0FBQztJQUdELHVDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVGLHFCQUFxQjtJQUNyQixzQ0FBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUE1RHFCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3dEQUFDO0lBQ25CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3dEQUFDO0lBQ2Y7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7NERBQUM7SUFUdkMsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUMsQ0FBQyw4QkFBOEIsQ0FBQztTQUM3QyxDQUFDO3lDQWdCOEIsZ0NBQWM7WUFDYix5QkFBZ0I7WUFDakIsZ0NBQWM7T0FqQmpDLG9CQUFvQixDQW9FaEM7SUFBRCwyQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyAgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlICAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRlc3QgIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Rlc3QubW9kZWxcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVycy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFNoYXBlRW51bSwgQW5kcm9pZERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5nLXNoYWRvd1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJlcGFyZS10ZXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9wcmVwYXJlLXRlc3QuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJlcGFyZVRlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHRlc3Q6VGVzdCA9IG5ldyBUZXN0KCk7XHJcbiAgICBkaWN0aW9uYXlqc29uO1xyXG4gICAgaXNBckZyID0gMDtcclxuICAgIG15RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcInRleHRBclwiKSB0ZXh0QXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwidGV4dEZyXCIpIHRleHRGcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJidG5Db21UZXN0XCIpIGJ0bkNvbVRlc3Q6IEVsZW1lbnRSZWY7XHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBcclxuICAgICAgICBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpY3Rpb25heWpzb24gPSByZXF1aXJlKENvbmZpZy5kaWN0aW9uYXJ5VXJsKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0X3RpdHJlX3ByZTogXCIrZ2V0U3RyaW5nKFwidGVzdF90aXRyZV9wcmVcIikpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy50ZXN0LnRlc3RfdGl0cmU9IGdldFN0cmluZyhcInRlc3RfdGl0cmVfcHJlXCIpO1xyXG4gICAgICAgIHRoaXMudGVzdC50ZXN0X2lkID0gZ2V0U3RyaW5nKFwidGVzdF9pZF9wcmVcIik7XHJcbiAgICAgICAgdGhpcy50ZXN0LnRlc3RfZHVyZWU9IGdldFN0cmluZyhcInRlc3RfZHVyZWVfcHJlXCIpO1xyXG4gICAgICAgIHRoaXMudGVzdC5Ob21FdHU9IGdldFN0cmluZyhcIk5vbUV0dV9wcmVcIik7XHJcbiAgICAgICAgdGhpcy50ZXN0LlByZW5vbUV0dT0gZ2V0U3RyaW5nKFwiUHJlbm9tRXR1X3ByZVwiKTtcclxuICAgICAgICB0aGlzLnRlc3QuTm9tRXR1QXJiPSBnZXRTdHJpbmcoXCJOb21FdHVBcmJfcHJlXCIpO1xyXG4gICAgICAgIHRoaXMudGVzdC5QcmVub21FdHVBcmI9IGdldFN0cmluZyhcIlByZW5vbUV0dUFyYl9wcmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBcl9Gcih2YWx1ZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXNBckZyID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHRleHRBciA9IDxWaWV3PnRoaXMudGV4dEFyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHRleHRGciA9IDxWaWV3PnRoaXMudGV4dEZyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGJ0bkNvbVRlc3QgPSA8Vmlldz50aGlzLmJ0bkNvbVRlc3QubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYodmFsdWU9PTEpe1xyXG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJkYXJrYmx1ZVwiKTtcclxuICAgICAgICAgICAgdGV4dEZyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XHJcbiAgICAgICAgICAgIGJ0bkNvbVRlc3Qud2lkdGggPSA4NTtcclxuICAgICAgICB9ZWxzZSBpZiAodmFsdWU9PTApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dEFyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XHJcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xyXG4gICAgICAgICAgICBidG5Db21UZXN0LndpZHRoID0gMTYwO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzYW1yYW5lIGlzQXJfRnJcIik7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgaXNUYWJsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNUYWJsZXQoKTtcclxuICAgIH1cclxuXHJcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICBvblBhc3NlKCl7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbJy9xdWVzdGlvbicsIHRoaXMudGVzdC50ZXN0X2lkXSk7XHJcbiAgIH1cclxufSJdfQ==