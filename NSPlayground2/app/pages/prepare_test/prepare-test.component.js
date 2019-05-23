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
        this.isArFr = config_1.Config.IsArFr;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXBhcmUtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUVoRSx3REFBa0Q7QUFFbEQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFFakQsOEVBQTZJO0FBVTdJO0lBY0ksOEJBQ1ksY0FBOEIsRUFDOUIsZUFBaUMsRUFDakMsY0FBOEI7UUFGOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmMUMsU0FBSSxHQUFRLElBQUksaUJBQUksRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLFdBQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBY2hCLENBQUM7SUFFTCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUMsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFFLGdDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxnQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFFLGdDQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLEtBQVk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxVQUFVLEdBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFFckQsSUFBRyxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDekI7YUFBSyxJQUFJLEtBQUssSUFBRSxDQUFDLEVBQUM7WUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUUxQjtRQUdELGlDQUFpQztJQUdyQyxDQUFDO0lBR0QsdUNBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUYscUJBQXFCO0lBQ3JCLHNDQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQTVEcUI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFDZjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTs0REFBQztJQVR2QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBQyxDQUFDLDhCQUE4QixDQUFDO1NBQzdDLENBQUM7eUNBZ0I4QixnQ0FBYztZQUNiLHlCQUFnQjtZQUNqQixnQ0FBYztPQWpCakMsb0JBQW9CLENBb0VoQztJQUFELDJCQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zICB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgICB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGVzdCAgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVzdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHtnZXRCb29sZWFuLHNldEJvb2xlYW4sZ2V0TnVtYmVyLHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgU2hhcGVFbnVtLCBBbmRyb2lkRGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctc2hhZG93XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcmVwYXJlLXRlc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL3ByZXBhcmUtdGVzdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmVwYXJlVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdGVzdDpUZXN0ID0gbmV3IFRlc3QoKTtcclxuICAgIGRpY3Rpb25heWpzb247XHJcbiAgICBpc0FyRnIgPSBDb25maWcuSXNBckZyO1xyXG4gICAgbXlEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwidGV4dEFyXCIpIHRleHRBcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0RnJcIikgdGV4dEZyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImJ0bkNvbVRlc3RcIikgYnRuQ29tVGVzdDogRWxlbWVudFJlZjtcclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoIFxyXG4gICAgICAgIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGljdGlvbmF5anNvbiA9IHJlcXVpcmUoQ29uZmlnLmRpY3Rpb25hcnlVcmwpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RfdGl0cmVfcHJlOiBcIitnZXRTdHJpbmcoXCJ0ZXN0X3RpdHJlX3ByZVwiKSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnRlc3QudGVzdF90aXRyZT0gZ2V0U3RyaW5nKFwidGVzdF90aXRyZV9wcmVcIik7XHJcbiAgICAgICAgdGhpcy50ZXN0LnRlc3RfaWQgPSBnZXRTdHJpbmcoXCJ0ZXN0X2lkX3ByZVwiKTtcclxuICAgICAgICB0aGlzLnRlc3QudGVzdF9kdXJlZT0gZ2V0U3RyaW5nKFwidGVzdF9kdXJlZV9wcmVcIik7XHJcbiAgICAgICAgdGhpcy50ZXN0Lk5vbUV0dT0gZ2V0U3RyaW5nKFwiTm9tRXR1X3ByZVwiKTtcclxuICAgICAgICB0aGlzLnRlc3QuUHJlbm9tRXR1PSBnZXRTdHJpbmcoXCJQcmVub21FdHVfcHJlXCIpO1xyXG4gICAgICAgIHRoaXMudGVzdC5Ob21FdHVBcmI9IGdldFN0cmluZyhcIk5vbUV0dUFyYl9wcmVcIik7XHJcbiAgICAgICAgdGhpcy50ZXN0LlByZW5vbUV0dUFyYj0gZ2V0U3RyaW5nKFwiUHJlbm9tRXR1QXJiX3ByZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FyX0ZyKHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5pc0FyRnIgPSB2YWx1ZTtcclxuICAgICAgICBsZXQgdGV4dEFyID0gPFZpZXc+dGhpcy50ZXh0QXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgdGV4dEZyID0gPFZpZXc+dGhpcy50ZXh0RnIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgYnRuQ29tVGVzdCA9IDxWaWV3PnRoaXMuYnRuQ29tVGVzdC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICBpZih2YWx1ZT09MSl7XHJcbiAgICAgICAgICAgIHRleHRBci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xyXG4gICAgICAgICAgICB0ZXh0RnIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTtcclxuICAgICAgICAgICAgYnRuQ29tVGVzdC53aWR0aCA9IDg1O1xyXG4gICAgICAgIH1lbHNlIGlmICh2YWx1ZT09MCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTtcclxuICAgICAgICAgICAgdGV4dEZyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiZGFya2JsdWVcIik7XHJcbiAgICAgICAgICAgIGJ0bkNvbVRlc3Qud2lkdGggPSAxNjA7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhbXJhbmUgaXNBcl9GclwiKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBpc1RhYmxldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51dGlsaXR5U2VydmljZS5pc1RhYmxldCgpO1xyXG4gICAgfVxyXG5cclxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgIG9uUGFzc2UoKXtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL3F1ZXN0aW9uJywgdGhpcy50ZXN0LnRlc3RfaWRdKTtcclxuICAgfVxyXG59Il19