"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var application_settings_1 = require("application-settings");
var config_1 = require("../parameters/config");
var http_1 = require("@angular/common/http");
var _CURRENT_USER = "_CURRENT_USER";
var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
    }
    BackendService.prototype.isUserLoggedIn = function () {
        var loggedIn = !!this.user;
        return loggedIn;
    };
    BackendService.prototype.login2 = function (user) {
        /*$dbhost = "localhost";
         $dbuser = "root";
         $dbpass = "";
         $dbname = "manar2";*/
        var userJson = '[{"email": "' + user.email + '","password": "' + user.password + '","dbHost":"localhost","dbName":"' + config_1.Config.database + '","dbUser":"' + config_1.Config.user + '","dbPass":"' + config_1.Config.password + '"}]';
        return this.http.post("http://" + config_1.Config.ip + config_1.Config.api + "index.php/login", userJson);
    };
    BackendService.prototype.ListTest = function (inscription_id) {
        var inscription_idJson = '[{"inscription_id": ' + inscription_id + ',"dbHost":"localhost","dbName":"' + config_1.Config.database + '","dbUser":"' + config_1.Config.user + '","dbPass":"' + config_1.Config.password + '" }]';
        return this.http.post("http://" + config_1.Config.ip + config_1.Config.api + "index.php/tests", inscription_idJson);
    };
    BackendService.prototype.login = function (user) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (user.email === user.password) {
                    resolve();
                }
                else {
                    reject({ message: 'Invalid Email/Password, For this example both should be same' });
                }
            }, 1000);
        });
    };
    BackendService.prototype.loginWithKinvey = function (user) {
        var _this = this;
        var _user = kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser();
        if (_user) {
            return _user.logout()
                .then(function () { return _this.performLogin(user); });
        }
        else {
            return this.performLogin(user);
        }
    };
    BackendService.prototype.logout = function () {
        var _this = this;
        return kinvey_nativescript_sdk_1.Kinvey.User.logout().then(function () {
            _this.user = "";
        });
    };
    BackendService.prototype.performLogin = function (user) {
        var _this = this;
        return kinvey_nativescript_sdk_1.Kinvey.User.login(user.email, user.password).then(function (_user) {
            _this.user = JSON.stringify(_user);
        });
    };
    Object.defineProperty(BackendService.prototype, "user", {
        get: function () {
            return application_settings_1.getString(_CURRENT_USER);
        },
        set: function (theToken) {
            application_settings_1.setString(_CURRENT_USER, theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService.prototype.forgetPassword = function (email) {
        return kinvey_nativescript_sdk_1.Kinvey.User.resetPassword(email)
            .then(function (data) {
            console.debug('Data', data);
        })
            .catch(function (error) {
            console.debug('Error', error);
        });
    };
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG1FQUFpRDtBQUVqRCw2REFBNEQ7QUFHNUQsK0NBQThDO0FBSTlDLDZDQUFnRTtBQUVoRSxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFLdEM7SUFFSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0sdUNBQWMsR0FBckI7UUFDSSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLElBQVM7UUFDaEI7Ozs4QkFHc0I7UUFDckIsSUFBSSxRQUFRLEdBQUcsY0FBYyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsaUJBQWlCLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxtQ0FBbUMsR0FBQyxlQUFNLENBQUMsUUFBUSxHQUFDLGNBQWMsR0FBQyxlQUFNLENBQUMsSUFBSSxHQUFDLGNBQWMsR0FBQyxlQUFNLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztRQUU3TCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxlQUFNLENBQUMsRUFBRSxHQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUMsaUJBQWlCLEVBQUMsUUFBUSxDQUFDLENBQUU7SUFFMUYsQ0FBQztJQUVNLGlDQUFRLEdBQWYsVUFBZ0IsY0FBcUI7UUFFakMsSUFBSSxrQkFBa0IsR0FBRyxzQkFBc0IsR0FBQyxjQUFjLEdBQUMsa0NBQWtDLEdBQUMsZUFBTSxDQUFDLFFBQVEsR0FBQyxjQUFjLEdBQUMsZUFBTSxDQUFDLElBQUksR0FBQyxjQUFjLEdBQUMsZUFBTSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7UUFFbkwsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsZUFBTSxDQUFDLEVBQUUsR0FBQyxlQUFNLENBQUMsR0FBRyxHQUFDLGlCQUFpQixFQUFDLGtCQUFrQixDQUFDLENBQUU7SUFFaEcsQ0FBQztJQUdNLDhCQUFLLEdBQVosVUFBYSxJQUFVO1FBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUN4QyxVQUFVLENBQUM7Z0JBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQzlCLE9BQU8sRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSw4REFBOEQsRUFBRSxDQUFDLENBQUE7aUJBQ3RGO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sd0NBQWUsR0FBdEIsVUFBdUIsSUFBVTtRQUFqQyxpQkFRQztRQVBHLElBQUksS0FBSyxHQUFnQixnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRTtpQkFDaEIsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBSUM7UUFIRyxPQUFPLGdDQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxxQ0FBWSxHQUFwQixVQUFxQixJQUFVO1FBQS9CLGlCQUlDO1FBSEcsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBVTtZQUNoRSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQVksZ0NBQUk7YUFBaEI7WUFDSSxPQUFPLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsQ0FBQzthQUVELFVBQWlCLFFBQWdCO1lBQzdCLGdDQUFTLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUpBO0lBTU0sdUNBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixPQUFPLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7YUFDbEMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQXVCO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWpGUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLGNBQWMsQ0FrRjFCO0lBQUQscUJBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tICdraW52ZXktbmF0aXZlc2NyaXB0LXNkayc7XG5cbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vcGFyYW1ldGVycy9jb25maWdcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5jb25zdCBfQ1VSUkVOVF9VU0VSID0gXCJfQ1VSUkVOVF9VU0VSXCI7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBsb2dnZWRJbiA9ICEhdGhpcy51c2VyO1xuXG4gICAgICAgIHJldHVybiBsb2dnZWRJbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4yKHVzZXI6VXNlcikgOiAgT2JzZXJ2YWJsZTxhbnk+e1xuICAgICAgICAgICAvKiRkYmhvc3QgPSBcImxvY2FsaG9zdFwiO1xuICAgICAgICAgICAgJGRidXNlciA9IFwicm9vdFwiO1xuICAgICAgICAgICAgJGRicGFzcyA9IFwiXCI7XG4gICAgICAgICAgICAkZGJuYW1lID0gXCJtYW5hcjJcIjsqL1xuICAgICAgICAgICAgbGV0IHVzZXJKc29uID0gJ1t7XCJlbWFpbFwiOiBcIicrdXNlci5lbWFpbCsnXCIsXCJwYXNzd29yZFwiOiBcIicrdXNlci5wYXNzd29yZCsnXCIsXCJkYkhvc3RcIjpcImxvY2FsaG9zdFwiLFwiZGJOYW1lXCI6XCInK0NvbmZpZy5kYXRhYmFzZSsnXCIsXCJkYlVzZXJcIjpcIicrQ29uZmlnLnVzZXIrJ1wiLFwiZGJQYXNzXCI6XCInK0NvbmZpZy5wYXNzd29yZCsnXCJ9XSc7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vXCIrQ29uZmlnLmlwK0NvbmZpZy5hcGkrXCJpbmRleC5waHAvbG9naW5cIix1c2VySnNvbikgO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgTGlzdFRlc3QoaW5zY3JpcHRpb25faWQ6c3RyaW5nKSA6ICBPYnNlcnZhYmxlPGFueT57XG4gICAgICAgICAgIFxuICAgICAgICBsZXQgaW5zY3JpcHRpb25faWRKc29uID0gJ1t7XCJpbnNjcmlwdGlvbl9pZFwiOiAnK2luc2NyaXB0aW9uX2lkKycsXCJkYkhvc3RcIjpcImxvY2FsaG9zdFwiLFwiZGJOYW1lXCI6XCInK0NvbmZpZy5kYXRhYmFzZSsnXCIsXCJkYlVzZXJcIjpcIicrQ29uZmlnLnVzZXIrJ1wiLFwiZGJQYXNzXCI6XCInK0NvbmZpZy5wYXNzd29yZCsnXCIgfV0nO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9cIitDb25maWcuaXArQ29uZmlnLmFwaStcImluZGV4LnBocC90ZXN0c1wiLGluc2NyaXB0aW9uX2lkSnNvbikgO1xuICAgIFxuICAgIH1cblxuXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLmVtYWlsID09PSB1c2VyLnBhc3N3b3JkKSB7IFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgbWVzc2FnZTogJ0ludmFsaWQgRW1haWwvUGFzc3dvcmQsIEZvciB0aGlzIGV4YW1wbGUgYm90aCBzaG91bGQgYmUgc2FtZScgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW5XaXRoS2ludmV5KHVzZXI6IFVzZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgX3VzZXI6IEtpbnZleS5Vc2VyID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xuICAgICAgICBpZiAoX3VzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBfdXNlci5sb2dvdXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMucGVyZm9ybUxvZ2luKHVzZXIpKTtcbiAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtTG9naW4odXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGVyZm9ybUxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpLnRoZW4oKF91c2VyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IEpTT04uc3RyaW5naWZ5KF91c2VyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB1c2VyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoX0NVUlJFTlRfVVNFUik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXQgdXNlcih0aGVUb2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHNldFN0cmluZyhfQ1VSUkVOVF9VU0VSLCB0aGVUb2tlbik7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcmdldFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnJlc2V0UGFzc3dvcmQoZW1haWwpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0RhdGEnLCBkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdFcnJvcicsIGVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==