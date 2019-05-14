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
        if (value == 1) {
            textAr.style.color = new color_1.Color("darkblue");
            textFr.style.color = new color_1.Color("white");
        }
        else if (value == 0) {
            textAr.style.color = new color_1.Color("white");
            textFr.style.color = new color_1.Color("darkblue");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXBhcmUtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUVoRSx3REFBa0Q7QUFFbEQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFFakQsOEVBQTZJO0FBVTdJO0lBWUksOEJBQXFCLGNBQThCLEVBQVUsZUFBaUMsRUFDbEYsY0FBOEI7UUFEckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2xGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVgxQyxTQUFJLEdBQVEsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBVWhCLENBQUM7SUFFTCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUMsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsZ0NBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLGdDQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRSxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFFLGdDQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRSxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBRTdDLElBQUcsS0FBSyxJQUFFLENBQUMsRUFBQztZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO2FBQUssSUFBSSxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFHRCxpQ0FBaUM7SUFHckMsQ0FBQztJQUdELHVDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQS9Db0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFSL0Isb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUMsQ0FBQyw4QkFBOEIsQ0FBQztTQUM3QyxDQUFDO3lDQWF1QyxnQ0FBYyxFQUEyQix5QkFBZ0I7WUFDbEUsZ0NBQWM7T0FiakMsb0JBQW9CLENBeURoQztJQUFELDJCQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgICB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRlc3QgIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Rlc3QubW9kZWxcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xuXG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgU2hhcGVFbnVtLCBBbmRyb2lkRGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctc2hhZG93XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcmVwYXJlLXRlc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6W1wiLi9wcmVwYXJlLXRlc3QuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQcmVwYXJlVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0ZXN0OlRlc3QgPSBuZXcgVGVzdCgpO1xuICAgIGRpY3Rpb25heWpzb247XG4gICAgaXNBckZyID0gMDtcbiAgICBteURhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgQFZpZXdDaGlsZChcInRleHRBclwiKSB0ZXh0QXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRleHRGclwiKSB0ZXh0RnI6IEVsZW1lbnRSZWY7XG5cblxuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGljdGlvbmF5anNvbiA9IHJlcXVpcmUoQ29uZmlnLmRpY3Rpb25hcnlVcmwpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdF90aXRyZV9wcmU6IFwiK2dldFN0cmluZyhcInRlc3RfdGl0cmVfcHJlXCIpKTtcbiAgICBcbiAgICAgICAgdGhpcy50ZXN0LnRlc3RfdGl0cmU9IGdldFN0cmluZyhcInRlc3RfdGl0cmVfcHJlXCIpO1xuXG4gICAgICAgIHRoaXMudGVzdC50ZXN0X2R1cmVlPSBnZXRTdHJpbmcoXCJ0ZXN0X2R1cmVlX3ByZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0Lk5vbUV0dT0gZ2V0U3RyaW5nKFwiTm9tRXR1X3ByZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0LlByZW5vbUV0dT0gZ2V0U3RyaW5nKFwiUHJlbm9tRXR1X3ByZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0Lk5vbUV0dUFyYj0gZ2V0U3RyaW5nKFwiTm9tRXR1QXJiX3ByZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0LlByZW5vbUV0dUFyYj0gZ2V0U3RyaW5nKFwiUHJlbm9tRXR1QXJiX3ByZVwiKTtcbiAgICB9XG5cbiAgICBpc0FyX0ZyKHZhbHVlOm51bWJlcil7XG4gICAgICAgIHRoaXMuaXNBckZyID0gdmFsdWU7XG4gICAgICAgIGxldCB0ZXh0QXIgPSA8Vmlldz50aGlzLnRleHRBci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgdGV4dEZyID0gPFZpZXc+dGhpcy50ZXh0RnIubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZih2YWx1ZT09MSl7XG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJkYXJrYmx1ZVwiKTtcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIndoaXRlXCIpO1xuICAgICAgICB9ZWxzZSBpZiAodmFsdWU9PTApe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTtcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzYW1yYW5lIGlzQXJfRnJcIik7XG5cblxuICAgIH1cblxuICAgXG4gICAgaXNUYWJsZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVGFibGV0KCk7XG4gICAgfVxuXG4gICBcbn0iXX0=