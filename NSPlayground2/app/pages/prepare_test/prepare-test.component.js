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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXBhcmUtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUVoRSx3REFBa0Q7QUFFbEQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFFakQsOEVBQTZJO0FBVTdJO0lBY0ksOEJBQXFCLGNBQThCLEVBQVUsZUFBaUMsRUFDbEYsY0FBOEI7UUFEckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2xGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWIxQyxTQUFJLEdBQVEsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBWWhCLENBQUM7SUFFTCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUMsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLGdDQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRSxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFFLGdDQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRSxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksVUFBVSxHQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRXJELElBQUcsS0FBSyxJQUFFLENBQUMsRUFBQztZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO2FBQUssSUFBSSxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FFMUI7UUFHRCxpQ0FBaUM7SUFHckMsQ0FBQztJQUdELHVDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXJEb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFDZjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTs0REFBQztJQVR2QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBQyxDQUFDLDhCQUE4QixDQUFDO1NBQzdDLENBQUM7eUNBZXVDLGdDQUFjLEVBQTJCLHlCQUFnQjtZQUNsRSxnQ0FBYztPQWZqQyxvQkFBb0IsQ0ErRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyAgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSAgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVGVzdCAgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVzdC5tb2RlbFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XG5cbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBTaGFwZUVudW0sIEFuZHJvaWREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1zaGFkb3dcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ByZXBhcmUtdGVzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczpbXCIuL3ByZXBhcmUtdGVzdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFByZXBhcmVUZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHRlc3Q6VGVzdCA9IG5ldyBUZXN0KCk7XG4gICAgZGljdGlvbmF5anNvbjtcbiAgICBpc0FyRnIgPSAwO1xuICAgIG15RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBAVmlld0NoaWxkKFwidGV4dEFyXCIpIHRleHRBcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dEZyXCIpIHRleHRGcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiYnRuQ29tVGVzdFwiKSBidG5Db21UZXN0OiBFbGVtZW50UmVmO1xuICAgIFxuXG5cblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpY3Rpb25heWpzb24gPSByZXF1aXJlKENvbmZpZy5kaWN0aW9uYXJ5VXJsKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RfdGl0cmVfcHJlOiBcIitnZXRTdHJpbmcoXCJ0ZXN0X3RpdHJlX3ByZVwiKSk7XG4gICAgXG4gICAgICAgIHRoaXMudGVzdC50ZXN0X3RpdHJlPSBnZXRTdHJpbmcoXCJ0ZXN0X3RpdHJlX3ByZVwiKTtcblxuICAgICAgICB0aGlzLnRlc3QudGVzdF9kdXJlZT0gZ2V0U3RyaW5nKFwidGVzdF9kdXJlZV9wcmVcIik7XG4gICAgICAgIHRoaXMudGVzdC5Ob21FdHU9IGdldFN0cmluZyhcIk5vbUV0dV9wcmVcIik7XG4gICAgICAgIHRoaXMudGVzdC5QcmVub21FdHU9IGdldFN0cmluZyhcIlByZW5vbUV0dV9wcmVcIik7XG4gICAgICAgIHRoaXMudGVzdC5Ob21FdHVBcmI9IGdldFN0cmluZyhcIk5vbUV0dUFyYl9wcmVcIik7XG4gICAgICAgIHRoaXMudGVzdC5QcmVub21FdHVBcmI9IGdldFN0cmluZyhcIlByZW5vbUV0dUFyYl9wcmVcIik7XG4gICAgfVxuXG4gICAgaXNBcl9Gcih2YWx1ZTpudW1iZXIpe1xuICAgICAgICB0aGlzLmlzQXJGciA9IHZhbHVlO1xuICAgICAgICBsZXQgdGV4dEFyID0gPFZpZXc+dGhpcy50ZXh0QXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHRleHRGciA9IDxWaWV3PnRoaXMudGV4dEZyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBidG5Db21UZXN0ID0gPFZpZXc+dGhpcy5idG5Db21UZXN0Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYodmFsdWU9PTEpe1xuICAgICAgICAgICAgdGV4dEFyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiZGFya2JsdWVcIik7XG4gICAgICAgICAgICB0ZXh0RnIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTtcbiAgICAgICAgICAgIGJ0bkNvbVRlc3Qud2lkdGggPSA4NTtcbiAgICAgICAgfWVsc2UgaWYgKHZhbHVlPT0wKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGV4dEFyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XG4gICAgICAgICAgICB0ZXh0RnIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJkYXJrYmx1ZVwiKTtcbiAgICAgICAgICAgIGJ0bkNvbVRlc3Qud2lkdGggPSAxNjA7XG5cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2FtcmFuZSBpc0FyX0ZyXCIpO1xuXG5cbiAgICB9XG5cbiAgIFxuICAgIGlzVGFibGV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsaXR5U2VydmljZS5pc1RhYmxldCgpO1xuICAgIH1cblxuICAgXG59Il19