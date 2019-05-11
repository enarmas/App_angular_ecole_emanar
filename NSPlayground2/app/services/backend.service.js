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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG1FQUFpRDtBQUVqRCw2REFBNEQ7QUFHNUQsK0NBQThDO0FBSTlDLDZDQUFnRTtBQUVoRSxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFLdEM7SUFFSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0sdUNBQWMsR0FBckI7UUFDSSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLElBQVM7UUFFZixJQUFJLFFBQVEsR0FBRyxjQUFjLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxpQkFBaUIsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztRQUUvRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxlQUFNLENBQUMsRUFBRSxHQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUMsaUJBQWlCLEVBQUMsUUFBUSxDQUFDLENBQUU7SUFFMUYsQ0FBQztJQUVNLGlDQUFRLEdBQWYsVUFBZ0IsY0FBcUI7UUFFakMsSUFBSSxrQkFBa0IsR0FBRyxzQkFBc0IsR0FBQyxjQUFjLEdBQUMsS0FBSyxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLGVBQU0sQ0FBQyxFQUFFLEdBQUMsZUFBTSxDQUFDLEdBQUcsR0FBQyxpQkFBaUIsRUFBQyxrQkFBa0IsQ0FBQyxDQUFFO0lBRWhHLENBQUM7SUFHTSw4QkFBSyxHQUFaLFVBQWEsSUFBVTtRQUNuQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDeEMsVUFBVSxDQUFDO2dCQUNQLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUM5QixPQUFPLEVBQUUsQ0FBQztpQkFDYjtxQkFBTTtvQkFDSCxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsOERBQThELEVBQUUsQ0FBQyxDQUFBO2lCQUN0RjtZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHdDQUFlLEdBQXRCLFVBQXVCLElBQVU7UUFBakMsaUJBUUM7UUFQRyxJQUFJLEtBQUssR0FBZ0IsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckQsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7aUJBQ2hCLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEcsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFBcUIsSUFBVTtRQUEvQixpQkFJQztRQUhHLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQVU7WUFDaEUsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0ksT0FBTyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUM3QixnQ0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FKQTtJQU1NLHVDQUFjLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2FBQ2xDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUF1QjtZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE5RVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixjQUFjLENBK0UxQjtJQUFELHFCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xuXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuY29uc3QgX0NVUlJFTlRfVVNFUiA9IFwiX0NVUlJFTlRfVVNFUlwiO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVXNlckxvZ2dlZEluKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgbG9nZ2VkSW4gPSAhIXRoaXMudXNlcjtcblxuICAgICAgICByZXR1cm4gbG9nZ2VkSW47XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luMih1c2VyOlVzZXIpIDogIE9ic2VydmFibGU8YW55PntcbiAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdXNlckpzb24gPSAnW3tcImVtYWlsXCI6IFwiJyt1c2VyLmVtYWlsKydcIixcInBhc3N3b3JkXCI6IFwiJyt1c2VyLnBhc3N3b3JkKydcIn1dJztcbiAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9cIitDb25maWcuaXArQ29uZmlnLmFwaStcImluZGV4LnBocC9sb2dpblwiLHVzZXJKc29uKSA7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBMaXN0VGVzdChpbnNjcmlwdGlvbl9pZDpzdHJpbmcpIDogIE9ic2VydmFibGU8YW55PntcbiAgICAgICAgICAgXG4gICAgICAgIGxldCBpbnNjcmlwdGlvbl9pZEpzb24gPSAnW3tcImluc2NyaXB0aW9uX2lkXCI6ICcraW5zY3JpcHRpb25faWQrJyB9XSc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL1wiK0NvbmZpZy5pcCtDb25maWcuYXBpK1wiaW5kZXgucGhwL3Rlc3RzXCIsaW5zY3JpcHRpb25faWRKc29uKSA7XG4gICAgXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgbG9naW4odXNlcjogVXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuZW1haWwgPT09IHVzZXIucGFzc3dvcmQpIHsgXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoeyBtZXNzYWdlOiAnSW52YWxpZCBFbWFpbC9QYXNzd29yZCwgRm9yIHRoaXMgZXhhbXBsZSBib3RoIHNob3VsZCBiZSBzYW1lJyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbldpdGhLaW52ZXkodXNlcjogVXNlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCBfdXNlcjogS2ludmV5LlVzZXIgPSBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XG4gICAgICAgIGlmIChfdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIF91c2VyLmxvZ291dCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wZXJmb3JtTG9naW4odXNlcikpO1xuICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1Mb2dpbih1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtTG9naW4odXNlcjogVXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCkudGhlbigoX3VzZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gSlNPTi5zdHJpbmdpZnkoX3VzZXIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHVzZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhfQ1VSUkVOVF9VU0VSKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldCB1c2VyKHRoZVRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U3RyaW5nKF9DVVJSRU5UX1VTRVIsIHRoZVRva2VuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9yZ2V0UGFzc3dvcmQoZW1haWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRGF0YScsIGRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogS2ludmV5LkJhc2VFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0Vycm9yJywgZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19