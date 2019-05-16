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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsc0RBQStEO0FBQy9ELDhFQUE2STtBQUM3SSw4Q0FBNkM7QUFRN0M7SUFJSSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFFSSw0QkFBSyxFQUFFLENBQUM7UUFDUixJQUFHLGdDQUFTLENBQUMsa0JBQWtCLENBQUMsRUFBQztZQUU3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRDLGVBQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4QyxlQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDMUMsZUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFFO1lBQ3pELGVBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBRTtZQUN2RCxlQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEQsZUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hELGVBQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUVoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUU5QzthQUFJO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFoQ1EsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQUt3Qyx5QkFBZ0I7T0FKN0MsWUFBWSxDQWlDdkI7SUFBRCxtQkFBQztDQUFBLEFBakNGLElBaUNFO0FBakNXLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbm5lY3Rpb25TdHJpbmcgOkpTT047XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgIGlmKGdldFN0cmluZyhcImNvbm5lY3Rpb25TdHJpbmdcIikpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RyaW5nID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdKTtcclxuXHJcbiAgICAgICAgICAgIENvbmZpZy5pcCA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5pcDtcclxuICAgICAgICAgICAgQ29uZmlnLmFwaSA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5hcGk7XHJcbiAgICAgICAgICAgIENvbmZpZy5uYW1lU2Nob29sID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLm5hbWVTY2hvb2wgO1xyXG4gICAgICAgICAgICBDb25maWcucGhvdG9zVXJsID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLnBob3Rvc1VybCA7XHJcbiAgICAgICAgICAgIENvbmZpZy5uYW1lREIgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0ubmFtZURCO1xyXG4gICAgICAgICAgICBDb25maWcudXNlckRCID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLnVzZXJEQjtcclxuICAgICAgICAgICAgQ29uZmlnLnBhc3NEQiA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5wYXNzREI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcclxuICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBjb25uZWN0aW9uU3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIEFwcENvbXBvbmVudFwiKTtcclxuICAgICAgICBcclxuICAgIH1cclxuIH1cclxuIl19