"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../../services/backend.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var color_1 = require("color");
var utility_service_1 = require("../../services/utility.service");
var config_1 = require("../../parameters/config");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(activatedRoute, backendService, routerExtension, utilityService) {
        this.activatedRoute = activatedRoute;
        this.backendService = backendService;
        this.routerExtension = routerExtension;
        this.utilityService = utilityService;
        this.isLoading = false;
        this.categories = [1, 2, 3, 6, 5, 8];
        this.isFrAr = 0;
        this.toggel = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
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
    HomeComponent.prototype.isAr_Fr = function (check) {
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
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.isLoading = true;
        this.backendService.logout()
            .then(function () {
            _this.routerExtension.navigate(['/login']);
            _this.isLoading = false;
        });
    };
    HomeComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    //--------------------------//
    HomeComponent.prototype.onPasser = function (id_test) {
        //this.routerExtension.navigate(['/welcome',id_test]);
    };
    __decorate([
        core_1.ViewChild("textAr"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "textAr", void 0);
    __decorate([
        core_1.ViewChild("textFr"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "textFr", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, backend_service_1.BackendService, router_1.RouterExtensions,
            utility_service_1.UtilityService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBZ0U7QUFDaEUsc0RBQWdFO0FBQ2hFLDBDQUFtRDtBQUduRCwrQkFBOEI7QUFDOUIsa0VBQWdFO0FBRWhFLGtEQUFpRDtBQVlqRDtJQXFCSSx1QkFBb0IsY0FBNkIsRUFBVyxjQUE4QixFQUFVLGVBQWlDLEVBQ3pILGNBQThCO1FBRHRCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVcsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ3pILG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXBCMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixlQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzNCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFXWCxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBSWdDLENBQUM7SUFFL0MsZ0NBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXJCRyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ2hELFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBSSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBRTFELENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkUsQ0FBQyxDQUNKLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR3RFLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsS0FBWTtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUU3QyxJQUFHLEtBQUssSUFBRSxDQUFDLEVBQUM7WUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQzthQUFLLElBQUksS0FBSyxJQUFFLENBQUMsRUFBQztZQUVmLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO1FBR0QsaUNBQWlDO0lBR3JDLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsOEJBQThCO0lBQzlCLGdDQUFRLEdBQVIsVUFBUyxPQUFPO1FBQ1osc0RBQXNEO0lBQzFELENBQUM7SUF0RW9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO2lEQUFDO0lBQ25CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO2lEQUFDO0lBaEIvQixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNyQyxDQUFDO3lDQXNCcUMsdUJBQWMsRUFBMkIsZ0NBQWMsRUFBMkIseUJBQWdCO1lBQ3pHLGdDQUFjO09BdEJqQyxhQUFhLENBdUZ6QjtJQUFELG9CQUFDO0NBQUEsQUF2RkQsSUF1RkM7QUF2Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyAgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSAgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVGVzdCAgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVzdC5tb2RlbFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XG5cbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBTaGFwZUVudW0sIEFuZHJvaWREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1zaGFkb3dcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6W1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBpbnNjcmlwdGlvbl9pZCA6c3RyaW5nO1xuICAgIGNhdGVnb3JpZXMgPSBbMSwyLDMsNiw1LDhdO1xuICAgIHRlc3RzOlRlc3RbXTtcbiAgICBkaWN0aW9uYXlqc29uO1xuICAgIGlzRnJBciA9IDA7XG5cbiAgIC8qIGZhYlNoYWRvdzogQW5kcm9pZERhdGEgPSB7XG4gICAgICAgIGVsZXZhdGlvbjogNixcbiAgICAgICAgYmdjb2xvcjogJyNmZjE3NDQnLFxuICAgICAgICBzaGFwZTogU2hhcGVFbnVtLk9WQUwsXG4gICAgfTsqL1xuXG4gICAgQFZpZXdDaGlsZChcInRleHRBclwiKSB0ZXh0QXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRleHRGclwiKSB0ZXh0RnI6IEVsZW1lbnRSZWY7XG5cbiAgICB0b2dnZWwgPSB0cnVlO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlICAscHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmRpY3Rpb25heWpzb24gPSByZXF1aXJlKENvbmZpZy5kaWN0aW9uYXJ5VXJsKTtcblxuICAgICAgICB0aGlzLmluc2NyaXB0aW9uX2lkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2luc2NyaXB0aW9uX2lkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTFob21lXCIpO1xuXG4gICAgICAgIHRoaXMuYmFja2VuZFNlcnZpY2UuTGlzdFRlc3QodGhpcy5pbnNjcmlwdGlvbl9pZClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGE9PntcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyaG9tZVwiICsgIHRoaXMudGVzdHNbMF0ubWF0aWVyZSApO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyaG9tZUVycm9yIFwiKyBKU09OLnN0cmluZ2lmeShlcnJvci5lcnJvcikpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgKTsgXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUzaG9tZVwiK0pTT04uc3RyaW5naWZ5KHRoaXMuZGljdGlvbmF5anNvblswXSkpO1xuXG4gICAgICBcbiAgICB9XG5cbiAgICBpc0FyX0ZyKGNoZWNrOm51bWJlcil7XG4gICAgICAgIHRoaXMuaXNGckFyID0gY2hlY2s7XG4gICAgICAgIGxldCB0ZXh0QXIgPSA8Vmlldz50aGlzLnRleHRBci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgdGV4dEZyID0gPFZpZXc+dGhpcy50ZXh0RnIubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZihjaGVjaz09MSl7XG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJkYXJrYmx1ZVwiKTtcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIndoaXRlXCIpO1xuICAgICAgICB9ZWxzZSBpZiAoY2hlY2s9PTApe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZXh0QXIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTtcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzYW1yYW5lIGlzQXJfRnJcIik7XG5cblxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzVGFibGV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsaXR5U2VydmljZS5pc1RhYmxldCgpO1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAgIG9uUGFzc2VyKGlkX3Rlc3Qpe1xuICAgICAgICAvL3RoaXMucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL3dlbGNvbWUnLGlkX3Rlc3RdKTtcbiAgICB9XG5cbn0iXX0=