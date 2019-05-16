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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsNERBQTBEO0FBQzFELGtFQUFnRTtBQUNoRSx3REFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELDhFQUE2STtBQVk3STtJQXNCSSx1QkFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixJQUFVLEVBQ1YsZ0JBQWtDO1FBSGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXBCOUMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRzlDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFRakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFB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SSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztvQkFDOUIsS0FBSSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQztpQkFDOUM7WUFDTCxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3BDLENBQUMsQ0FDSixDQUFDO1lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUUvQjtJQUNMLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBcEttQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUZsQyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNyQyxDQUFDO3lDQXdCMkIsMEJBQVc7WUFDUixnQ0FBYztZQUN4QixXQUFJO1lBQ1EseUJBQWdCO09BMUJyQyxhQUFhLENBeUt6QjtJQUFELG9CQUFDO0NBQUEsQUF6S0QsSUF5S0M7QUF6S1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IHByb21wdCwgaW5wdXRUeXBlIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgZGV2aWNlIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IENvZGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvZGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVycy9jb25maWdcIjtcclxuaW1wb3J0IHtnZXRCb29sZWFuLHNldEJvb2xlYW4sZ2V0TnVtYmVyLHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb2RlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb2RlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6WycuL2NvZGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdlbWFpbCcpIGVtYWlsRmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgdXNlcjogVXNlcjtcclxuXHJcbiAgICBjb2RlU2Nob29sPScnO1xyXG4gICAgZGlhbG9nT3BlbiA9IHRydWU7XHJcblxyXG4gICAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBoaWRlSWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDcwKTtcclxuICAgIHB1YmxpYyBzaG93SWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZlKTtcclxuICAgIHB1YmxpYyBzaG93SGlkZUljb246IGFueTtcclxuXHJcbiAgICBlbWFpbEVycm9yID0gXCJcIjtcclxuICAgIHBhc3NFcnJvciA9IFwiXCI7XHJcbiAgICBsb2dpbkVycm9yID0gXCJcIjtcclxuXHJcbiAgICBlbWFpbEhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgICBwYXNzSGFzRm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNvZGVTZXJ2aWNlOiBDb2RlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZS5jc3NDbGFzc2VzLmFkZChcImxvZ2luLXBhZ2UtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93SGlkZUljb24gPSB0aGlzLmhpZGVJY29uO1xyXG5cclxuICAgICAgICBpZiAoaXNBbmRyb2lkICYmIGRldmljZS5zZGtWZXJzaW9uID49ICcyMScpIHtcclxuICAgICAgICAgICAgdmFyIFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcclxuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xyXG4gICAgICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxyXG4gICAgICAgICAgICAgICAgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXHJcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxyXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXHJcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvZGVTY2hvb2wgPSBcIng0NlwiO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURpYWxvZyhvcHRpb24pe1xyXG4gICAgICAgIHRoaXMuZGlhbG9nT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZSA6IFwiKyBvcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNFbWFpbEVycm9ycygpIHtcclxuICAgICAgICBjb25zdCBoYXNFcnJvck1zZyA9ICEhdGhpcy5lbWFpbEVycm9yO1xyXG4gICAgICAgIGlmICghaGFzRXJyb3JNc2cpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZEVtYWlsID0gdGhpcy51c2VyLmhhc0VtYWlsKCkgJiYgdGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKTtcclxuICAgICAgICBsZXQgaGFzRXJyb3IgPSBoYXNFcnJvck1zZyB8fCAhaXNWYWxpZEVtYWlsO1xyXG5cclxuICAgICAgICBpZiAoaXNWYWxpZEVtYWlsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiXCJcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc0Vycm9yO1xyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgZ2V0RW1haWxFcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbEVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3N3b3JkRXJyb3IoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3NFcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtYWlsRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbEhhc0ZvY3VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFzTG9naW5FcnJvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5sb2dpbkVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvZ2luRXJyb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5FcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVmFsaWRGb3JtKCkge1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gISF0aGlzLmVtYWlsRXJyb3I7XHJcbiAgICAgICAgcmV0dXJuICFpc1ZhbGlkO1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBjaGVja0NvZGVzY2hvb2woKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRGb3JtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTFjb2RlXCIpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb2RlU2VydmljZS5nZXRGaWxlSnNvbih0aGlzLmNvZGVTY2hvb2wpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLypsZXQgc2Nob29sID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBzY2hvb2wgPSBKU09OLnBhcnNlKHNjaG9vbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMnNjb2RlMSA6IFwiK0pTT04uc3RyaW5naWZ5KHNjaG9vbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJzY29kZTIgOiBcIitzY2hvb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pOyovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMnNjb2RlMiA6IFwiK2RhdGEudmVyaWZpZXJFY29sZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnZlcmlmaWVyRWNvbGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0cmluZygnY29ubmVjdGlvblN0cmluZycsSlNPTi5zdHJpbmdpZnkoZGF0YS5lY29sZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBnZXRTdHJpbmcoJ2Nvbm5lY3Rpb25TdHJpbmcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25uZWN0aW9uU3RyaW5nID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5pcCA9IGNvbm5lY3Rpb25TdHJpbmdbMF0uaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5hcGkgPSBjb25uZWN0aW9uU3RyaW5nWzBdLmFwaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLm5hbWVTY2hvb2wgPSBjb25uZWN0aW9uU3RyaW5nWzBdLm5hbWVTY2hvb2wgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcucGhvdG9zVXJsID0gY29ubmVjdGlvblN0cmluZ1swXS5waG90b3NVcmwgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcubmFtZURCID0gY29ubmVjdGlvblN0cmluZ1swXS5uYW1lREI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy51c2VyREIgPSBjb25uZWN0aW9uU3RyaW5nWzBdLnVzZXJEQjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnBhc3NEQiA9IGNvbm5lY3Rpb25TdHJpbmdbMF0ucGFzc0RCO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhLnZlcmlmaWVyRWNvbGUgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gXCJsZSBjb2RlIGVzdCBpbmNvcnJlY3QgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMmNvZGVFcnJvciBcIisgSlNPTi5zdHJpbmdpZnkoZXJyb3IuZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgKTsgXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lM2NvZGVcIik7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgaXNTdWJtaXRFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvZGVTY2hvb2wgIT09ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGFibGV0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVGFibGV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0=