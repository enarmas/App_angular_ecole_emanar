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
        __metadata("design:paramtypes", [router_2.ActivatedRoute,
            backend_service_1.BackendService,
            router_1.RouterExtensions,
            utility_service_1.UtilityService])
    ], ListTestComponent);
    return ListTestComponent;
}());
exports.ListTestComponent = ListTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQWdFO0FBQ2hFLHNEQUFnRTtBQUNoRSwwQ0FBbUQ7QUFHbkQsK0JBQThCO0FBQzlCLGtFQUFnRTtBQUVoRSxrREFBaUQ7QUFZakQ7SUFxQkksMkJBQ1ksY0FBNkIsRUFDN0IsY0FBOEIsRUFDOUIsZUFBaUMsRUFDakMsY0FBOEI7UUFIOUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF2QjFDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUczQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBV1gsV0FBTSxHQUFHLElBQUksQ0FBQztJQU9nQyxDQUFDO0lBRS9DLG9DQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUFyQkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNoRCxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUUxRCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRW5FLENBQUMsQ0FDSixDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUd0RSxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLEtBQVk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFFN0MsSUFBRyxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7YUFBSyxJQUFJLEtBQUssSUFBRSxDQUFDLEVBQUM7WUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QztRQUdELGlDQUFpQztJQUdyQyxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7YUFDdkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDhCQUE4QjtJQUM5QixvQ0FBUSxHQUFSLFVBQVMsT0FBTztRQUNaLHNEQUFzRDtJQUMxRCxDQUFDO0lBekVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtxREFBQztJQUNuQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtxREFBQztJQWhCL0IsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUMsQ0FBQywyQkFBMkIsQ0FBQztTQUMxQyxDQUFDO3lDQXVCNkIsdUJBQWM7WUFDYixnQ0FBYztZQUNiLHlCQUFnQjtZQUNqQixnQ0FBYztPQXpCakMsaUJBQWlCLENBMEY3QjtJQUFELHdCQUFDO0NBQUEsQUExRkQsSUEwRkM7QUExRlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zICB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgICB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGVzdCAgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVzdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHtnZXRCb29sZWFuLHNldEJvb2xlYW4sZ2V0TnVtYmVyLHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgU2hhcGVFbnVtLCBBbmRyb2lkRGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctc2hhZG93XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0LXRlc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL2xpc3QtdGVzdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0VGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBpbnNjcmlwdGlvbl9pZCA6c3RyaW5nO1xyXG4gICAgY2F0ZWdvcmllcyA9IFsxLDIsMyw2LDUsOF07XHJcbiAgICB0ZXN0czpUZXN0W107XHJcbiAgICBkaWN0aW9uYXlqc29uO1xyXG4gICAgaXNGckFyID0gMDtcclxuXHJcbiAgIC8qIGZhYlNoYWRvdzogQW5kcm9pZERhdGEgPSB7XHJcbiAgICAgICAgZWxldmF0aW9uOiA2LFxyXG4gICAgICAgIGJnY29sb3I6ICcjZmYxNzQ0JyxcclxuICAgICAgICBzaGFwZTogU2hhcGVFbnVtLk9WQUwsXHJcbiAgICB9OyovXHJcblxyXG4gICAgQFZpZXdDaGlsZChcInRleHRBclwiKSB0ZXh0QXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwidGV4dEZyXCIpIHRleHRGcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICB0b2dnZWwgPSB0cnVlO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlICAsXHJcbiAgICAgICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5kaWN0aW9uYXlqc29uID0gcmVxdWlyZShDb25maWcuZGljdGlvbmFyeVVybCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5zY3JpcHRpb25faWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaW5zY3JpcHRpb25faWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUxaG9tZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZW5kU2VydmljZS5MaXN0VGVzdCh0aGlzLmluc2NyaXB0aW9uX2lkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGE9PntcclxuICAgICAgICAgICAgICAgIHRoaXMudGVzdHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMmhvbWVcIiArICB0aGlzLnRlc3RzWzBdLm1hdGllcmUgKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyaG9tZUVycm9yIFwiKyBKU09OLnN0cmluZ2lmeShlcnJvci5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lM2hvbWVcIitKU09OLnN0cmluZ2lmeSh0aGlzLmRpY3Rpb25heWpzb25bMF0pKTtcclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlzQXJfRnIoY2hlY2s6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmlzRnJBciA9IGNoZWNrO1xyXG4gICAgICAgIGxldCB0ZXh0QXIgPSA8Vmlldz50aGlzLnRleHRBci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCB0ZXh0RnIgPSA8Vmlldz50aGlzLnRleHRGci5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICBpZihjaGVjaz09MSl7XHJcbiAgICAgICAgICAgIHRleHRBci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xyXG4gICAgICAgICAgICB0ZXh0RnIuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTtcclxuICAgICAgICB9ZWxzZSBpZiAoY2hlY2s9PTApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dEFyLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XHJcbiAgICAgICAgICAgIHRleHRGci5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcImRhcmtibHVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNhbXJhbmUgaXNBcl9GclwiKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iYWNrZW5kU2VydmljZS5sb2dvdXQoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGFibGV0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVGFibGV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICBvblBhc3NlcihpZF90ZXN0KXtcclxuICAgICAgICAvL3RoaXMucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL3dlbGNvbWUnLGlkX3Rlc3RdKTtcclxuICAgIH1cclxuXHJcbn0iXX0=