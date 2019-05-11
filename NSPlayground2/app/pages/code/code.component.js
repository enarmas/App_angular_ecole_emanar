"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var app = require("application");
var code_service_1 = require("../../services/code.service");
var utility_service_1 = require("../../services/utility.service");
var user_model_1 = require("../../services/user.model");
var config_1 = require("../../parameters/config");
var application_settings_1 = require("tns-core-modules/application-settings");
var CodeComponent = /** @class */ (function () {
    function CodeComponent(codeService, utilityService, page, routerExtensions) {
        this.codeService = codeService;
        this.utilityService = utilityService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.codeSchool = '';
        this.dialogOpen = true;
        this.isAuthenticating = false;
        this.hideIcon = String.fromCharCode(0xf070);
        this.showIcon = String.fromCharCode(0xf06e);
        this.emailError = "";
        this.passError = "";
        this.loginError = "";
        this.emailHasFocus = false;
        this.passHasFocus = false;
        this.user = new user_model_1.User();
        this.user.email = "";
    }
    CodeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;
        if (platform_1.isAndroid && platform_1.device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);
            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
        this.codeSchool = "x46";
    };
    CodeComponent.prototype.closeDialog = function (option) {
        this.dialogOpen = false;
        console.log("samrane : " + option);
    };
    CodeComponent.prototype.hasEmailErrors = function () {
        var hasErrorMsg = !!this.emailError;
        if (!hasErrorMsg)
            return false;
        var isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
        var hasError = hasErrorMsg || !isValidEmail;
        if (isValidEmail) {
            this.emailError = "";
            return false;
        }
        return hasError;
    };
    CodeComponent.prototype.getEmailError = function () {
        return this.emailError;
    };
    CodeComponent.prototype.getPasswordError = function () {
        return this.passError;
    };
    CodeComponent.prototype.onEmailFocus = function () {
        this.emailHasFocus = true;
    };
    CodeComponent.prototype.hasLoginErrors = function () {
        return !!this.loginError;
    };
    CodeComponent.prototype.getLoginError = function () {
        return this.loginError;
    };
    CodeComponent.prototype.isValidForm = function () {
        var isValid = !!this.emailError;
        return !isValid;
    };
    CodeComponent.prototype.checkCodeschool = function () {
        var _this = this;
        if (this.isValidForm()) {
            this.isAuthenticating = true;
            console.log("samrane1code");
            this.codeService.getFileJson(this.codeSchool)
                .subscribe(function (data) {
                /*let school = data;
                school = JSON.parse(school);
                console.log("samrane2scode1 : "+JSON.stringify(school));
                console.log("samrane2scode2 : "+school);
                this.routerExtensions.navigate(["/login"]);*/
                console.log(JSON.stringify(data));
                console.log("samrane2scode2 : " + data.verifierEcole);
                if (data.verifierEcole == true) {
                    application_settings_1.setString('connectionString', JSON.stringify(data.ecole));
                    //console.log( getString('connectionString'));
                    var connectionString = JSON.parse(application_settings_1.getString("connectionString"));
                    config_1.Config.ip = connectionString[0].ip;
                    config_1.Config.api = connectionString[0].api;
                    config_1.Config.nameSchool = connectionString[0].nameSchool;
                    config_1.Config.photosUrl = connectionString[0].photosUrl;
                    config_1.Config.nameDB = connectionString[0].nameDB;
                    config_1.Config.userDB = connectionString[0].userDB;
                    config_1.Config.passDB = connectionString[0].passDB;
                    _this.isAuthenticating = false;
                    _this.routerExtensions.navigate(["/login"]);
                }
                else if (data.verifierEcole == false) {
                    _this.isAuthenticating = false;
                    _this.loginError = "le code est incorrect ";
                }
            }, function (error) {
                console.log("samrane2codeError " + JSON.stringify(error.error));
                _this.isAuthenticating = false;
                _this.loginError = error.message;
            });
            console.log("samrane3code");
        }
    };
    CodeComponent.prototype.isSubmitEnabled = function () {
        return this.codeSchool !== '';
    };
    CodeComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    __decorate([
        core_1.ViewChild('email'),
        __metadata("design:type", core_1.ElementRef)
    ], CodeComponent.prototype, "emailField", void 0);
    CodeComponent = __decorate([
        core_1.Component({
            selector: "code",
            moduleId: module.id,
            templateUrl: "./code.component.html",
            styleUrls: ['./code.component.css']
        }),
        __metadata("design:paramtypes", [code_service_1.CodeService,
            utility_service_1.UtilityService,
            page_1.Page,
            router_1.RouterExtensions])
    ], CodeComponent);
    return CodeComponent;
}());
exports.CodeComponent = CodeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsNERBQTBEO0FBQzFELGtFQUFnRTtBQUNoRSx3REFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELDhFQUE2STtBQVk3STtJQXNCSSx1QkFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixJQUFVLEVBQ1YsZ0JBQWtDO1FBSGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXBCOUMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRzlDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFRakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFB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SSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztvQkFDOUIsS0FBSSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQztpQkFDOUM7WUFDTCxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3BDLENBQUMsQ0FDSixDQUFDO1lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUUvQjtJQUNMLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBcEttQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUZsQyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNyQyxDQUFDO3lDQXdCMkIsMEJBQVc7WUFDUixnQ0FBYztZQUN4QixXQUFJO1lBQ1EseUJBQWdCO09BMUJyQyxhQUFhLENBeUt6QjtJQUFELG9CQUFDO0NBQUEsQUF6S0QsSUF5S0M7QUF6S1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgcHJvbXB0LCBpbnB1dFR5cGUgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBDb2RlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb2RlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjb2RlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvZGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6WycuL2NvZGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnZW1haWwnKSBlbWFpbEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gICAgdXNlcjogVXNlcjtcblxuICAgIGNvZGVTY2hvb2w9Jyc7XG4gICAgZGlhbG9nT3BlbiA9IHRydWU7XG5cbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgaGlkZUljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA3MCk7XG4gICAgcHVibGljIHNob3dJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNmUpO1xuICAgIHB1YmxpYyBzaG93SGlkZUljb246IGFueTtcblxuICAgIGVtYWlsRXJyb3IgPSBcIlwiO1xuICAgIHBhc3NFcnJvciA9IFwiXCI7XG4gICAgbG9naW5FcnJvciA9IFwiXCI7XG5cbiAgICBlbWFpbEhhc0ZvY3VzID0gZmFsc2U7XG4gICAgcGFzc0hhc0ZvY3VzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb2RlU2VydmljZTogQ29kZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5jc3NDbGFzc2VzLmFkZChcImxvZ2luLXBhZ2UtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dIaWRlSWNvbiA9IHRoaXMuaGlkZUljb247XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XG4gICAgICAgICAgICB2YXIgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuXG4gICAgICAgICAgICB2YXIgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29kZVNjaG9vbCA9IFwieDQ2XCI7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2xvc2VEaWFsb2cob3B0aW9uKXtcbiAgICAgICAgdGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZSA6IFwiKyBvcHRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNFbWFpbEVycm9ycygpIHtcbiAgICAgICAgY29uc3QgaGFzRXJyb3JNc2cgPSAhIXRoaXMuZW1haWxFcnJvcjtcbiAgICAgICAgaWYgKCFoYXNFcnJvck1zZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCBpc1ZhbGlkRW1haWwgPSB0aGlzLnVzZXIuaGFzRW1haWwoKSAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xuICAgICAgICBsZXQgaGFzRXJyb3IgPSBoYXNFcnJvck1zZyB8fCAhaXNWYWxpZEVtYWlsO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRW1haWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiXCJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoYXNFcnJvcjtcbiAgICB9XG5cbiAgIFxuXG4gICAgZ2V0RW1haWxFcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1haWxFcnJvcjtcbiAgICB9XG5cbiAgICBnZXRQYXNzd29yZEVycm9yKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3NFcnJvcjtcbiAgICB9XG5cbiAgICBvbkVtYWlsRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZW1haWxIYXNGb2N1cyA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBoYXNMb2dpbkVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5sb2dpbkVycm9yO1xuICAgIH1cblxuICAgIGdldExvZ2luRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luRXJyb3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1ZhbGlkRm9ybSgpIHtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSAhIXRoaXMuZW1haWxFcnJvcjtcbiAgICAgICAgcmV0dXJuICFpc1ZhbGlkO1xuICAgIH1cblxuICBcblxuICAgIGNoZWNrQ29kZXNjaG9vbCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRm9ybSgpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTFjb2RlXCIpO1xuXG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jb2RlU2VydmljZS5nZXRGaWxlSnNvbih0aGlzLmNvZGVTY2hvb2wpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGE9PntcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qbGV0IHNjaG9vbCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbCA9IEpTT04ucGFyc2Uoc2Nob29sKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMnNjb2RlMSA6IFwiK0pTT04uc3RyaW5naWZ5KHNjaG9vbCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2NvZGUyIDogXCIrc2Nob29sKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7Ki9cblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2NvZGUyIDogXCIrZGF0YS52ZXJpZmllckVjb2xlICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS52ZXJpZmllckVjb2xlID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RyaW5nKCdjb25uZWN0aW9uU3RyaW5nJyxKU09OLnN0cmluZ2lmeShkYXRhLmVjb2xlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBnZXRTdHJpbmcoJ2Nvbm5lY3Rpb25TdHJpbmcnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ubmVjdGlvblN0cmluZyA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwiY29ubmVjdGlvblN0cmluZ1wiKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5pcCA9IGNvbm5lY3Rpb25TdHJpbmdbMF0uaXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcuYXBpID0gY29ubmVjdGlvblN0cmluZ1swXS5hcGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcubmFtZVNjaG9vbCA9IGNvbm5lY3Rpb25TdHJpbmdbMF0ubmFtZVNjaG9vbCA7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcucGhvdG9zVXJsID0gY29ubmVjdGlvblN0cmluZ1swXS5waG90b3NVcmwgO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLm5hbWVEQiA9IGNvbm5lY3Rpb25TdHJpbmdbMF0ubmFtZURCO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnVzZXJEQiA9IGNvbm5lY3Rpb25TdHJpbmdbMF0udXNlckRCO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnBhc3NEQiA9IGNvbm5lY3Rpb25TdHJpbmdbMF0ucGFzc0RCO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YS52ZXJpZmllckVjb2xlID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gXCJsZSBjb2RlIGVzdCBpbmNvcnJlY3QgXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJjb2RlRXJyb3IgXCIrIEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICApOyBcbiAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTNjb2RlXCIpOyBcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgaXNTdWJtaXRFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RlU2Nob29sICE9PSAnJztcbiAgICB9XG5cbiAgICBpc1RhYmxldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNUYWJsZXQoKTtcbiAgICB9XG5cbiAgICBcbn0iXX0=