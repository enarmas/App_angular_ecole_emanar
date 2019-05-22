"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../../services/backend.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var color_1 = require("color");
var utility_service_1 = require("../../services/utility.service");
var config_1 = require("../../parameters/config");
var ListTestComponent = /** @class */ (function () {
    function ListTestComponent(activatedRoute, backendService, routerExtension, utilityService) {
        this.activatedRoute = activatedRoute;
        this.backendService = backendService;
        this.routerExtension = routerExtension;
        this.utilityService = utilityService;
        this.isLoading = false;
        this.categories = [1, 2, 3, 6, 5, 8];
        this.isFrAr = config_1.Config.IsArFr;
        this.toggel = true;
    }
    ListTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dictionayjson = require(config_1.Config.dictionaryUrl);
        this.inscription_id = this.activatedRoute.snapshot.paramMap.get('inscription_id');
        console.log("samrane1home");
        this.backendService.ListTest(this.inscription_id)
            .subscribe(function (data) {
            _this.tests = data;
            console.log("samrane2home" + _this.tests[0].matiere);
        }, function (error) {
            console.log("samrane2homeError " + JSON.stringify(error.error));
        });
        console.log("samrane3home" + JSON.stringify(this.dictionayjson[0]));
    };
    ListTestComponent.prototype.isAr_Fr = function (check) {
        this.isFrAr = check;
        var textAr = this.textAr.nativeElement;
        var textFr = this.textFr.nativeElement;
        if (check == 1) {
            textAr.style.color = new color_1.Color("darkblue");
            textFr.style.color = new color_1.Color("white");
        }
        else if (check == 0) {
            textAr.style.color = new color_1.Color("white");
            textFr.style.color = new color_1.Color("darkblue");
        }
        //console.log("samrane isAr_Fr");
    };
    ListTestComponent.prototype.logout = function () {
        var _this = this;
        this.isLoading = true;
        this.backendService.logout()
            .then(function () {
            _this.routerExtension.navigate(['/login']);
            _this.isLoading = false;
        });
    };
    ListTestComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    //--------------------------//
    ListTestComponent.prototype.onPasser = function (id_test) {
        //this.routerExtension.navigate(['/welcome',id_test]);
    };
    __decorate([
        core_1.ViewChild("textAr"),
        __metadata("design:type", core_1.ElementRef)
    ], ListTestComponent.prototype, "textAr", void 0);
    __decorate([
        core_1.ViewChild("textFr"),
        __metadata("design:type", core_1.ElementRef)
    ], ListTestComponent.prototype, "textFr", void 0);
    ListTestComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./list-test.component.html",
            styleUrls: ["./list-test.component.css"]
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute,
            backend_service_1.BackendService,
            router_1.RouterExtensions,
            utility_service_1.UtilityService])
    ], ListTestComponent);
    return ListTestComponent;
}());
exports.ListTestComponent = ListTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUNoRSwwQ0FBbUQ7QUFHbkQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFZakQ7SUFxQkksMkJBQ1ksY0FBNkIsRUFDN0IsY0FBOEIsRUFDOUIsZUFBaUMsRUFDakMsY0FBOEI7UUFIOUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF2QjFDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUczQixXQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQztRQVd2QixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBT2dDLENBQUM7SUFFL0Msb0NBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXJCRyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ2hELFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBSSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBRTFELENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkUsQ0FBQyxDQUNKLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR3RFLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsS0FBWTtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUU3QyxJQUFHLEtBQUssSUFBRSxDQUFDLEVBQUM7WUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQzthQUFLLElBQUksS0FBSyxJQUFFLENBQUMsRUFBQztZQUVmLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO1FBR0QsaUNBQWlDO0lBR3JDLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsOEJBQThCO0lBQzlCLG9DQUFRLEdBQVIsVUFBUyxPQUFPO1FBQ1osc0RBQXNEO0lBQzFELENBQUM7SUF6RW9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3FEQUFDO0lBQ25CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3FEQUFDO0lBaEIvQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBQyxDQUFDLDJCQUEyQixDQUFDO1NBQzFDLENBQUM7eUNBdUI2Qix1QkFBYztZQUNiLGdDQUFjO1lBQ2IseUJBQWdCO1lBQ2pCLGdDQUFjO09BekJqQyxpQkFBaUIsQ0EwRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTFGRCxJQTBGQztBQTFGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSAgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUZXN0ICB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90ZXN0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBTaGFwZUVudW0sIEFuZHJvaWREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1zaGFkb3dcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QtdGVzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vbGlzdC10ZXN0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RUZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGluc2NyaXB0aW9uX2lkIDpzdHJpbmc7XHJcbiAgICBjYXRlZ29yaWVzID0gWzEsMiwzLDYsNSw4XTtcclxuICAgIHRlc3RzOlRlc3RbXTtcclxuICAgIGRpY3Rpb25heWpzb247XHJcbiAgICBpc0ZyQXIgPSBDb25maWcuSXNBckZyO1xyXG5cclxuICAgLyogZmFiU2hhZG93OiBBbmRyb2lkRGF0YSA9IHtcclxuICAgICAgICBlbGV2YXRpb246IDYsXHJcbiAgICAgICAgYmdjb2xvcjogJyNmZjE3NDQnLFxyXG4gICAgICAgIHNoYXBlOiBTaGFwZUVudW0uT1ZBTCxcclxuICAgIH07Ki9cclxuXHJcbiAgICBAVmlld0NoaWxkKFwidGV4dEFyXCIpIHRleHRBcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0RnJcIikgdGV4dEZyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHRvZ2dlbCA9IHRydWU7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6QWN0aXZhdGVkUm91dGUgICxcclxuICAgICAgICBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmRpY3Rpb25heWpzb24gPSByZXF1aXJlKENvbmZpZy5kaWN0aW9uYXJ5VXJsKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnNjcmlwdGlvbl9pZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpbnNjcmlwdGlvbl9pZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTFob21lXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2aWNlLkxpc3RUZXN0KHRoaXMuaW5zY3JpcHRpb25faWQpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyaG9tZVwiICsgIHRoaXMudGVzdHNbMF0ubWF0aWVyZSApO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJob21lRXJyb3IgXCIrIEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICApOyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUzaG9tZVwiK0pTT04uc3RyaW5naWZ5KHRoaXMuZGljdGlvbmF5anNvblswXSkpO1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaXNBcl9GcihjaGVjazpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXNGckFyID0gY2hlY2s7XHJcbiAgICAgICAgbGV0IHRleHRBciA9IDxWaWV3PnRoaXMudGV4dEFyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHRleHRGciA9IDxWaWV3PnRoaXMudGV4dEZyLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmKGNoZWNrPT0xKXtcclxuICAgICAgICAgICAgdGV4dEFyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiZGFya2JsdWVcIik7XHJcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIndoaXRlXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmIChjaGVjaz09MCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTtcclxuICAgICAgICAgICAgdGV4dEZyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiZGFya2JsdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2FtcmFuZSBpc0FyX0ZyXCIpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUYWJsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNUYWJsZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgIG9uUGFzc2VyKGlkX3Rlc3Qpe1xyXG4gICAgICAgIC8vdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWycvd2VsY29tZScsaWRfdGVzdF0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==