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
        application_settings_1.clear();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsc0RBQStEO0FBQy9ELDhFQUE2STtBQUM3SSw4Q0FBNkM7QUFRN0M7SUFJSSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFFSSw0QkFBSyxFQUFFLENBQUM7UUFDUixJQUFHLGdDQUFTLENBQUMsa0JBQWtCLENBQUMsRUFBQztZQUU3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRDLGVBQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4QyxlQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDMUMsZUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFFO1lBQ3pELGVBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBRTtZQUN2RCxlQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEQsZUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hELGVBQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUVoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUU5QzthQUFJO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFoQ1EsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQUt3Qyx5QkFBZ0I7T0FKN0MsWUFBWSxDQWlDdkI7SUFBRCxtQkFBQztDQUFBLEFBakNGLElBaUNFO0FBakNXLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgY29ubmVjdGlvblN0cmluZyA6SlNPTjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBjbGVhcigpO1xuICAgICAgICBpZihnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKXtcblxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RyaW5nID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29ubmVjdGlvblN0cmluZ1swXSk7XG5cbiAgICAgICAgICAgIENvbmZpZy5pcCA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5pcDtcbiAgICAgICAgICAgIENvbmZpZy5hcGkgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0uYXBpO1xuICAgICAgICAgICAgQ29uZmlnLm5hbWVTY2hvb2wgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0ubmFtZVNjaG9vbCA7XG4gICAgICAgICAgICBDb25maWcucGhvdG9zVXJsID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLnBob3Rvc1VybCA7XG4gICAgICAgICAgICBDb25maWcubmFtZURCID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLm5hbWVEQjtcbiAgICAgICAgICAgIENvbmZpZy51c2VyREIgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0udXNlckRCO1xuICAgICAgICAgICAgQ29uZmlnLnBhc3NEQiA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5wYXNzREI7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NvZGVcIl0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBjb25uZWN0aW9uU3RyaW5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIEFwcENvbXBvbmVudFwiKTtcbiAgICAgICAgXG4gICAgfVxuIH1cbiJdfQ==