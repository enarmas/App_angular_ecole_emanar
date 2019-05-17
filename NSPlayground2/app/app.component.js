"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var application_settings_1 = require("tns-core-modules/application-settings");
var config_1 = require("./parameters/config");
var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    AppComponent.prototype.ngOnInit = function () {
        //clear();
        if (application_settings_1.getString("connectionString")) {
            this.connectionString = JSON.parse(application_settings_1.getString("connectionString"));
            console.log(this.connectionString[0]);
            config_1.Config.ip = this.connectionString[0].ip;
            config_1.Config.api = this.connectionString[0].api;
            config_1.Config.nameSchool = this.connectionString[0].nameSchool;
            config_1.Config.photosUrl = this.connectionString[0].photos;
            config_1.Config.nameDB = this.connectionString[0].database;
            config_1.Config.userDB = this.connectionString[0].user;
            config_1.Config.passDB = this.connectionString[0].password;
            this.routerExtensions.navigate(["/login"]);
        }
        else {
            this.routerExtensions.navigate(["/code"]);
            console.log("no connectionString");
        }
        console.log("samrane AppComponent");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "./app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsc0RBQStEO0FBQy9ELDhFQUE2STtBQUM3SSw4Q0FBNkM7QUFRN0M7SUFJSSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFFSSxVQUFVO1FBQ1YsSUFBRyxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUM7WUFFN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0QyxlQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEMsZUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFDLGVBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBRTtZQUN6RCxlQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUU7WUFDcEQsZUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2xELGVBQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxlQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFHbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FFOUM7YUFBSTtZQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBakNRLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FLd0MseUJBQWdCO09BSjdDLFlBQVksQ0FrQ3ZCO0lBQUQsbUJBQUM7Q0FBQSxBQWxDRixJQWtDRTtBQWxDVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25uZWN0aW9uU3RyaW5nIDpKU09OO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy9jbGVhcigpO1xyXG4gICAgICAgIGlmKGdldFN0cmluZyhcImNvbm5lY3Rpb25TdHJpbmdcIikpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RyaW5nID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdKTtcclxuXHJcbiAgICAgICAgICAgIENvbmZpZy5pcCA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5pcDtcclxuICAgICAgICAgICAgQ29uZmlnLmFwaSA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5hcGk7XHJcbiAgICAgICAgICAgIENvbmZpZy5uYW1lU2Nob29sID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLm5hbWVTY2hvb2wgO1xyXG4gICAgICAgICAgICBDb25maWcucGhvdG9zVXJsID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLnBob3RvcyA7XHJcbiAgICAgICAgICAgIENvbmZpZy5uYW1lREIgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0uZGF0YWJhc2U7XHJcbiAgICAgICAgICAgIENvbmZpZy51c2VyREIgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0udXNlcjtcclxuICAgICAgICAgICAgQ29uZmlnLnBhc3NEQiA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5wYXNzd29yZDtcclxuXHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gY29ubmVjdGlvblN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZSBBcHBDb21wb25lbnRcIik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiB9XHJcbiJdfQ==