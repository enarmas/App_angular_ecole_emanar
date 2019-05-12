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
        this.isFrAr = 0;
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
        __metadata("design:paramtypes", [router_2.ActivatedRoute, backend_service_1.BackendService, router_1.RouterExtensions,
            utility_service_1.UtilityService])
    ], ListTestComponent);
    return ListTestComponent;
}());
exports.ListTestComponent = ListTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUNoRSwwQ0FBbUQ7QUFHbkQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFZakQ7SUFxQkksMkJBQW9CLGNBQTZCLEVBQVcsY0FBOEIsRUFBVSxlQUFpQyxFQUN6SCxjQUE4QjtRQUR0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFXLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUN6SCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFwQjFDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUczQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBV1gsV0FBTSxHQUFHLElBQUksQ0FBQztJQUlnQyxDQUFDO0lBRS9DLG9DQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUFyQkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNoRCxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUUxRCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRW5FLENBQUMsQ0FDSixDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUd0RSxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLEtBQVk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFFN0MsSUFBRyxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7YUFBSyxJQUFJLEtBQUssSUFBRSxDQUFDLEVBQUM7WUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QztRQUdELGlDQUFpQztJQUdyQyxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7YUFDdkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDhCQUE4QjtJQUM5QixvQ0FBUSxHQUFSLFVBQVMsT0FBTztRQUNaLHNEQUFzRDtJQUMxRCxDQUFDO0lBdEVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtxREFBQztJQUNuQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtxREFBQztJQWhCL0IsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUMsQ0FBQywyQkFBMkIsQ0FBQztTQUMxQyxDQUFDO3lDQXNCcUMsdUJBQWMsRUFBMkIsZ0NBQWMsRUFBMkIseUJBQWdCO1lBQ3pHLGdDQUFjO09BdEJqQyxpQkFBaUIsQ0F1RjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXZGRCxJQXVGQztBQXZGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyAgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSAgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVGVzdCAgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVzdC5tb2RlbFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XG5cbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBTaGFwZUVudW0sIEFuZHJvaWREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1zaGFkb3dcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QtdGVzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczpbXCIuL2xpc3QtdGVzdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RUZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGluc2NyaXB0aW9uX2lkIDpzdHJpbmc7XG4gICAgY2F0ZWdvcmllcyA9IFsxLDIsMyw2LDUsOF07XG4gICAgdGVzdHM6VGVzdFtdO1xuICAgIGRpY3Rpb25heWpzb247XG4gICAgaXNGckFyID0gMDtcblxuICAgLyogZmFiU2hhZG93OiBBbmRyb2lkRGF0YSA9IHtcbiAgICAgICAgZWxldmF0aW9uOiA2LFxuICAgICAgICBiZ2NvbG9yOiAnI2ZmMTc0NCcsXG4gICAgICAgIHNoYXBlOiBTaGFwZUVudW0uT1ZBTCxcbiAgICB9OyovXG5cbiAgICBAVmlld0NoaWxkKFwidGV4dEFyXCIpIHRleHRBcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dEZyXCIpIHRleHRGcjogRWxlbWVudFJlZjtcblxuICAgIHRvZ2dlbCA9IHRydWU7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkUm91dGU6QWN0aXZhdGVkUm91dGUgICxwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuZGljdGlvbmF5anNvbiA9IHJlcXVpcmUoQ29uZmlnLmRpY3Rpb25hcnlVcmwpO1xuXG4gICAgICAgIHRoaXMuaW5zY3JpcHRpb25faWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaW5zY3JpcHRpb25faWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMWhvbWVcIik7XG5cbiAgICAgICAgdGhpcy5iYWNrZW5kU2VydmljZS5MaXN0VGVzdCh0aGlzLmluc2NyaXB0aW9uX2lkKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YT0+e1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJob21lXCIgKyAgdGhpcy50ZXN0c1swXS5tYXRpZXJlICk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJob21lRXJyb3IgXCIrIEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICApOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTNob21lXCIrSlNPTi5zdHJpbmdpZnkodGhpcy5kaWN0aW9uYXlqc29uWzBdKSk7XG5cbiAgICAgIFxuICAgIH1cblxuICAgIGlzQXJfRnIoY2hlY2s6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5pc0ZyQXIgPSBjaGVjaztcbiAgICAgICAgbGV0IHRleHRBciA9IDxWaWV3PnRoaXMudGV4dEFyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCB0ZXh0RnIgPSA8Vmlldz50aGlzLnRleHRGci5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmKGNoZWNrPT0xKXtcbiAgICAgICAgICAgIHRleHRBci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xuICAgICAgICAgICAgdGV4dEZyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XG4gICAgICAgIH1lbHNlIGlmIChjaGVjaz09MCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRleHRBci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIndoaXRlXCIpO1xuICAgICAgICAgICAgdGV4dEZyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiZGFya2JsdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhbXJhbmUgaXNBcl9GclwiKTtcblxuXG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYmFja2VuZFNlcnZpY2UubG9nb3V0KClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNUYWJsZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVGFibGV0KCk7XG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgb25QYXNzZXIoaWRfdGVzdCl7XG4gICAgICAgIC8vdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWycvd2VsY29tZScsaWRfdGVzdF0pO1xuICAgIH1cblxufSJdfQ==