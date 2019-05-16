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
        var userJson = '[{"email": "' + user.email + '","password": "' + user.password + '"}]';
        return this.http.post("http://" + config_1.Config.ip + config_1.Config.api + "index.php/login", userJson);
    };
    BackendService.prototype.ListTest = function (inscription_id) {
        var inscription_idJson = '[{"inscription_id": ' + inscription_id + ' }]';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG1FQUFpRDtBQUVqRCw2REFBNEQ7QUFHNUQsK0NBQThDO0FBSTlDLDZDQUFnRTtBQUVoRSxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFLdEM7SUFFSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0sdUNBQWMsR0FBckI7UUFDSSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLElBQVM7UUFFZixJQUFJLFFBQVEsR0FBRyxjQUFjLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxpQkFBaUIsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztRQUUvRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxlQUFNLENBQUMsRUFBRSxHQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUMsaUJBQWlCLEVBQUMsUUFBUSxDQUFDLENBQUU7SUFFMUYsQ0FBQztJQUVNLGlDQUFRLEdBQWYsVUFBZ0IsY0FBcUI7UUFFakMsSUFBSSxrQkFBa0IsR0FBRyxzQkFBc0IsR0FBQyxjQUFjLEdBQUMsS0FBSyxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLGVBQU0sQ0FBQyxFQUFFLEdBQUMsZUFBTSxDQUFDLEdBQUcsR0FBQyxpQkFBaUIsRUFBQyxrQkFBa0IsQ0FBQyxDQUFFO0lBRWhHLENBQUM7SUFHTSw4QkFBSyxHQUFaLFVBQWEsSUFBVTtRQUNuQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDeEMsVUFBVSxDQUFDO2dCQUNQLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUM5QixPQUFPLEVBQUUsQ0FBQztpQkFDYjtxQkFBTTtvQkFDSCxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsOERBQThELEVBQUUsQ0FBQyxDQUFBO2lCQUN0RjtZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHdDQUFlLEdBQXRCLFVBQXVCLElBQVU7UUFBakMsaUJBUUM7UUFQRyxJQUFJLEtBQUssR0FBZ0IsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckQsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7aUJBQ2hCLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEcsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFBcUIsSUFBVTtRQUEvQixpQkFJQztRQUhHLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQVU7WUFDaEUsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0ksT0FBTyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUM3QixnQ0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FKQTtJQU1NLHVDQUFjLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2FBQ2xDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUF1QjtZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE5RVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixjQUFjLENBK0UxQjtJQUFELHFCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcclxuXHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vcGFyYW1ldGVycy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5jb25zdCBfQ1VSUkVOVF9VU0VSID0gXCJfQ1VSUkVOVF9VU0VSXCI7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpe1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1VzZXJMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbG9nZ2VkSW4gPSAhIXRoaXMudXNlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlZEluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbjIodXNlcjpVc2VyKSA6ICBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB1c2VySnNvbiA9ICdbe1wiZW1haWxcIjogXCInK3VzZXIuZW1haWwrJ1wiLFwicGFzc3dvcmRcIjogXCInK3VzZXIucGFzc3dvcmQrJ1wifV0nO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9cIitDb25maWcuaXArQ29uZmlnLmFwaStcImluZGV4LnBocC9sb2dpblwiLHVzZXJKc29uKSA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIExpc3RUZXN0KGluc2NyaXB0aW9uX2lkOnN0cmluZykgOiAgT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGxldCBpbnNjcmlwdGlvbl9pZEpzb24gPSAnW3tcImluc2NyaXB0aW9uX2lkXCI6ICcraW5zY3JpcHRpb25faWQrJyB9XSc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9cIitDb25maWcuaXArQ29uZmlnLmFwaStcImluZGV4LnBocC90ZXN0c1wiLGluc2NyaXB0aW9uX2lkSnNvbikgO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5lbWFpbCA9PT0gdXNlci5wYXNzd29yZCkgeyBcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7IG1lc3NhZ2U6ICdJbnZhbGlkIEVtYWlsL1Bhc3N3b3JkLCBGb3IgdGhpcyBleGFtcGxlIGJvdGggc2hvdWxkIGJlIHNhbWUnIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luV2l0aEtpbnZleSh1c2VyOiBVc2VyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgX3VzZXI6IEtpbnZleS5Vc2VyID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xyXG4gICAgICAgIGlmIChfdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gX3VzZXIubG9nb3V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMucGVyZm9ybUxvZ2luKHVzZXIpKTtcclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybUxvZ2luKHVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGVyZm9ybUxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCkudGhlbigoX3VzZXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIgPSBKU09OLnN0cmluZ2lmeShfdXNlcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCB1c2VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhfQ1VSUkVOVF9VU0VSKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldCB1c2VyKHRoZVRva2VuOiBzdHJpbmcpIHtcclxuICAgICAgICBzZXRTdHJpbmcoX0NVUlJFTlRfVVNFUiwgdGhlVG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JnZXRQYXNzd29yZChlbWFpbDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnJlc2V0UGFzc3dvcmQoZW1haWwpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdEYXRhJywgZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogS2ludmV5LkJhc2VFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRXJyb3InLCBlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=