"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var dialogs_1 = require("ui/dialogs");
var platform_1 = require("platform");
var app = require("application");
var backend_service_1 = require("../../services/backend.service");
var utility_service_1 = require("../../services/utility.service");
var user_model_1 = require("../../services/user.model");
var application_settings_1 = require("tns-core-modules/application-settings");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(backendService, utilityService, page, routerExtensions) {
        this.backendService = backendService;
        this.utilityService = utilityService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.isAuthenticating = false;
        this.hideIcon = String.fromCharCode(0xf070);
        this.showIcon = String.fromCharCode(0xf06e);
        this.showPassword = false;
        this.emailError = "";
        this.passError = "";
        this.loginError = "";
        this.emailHasFocus = false;
        this.passHasFocus = false;
        this.user = new user_model_1.User();
        this.user.email = "";
        this.user.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
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
        this.user.email = "elevetest";
        this.user.password = "123456";
        application_settings_1.setString("username", "youssef samrane");
        console.log(application_settings_1.getString("username"));
    };
    LoginComponent.prototype.hasEmailErrors = function () {
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
    LoginComponent.prototype.hasPasswordErrors = function () {
        var hasErrorMsg = !!this.passError;
        if (!hasErrorMsg)
            return false;
        var isValidPassword = this.user.password.length > 0;
        var hasError = hasErrorMsg || !isValidPassword;
        if (isValidPassword) {
            this.passError = "";
            return false;
        }
        return hasError;
    };
    LoginComponent.prototype.getEmailError = function () {
        return this.emailError;
    };
    LoginComponent.prototype.getPasswordError = function () {
        return this.passError;
    };
    LoginComponent.prototype.onEmailFocus = function () {
        this.emailHasFocus = true;
    };
    LoginComponent.prototype.onPasswordFocus = function () {
        this.passHasFocus = true;
        this.updateErrors(false);
    };
    LoginComponent.prototype.updateErrors = function (checkPass) {
        if (this.user.hasEmail()) {
            if (this.utilityService.isValidEmail(this.user.email)) {
                this.emailError = "";
            }
            else {
                this.emailError = "Invalid Email";
            }
        }
        else {
            this.emailError = "Email cannot be blank";
        }
        if (checkPass) {
            var length_1 = this.user.password.length;
            if (length_1 == 0) {
                this.passError = "Password cannot be blank";
            }
            else {
                this.passError = "";
            }
        }
    };
    LoginComponent.prototype.hasLoginErrors = function () {
        return !!this.loginError;
    };
    LoginComponent.prototype.getLoginError = function () {
        return this.loginError;
    };
    LoginComponent.prototype.isValidForm = function () {
        var isValid = !!this.emailError || !!this.passError;
        return !isValid;
    };
    LoginComponent.prototype.showHidePassword = function () {
        this.showPassword = !this.showPassword;
        this.showHideIcon = this.showPassword ? this.showIcon : this.hideIcon;
        var passField = this.passwordField.nativeElement;
        passField.secure = !passField.secure;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.updateErrors(true);
        if (this.isValidForm()) {
            this.isAuthenticating = true;
            // Use the backend service to login
            /*this.backendService.loginWithKinvey(this.user)
                .then(() => {
                    this.isAuthenticating = false;
                    this.routerExtensions.navigate(["/home"], { clearHistory: true });
                }).catch(error => {
                    this.isAuthenticating = false;
                    this.loginError = error.message;
                });*/
            console.log("samrane1samrane");
            this.backendService.login2(this.user)
                .subscribe(function (data) {
                console.log("samrane2samrane" + JSON.stringify(data.checkpass));
                if (JSON.stringify(data.checkpass) == "true") {
                    console.log("samrane true");
                    _this.user.inscription_id = JSON.stringify(data.inscription_id);
                    _this.isAuthenticating = false;
                    _this.routerExtensions.navigate(["/test", _this.user.inscription_id]);
                    //this.routerExtensions.navigate(["/home"], { clearHistory: true });
                }
                else if (JSON.stringify(data.checkpass) == "false") {
                    console.log("samrane false");
                    _this.isAuthenticating = false;
                    _this.loginError = "incorect";
                }
                else if (JSON.stringify(data.checkpass) == "\"false2\"") {
                    console.log("samrane false2");
                    _this.isAuthenticating = false;
                    _this.loginError = "incorect2";
                }
                else {
                    _this.isAuthenticating = false;
                }
            }, function (error) {
                console.log("samrane2samraneError " + JSON.stringify(error.error));
                _this.isAuthenticating = false;
                _this.loginError = error.message;
            });
            console.log("samrane3samrane");
        }
    };
    LoginComponent.prototype.isSubmitEnabled = function () {
        return !this.isAuthenticating && this.utilityService.isValidEmail(this.user.email);
    };
    LoginComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    // for this to work, you must configure email field in Kinvey Users
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            inputType: dialogs_1.inputType.email
        }).then(function (data) {
            if (data.result) {
                _this.backendService.forgetPassword(data.text.trim())
                    .then(function () {
                    alert("An email has been sent to your email address. Please check your email for instructions on resetting your password.");
                }, function () {
                    alert("Unfortunately, an error occurred resetting your password.");
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "passwordField", void 0);
    __decorate([
        core_1.ViewChild('email'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "emailField", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            utility_service_1.UtilityService,
            page_1.Page,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUcvRCxnQ0FBK0I7QUFDL0Isc0NBQStDO0FBRS9DLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsa0VBQWdFO0FBQ2hFLGtFQUFnRTtBQUNoRSx3REFBaUQ7QUFFakQsOEVBQTZJO0FBUzdJO0lBb0JJLHdCQUNZLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLElBQVUsRUFDVixnQkFBa0M7UUFIbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWxCOUMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTdCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFVakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBS0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFl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Q0FBYyxHQUFkO1FBQUEsaUJBa0JDO1FBakJHLGdCQUFNLENBQUM7WUFDSCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxzRUFBc0U7WUFDL0UsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLFNBQVMsRUFBRSxtQkFBUyxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDL0MsSUFBSSxDQUFDO29CQUNGLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO2dCQUNoSSxDQUFDLEVBQUU7b0JBQ0MsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7Z0JBQ3ZFLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE1T3NCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFnQixpQkFBVTt5REFBQztJQUM3QjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBYSxpQkFBVTtzREFBQztJQUhsQyxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQXNCOEIsZ0NBQWM7WUFDZCxnQ0FBYztZQUN4QixXQUFJO1lBQ1EseUJBQWdCO09BeEJyQyxjQUFjLENBK08xQjtJQUFELHFCQUFDO0NBQUEsQUEvT0QsSUErT0M7QUEvT1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IHByb21wdCwgaW5wdXRUeXBlIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgZGV2aWNlIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5tb2RlbFwiO1xyXG5cclxuaW1wb3J0IHtnZXRCb29sZWFuLHNldEJvb2xlYW4sZ2V0TnVtYmVyLHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdwYXNzd29yZCcpIHBhc3N3b3JkRmllbGQ6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdlbWFpbCcpIGVtYWlsRmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaGlkZUljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA3MCk7XHJcbiAgICBwdWJsaWMgc2hvd0ljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA2ZSk7XHJcbiAgICBwdWJsaWMgc2hvd0hpZGVJY29uOiBhbnk7XHJcbiAgICBwcml2YXRlIHNob3dQYXNzd29yZCA9IGZhbHNlO1xyXG5cclxuICAgIGVtYWlsRXJyb3IgPSBcIlwiO1xyXG4gICAgcGFzc0Vycm9yID0gXCJcIjtcclxuICAgIGxvZ2luRXJyb3IgPSBcIlwiO1xyXG5cclxuICAgIGVtYWlsSGFzRm9jdXMgPSBmYWxzZTtcclxuICAgIHBhc3NIYXNGb2N1cyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICApIHtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2UuY3NzQ2xhc3Nlcy5hZGQoXCJsb2dpbi1wYWdlLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0hpZGVJY29uID0gdGhpcy5oaWRlSWNvbjtcclxuXHJcbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XHJcbiAgICAgICAgICAgIHZhciBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XHJcbiAgICAgICAgICAgIHZhciB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcclxuICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcclxuICAgICAgICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxyXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cclxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxyXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJlbGV2ZXRlc3RcIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIjEyMzQ1NlwiO1xyXG5cclxuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VybmFtZVwiLCBcInlvdXNzZWYgc2FtcmFuZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRTdHJpbmcoXCJ1c2VybmFtZVwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc0VtYWlsRXJyb3JzKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLmVtYWlsRXJyb3I7XHJcbiAgICAgICAgaWYgKCFoYXNFcnJvck1zZylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkRW1haWwgPSB0aGlzLnVzZXIuaGFzRW1haWwoKSAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xyXG4gICAgICAgIGxldCBoYXNFcnJvciA9IGhhc0Vycm9yTXNnIHx8ICFpc1ZhbGlkRW1haWw7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkRW1haWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gXCJcIlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGFzRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc1Bhc3N3b3JkRXJyb3JzKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLnBhc3NFcnJvcjtcclxuICAgICAgICBpZiAoIWhhc0Vycm9yTXNnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWRQYXNzd29yZCA9IHRoaXMudXNlci5wYXNzd29yZC5sZW5ndGggPiAwO1xyXG4gICAgICAgIGxldCBoYXNFcnJvciA9IGhhc0Vycm9yTXNnIHx8ICFpc1ZhbGlkUGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzRXJyb3IgPSBcIlwiXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNFcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbWFpbEVycm9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFzc3dvcmRFcnJvcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzc0Vycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1haWxGb2N1cygpIHtcclxuICAgICAgICB0aGlzLmVtYWlsSGFzRm9jdXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFzc3dvcmRGb2N1cygpIHtcclxuICAgICAgICB0aGlzLnBhc3NIYXNGb2N1cyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3JzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFcnJvcnMoY2hlY2tQYXNzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlci5oYXNFbWFpbCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gXCJJbnZhbGlkIEVtYWlsXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja1Bhc3MpIHtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMudXNlci5wYXNzd29yZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzRXJyb3IgPSBcIlBhc3N3b3JkIGNhbm5vdCBiZSBibGFua1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzRXJyb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0xvZ2luRXJyb3JzKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubG9naW5FcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2dpbkVycm9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1ZhbGlkRm9ybSgpIHtcclxuICAgICAgICBsZXQgaXNWYWxpZCA9ICEhdGhpcy5lbWFpbEVycm9yIHx8ICEhdGhpcy5wYXNzRXJyb3I7XHJcbiAgICAgICAgcmV0dXJuICFpc1ZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dIaWRlUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UGFzc3dvcmQgPSAhdGhpcy5zaG93UGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5zaG93SGlkZUljb24gPSB0aGlzLnNob3dQYXNzd29yZCA/IHRoaXMuc2hvd0ljb24gOiB0aGlzLmhpZGVJY29uO1xyXG4gICAgICAgIGxldCBwYXNzRmllbGQ6IFRleHRGaWVsZCA9IHRoaXMucGFzc3dvcmRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHBhc3NGaWVsZC5zZWN1cmUgPSAhcGFzc0ZpZWxkLnNlY3VyZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVycm9ycyh0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEZvcm0oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGJhY2tlbmQgc2VydmljZSB0byBsb2dpblxyXG4gICAgICAgICAgICAvKnRoaXMuYmFja2VuZFNlcnZpY2UubG9naW5XaXRoS2ludmV5KHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvciA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTFzYW1yYW5lXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2VuZFNlcnZpY2UubG9naW4yKHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2FtcmFuZVwiK0pTT04uc3RyaW5naWZ5KGRhdGEuY2hlY2twYXNzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KGRhdGEuY2hlY2twYXNzKSA9PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5pbnNjcmlwdGlvbl9pZCA9IEpTT04uc3RyaW5naWZ5KGRhdGEuaW5zY3JpcHRpb25faWQpIDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVzdFwiICx0aGlzLnVzZXIuaW5zY3JpcHRpb25faWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKEpTT04uc3RyaW5naWZ5KGRhdGEuY2hlY2twYXNzKSA9PSBcImZhbHNlXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIGZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBcImluY29yZWN0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKEpTT04uc3RyaW5naWZ5KGRhdGEuY2hlY2twYXNzKSA9PSBcIlxcXCJmYWxzZTJcXFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIGZhbHNlMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvciA9IFwiaW5jb3JlY3QyXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJzYW1yYW5lRXJyb3IgXCIrIEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTNzYW1yYW5lXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgaXNTdWJtaXRFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0F1dGhlbnRpY2F0aW5nICYmIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNWYWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUYWJsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNUYWJsZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgdGhpcyB0byB3b3JrLCB5b3UgbXVzdCBjb25maWd1cmUgZW1haWwgZmllbGQgaW4gS2ludmV5IFVzZXJzXHJcbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLmVtYWlsXHJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2VuZFNlcnZpY2UuZm9yZ2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsIGFkZHJlc3MuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==