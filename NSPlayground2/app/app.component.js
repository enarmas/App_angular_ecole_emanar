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
            var IsArFr = application_settings_1.getString("IsArFr");
            console.log(this.connectionString[0]);
            config_1.Config.ip = this.connectionString[0].ip;
            config_1.Config.api = this.connectionString[0].api;
            config_1.Config.nom = this.connectionString[0].nom;
            config_1.Config.photos = this.connectionString[0].photos;
            config_1.Config.database = this.connectionString[0].database;
            config_1.Config.user = this.connectionString[0].user;
            config_1.Config.password = this.connectionString[0].password;
            config_1.Config.IsArFr = IsArFr;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsc0RBQStEO0FBQy9ELDhFQUE2STtBQUM3SSw4Q0FBNkM7QUFRN0M7SUFJSSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFFSSxVQUFVO1FBQ1YsSUFBRyxnQ0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUM7WUFFN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDbEUsSUFBSSxNQUFNLEdBQUcsZ0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRDLGVBQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4QyxlQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDMUMsZUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFO1lBQzNDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRTtZQUNqRCxlQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDcEQsZUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzVDLGVBQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNwRCxlQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBRTtZQUV4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUU5QzthQUFJO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFsQ1EsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQUt3Qyx5QkFBZ0I7T0FKN0MsWUFBWSxDQW1DdkI7SUFBRCxtQkFBQztDQUFBLEFBbkNGLElBbUNFO0FBbkNXLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbm5lY3Rpb25TdHJpbmcgOkpTT047XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvL2NsZWFyKCk7XHJcbiAgICAgICAgaWYoZ2V0U3RyaW5nKFwiY29ubmVjdGlvblN0cmluZ1wiKSl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdHJpbmcgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcImNvbm5lY3Rpb25TdHJpbmdcIikpO1xyXG4gICAgICAgICAgICBsZXQgSXNBckZyID0gZ2V0U3RyaW5nKFwiSXNBckZyXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0pO1xyXG5cclxuICAgICAgICAgICAgQ29uZmlnLmlwID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLmlwO1xyXG4gICAgICAgICAgICBDb25maWcuYXBpID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLmFwaTtcclxuICAgICAgICAgICAgQ29uZmlnLm5vbSA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5ub20gO1xyXG4gICAgICAgICAgICBDb25maWcucGhvdG9zID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLnBob3RvcyA7XHJcbiAgICAgICAgICAgIENvbmZpZy5kYXRhYmFzZSA9IHRoaXMuY29ubmVjdGlvblN0cmluZ1swXS5kYXRhYmFzZTtcclxuICAgICAgICAgICAgQ29uZmlnLnVzZXIgPSB0aGlzLmNvbm5lY3Rpb25TdHJpbmdbMF0udXNlcjtcclxuICAgICAgICAgICAgQ29uZmlnLnBhc3N3b3JkID0gdGhpcy5jb25uZWN0aW9uU3RyaW5nWzBdLnBhc3N3b3JkO1xyXG4gICAgICAgICAgICBDb25maWcuSXNBckZyID0gSXNBckZyIDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGNvbm5lY3Rpb25TdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUgQXBwQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gfVxyXG4iXX0=