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
        // clear();
        if (application_settings_1.getString("connectionString")) {
            this.connectionString = JSON.parse(application_settings_1.getString("connectionString"));
            console.log(this.connectionString[0]);
            config_1.Config.ip = this.connectionString[0].ip;
            config_1.Config.api = this.connectionString[0].api;
            config_1.Config.nameSchool = this.connectionString[0].nameSchool;
            config_1.Config.photosUrl = this.connectionString[0].photosUrl;
            config_1.Config.nameDB = this.connectionString[0].nameDB;
            config_1.Config.userDB = this.connectionString[0].userDB;
            config_1.Config.passDB = this.connectionString[0].passDB;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsc0RBQStEO0FBQy9ELDhFQUE2STtBQUM3SSw4Q0FBNkM7QUFRN0M7SUFJSSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFFRyxXQUFXO1FBQ1YsSUFBRyxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUM7WUFFN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0QyxlQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEMsZUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFDLGVBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBRTtZQUN6RCxlQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUU7WUFDdkQsZUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hELGVBQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxlQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFFaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FFOUM7YUFBSTtZQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBaENRLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FLd0MseUJBQWdCO09BSjdDLFlBQVksQ0FpQ3ZCO0lBQUQsbUJBQUM7Q0FBQSxBQWpDRixJQWlDRTtBQWpDVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vcGFyYW1ldGVycy9jb25maWdcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIGNvbm5lY3Rpb25TdHJpbmcgOkpTT047XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAvLyBjbGVhcigpO1xuICAgICAgICBpZihnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKXtcblxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RyaW5nID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29ubmVjdGlvblN0cmluZ1swXSk7XG5cbiAgICAgICAgICAgIENvbmZpZy5pcCA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5pcDtcbiAgICAgICAgICAgIENvbmZpZy5hcGkgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0uYXBpO1xuICAgICAgICAgICAgQ29uZmlnLm5hbWVTY2hvb2wgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0ubmFtZVNjaG9vbCA7XG4gICAgICAgICAgICBDb25maWcucGhvdG9zVXJsID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLnBob3Rvc1VybCA7XG4gICAgICAgICAgICBDb25maWcubmFtZURCID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLm5hbWVEQjtcbiAgICAgICAgICAgIENvbmZpZy51c2VyREIgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0udXNlckRCO1xuICAgICAgICAgICAgQ29uZmlnLnBhc3NEQiA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5wYXNzREI7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NvZGVcIl0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBjb25uZWN0aW9uU3RyaW5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIEFwcENvbXBvbmVudFwiKTtcbiAgICAgICAgXG4gICAgfVxuIH1cbiJdfQ==