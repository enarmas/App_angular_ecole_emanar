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
        __metadata("design:paramtypes", [backend_service_1.BackendService, router_1.RouterExtensions,
            utility_service_1.UtilityService])
    ], PrepareTestComponent);
    return PrepareTestComponent;
}());
exports.PrepareTestComponent = PrepareTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXBhcmUtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUVoRSx3REFBa0Q7QUFFbEQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFFakQsOEVBQTZJO0FBVTdJO0lBY0ksOEJBQXFCLGNBQThCLEVBQVUsZUFBaUMsRUFDbEYsY0FBOEI7UUFEckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2xGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWIxQyxTQUFJLEdBQVEsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBWWhCLENBQUM7SUFFTCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUMsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLGdDQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRSxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFFLGdDQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRSxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksVUFBVSxHQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRXJELElBQUcsS0FBSyxJQUFFLENBQUMsRUFBQztZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO2FBQUssSUFBSSxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FFMUI7UUFHRCxpQ0FBaUM7SUFHckMsQ0FBQztJQUdELHVDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXJEb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFDZjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTs0REFBQztJQVR2QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBQyxDQUFDLDhCQUE4QixDQUFDO1NBQzdDLENBQUM7eUNBZXVDLGdDQUFjLEVBQTJCLHlCQUFnQjtZQUNsRSxnQ0FBYztPQWZqQyxvQkFBb0IsQ0ErRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSAgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUZXN0ICB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90ZXN0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBTaGFwZUVudW0sIEFuZHJvaWREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1zaGFkb3dcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ByZXBhcmUtdGVzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vcHJlcGFyZS10ZXN0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByZXBhcmVUZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB0ZXN0OlRlc3QgPSBuZXcgVGVzdCgpO1xyXG4gICAgZGljdGlvbmF5anNvbjtcclxuICAgIGlzQXJGciA9IDA7XHJcbiAgICBteURhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0QXJcIikgdGV4dEFyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcInRleHRGclwiKSB0ZXh0RnI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiYnRuQ29tVGVzdFwiKSBidG5Db21UZXN0OiBFbGVtZW50UmVmO1xyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaWN0aW9uYXlqc29uID0gcmVxdWlyZShDb25maWcuZGljdGlvbmFyeVVybCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdF90aXRyZV9wcmU6IFwiK2dldFN0cmluZyhcInRlc3RfdGl0cmVfcHJlXCIpKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudGVzdC50ZXN0X3RpdHJlPSBnZXRTdHJpbmcoXCJ0ZXN0X3RpdHJlX3ByZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXN0LnRlc3RfZHVyZWU9IGdldFN0cmluZyhcInRlc3RfZHVyZWVfcHJlXCIpO1xyXG4gICAgICAgIHRoaXMudGVzdC5Ob21FdHU9IGdldFN0cmluZyhcIk5vbUV0dV9wcmVcIik7XHJcbiAgICAgICAgdGhpcy50ZXN0LlByZW5vbUV0dT0gZ2V0U3RyaW5nKFwiUHJlbm9tRXR1X3ByZVwiKTtcclxuICAgICAgICB0aGlzLnRlc3QuTm9tRXR1QXJiPSBnZXRTdHJpbmcoXCJOb21FdHVBcmJfcHJlXCIpO1xyXG4gICAgICAgIHRoaXMudGVzdC5QcmVub21FdHVBcmI9IGdldFN0cmluZyhcIlByZW5vbUV0dUFyYl9wcmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBcl9Gcih2YWx1ZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXNBckZyID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHRleHRBciA9IDxWaWV3PnRoaXMudGV4dEFyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHRleHRGciA9IDxWaWV3PnRoaXMudGV4dEZyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGJ0bkNvbVRlc3QgPSA8Vmlldz50aGlzLmJ0bkNvbVRlc3QubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYodmFsdWU9PTEpe1xyXG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJkYXJrYmx1ZVwiKTtcclxuICAgICAgICAgICAgdGV4dEZyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XHJcbiAgICAgICAgICAgIGJ0bkNvbVRlc3Qud2lkdGggPSA4NTtcclxuICAgICAgICB9ZWxzZSBpZiAodmFsdWU9PTApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dEFyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XHJcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xyXG4gICAgICAgICAgICBidG5Db21UZXN0LndpZHRoID0gMTYwO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzYW1yYW5lIGlzQXJfRnJcIik7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgaXNUYWJsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNUYWJsZXQoKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG59Il19