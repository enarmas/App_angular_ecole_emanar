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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUcvRCxnQ0FBK0I7QUFDL0Isc0NBQStDO0FBRS9DLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsa0VBQWdFO0FBQ2hFLGtFQUFnRTtBQUNoRSx3REFBaUQ7QUFFakQsOEVBQTZJO0FBUzdJO0lBb0JJLHdCQUNZLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLElBQVUsRUFDVixnQkFBa0M7UUFIbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWxCOUMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTdCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFVakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBS0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFl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Q0FBYyxHQUFkO1FBQUEsaUJBa0JDO1FBakJHLGdCQUFNLENBQUM7WUFDSCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxzRUFBc0U7WUFDL0UsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLFNBQVMsRUFBRSxtQkFBUyxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDL0MsSUFBSSxDQUFDO29CQUNGLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO2dCQUNoSSxDQUFDLEVBQUU7b0JBQ0MsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7Z0JBQ3ZFLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE1T3NCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFnQixpQkFBVTt5REFBQztJQUM3QjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBYSxpQkFBVTtzREFBQztJQUhsQyxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQXNCOEIsZ0NBQWM7WUFDZCxnQ0FBYztZQUN4QixXQUFJO1lBQ1EseUJBQWdCO09BeEJyQyxjQUFjLENBK08xQjtJQUFELHFCQUFDO0NBQUEsQUEvT0QsSUErT0M7QUEvT1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgcHJvbXB0LCBpbnB1dFR5cGUgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5tb2RlbFwiO1xuXG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgncGFzc3dvcmQnKSBwYXNzd29yZEZpZWxkOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2VtYWlsJykgZW1haWxGaWVsZDogRWxlbWVudFJlZjtcblxuICAgIHVzZXI6IFVzZXI7XG4gICAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuXG4gICAgcHVibGljIGhpZGVJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNzApO1xuICAgIHB1YmxpYyBzaG93SWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZlKTtcbiAgICBwdWJsaWMgc2hvd0hpZGVJY29uOiBhbnk7XG4gICAgcHJpdmF0ZSBzaG93UGFzc3dvcmQgPSBmYWxzZTtcblxuICAgIGVtYWlsRXJyb3IgPSBcIlwiO1xuICAgIHBhc3NFcnJvciA9IFwiXCI7XG4gICAgbG9naW5FcnJvciA9IFwiXCI7XG5cbiAgICBlbWFpbEhhc0ZvY3VzID0gZmFsc2U7XG4gICAgcGFzc0hhc0ZvY3VzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICApIHtcbiAgICAgICBcblxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIFxuXG5cbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5jc3NDbGFzc2VzLmFkZChcImxvZ2luLXBhZ2UtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dIaWRlSWNvbiA9IHRoaXMuaGlkZUljb247XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XG4gICAgICAgICAgICB2YXIgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuXG4gICAgICAgICAgICB2YXIgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiZWxldmV0ZXN0XCI7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiMTIzNDU2XCI7XG5cbiAgICAgICAgc2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgXCJ5b3Vzc2VmIHNhbXJhbmVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGdldFN0cmluZyhcInVzZXJuYW1lXCIpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzRW1haWxFcnJvcnMoKSB7XG4gICAgICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLmVtYWlsRXJyb3I7XG4gICAgICAgIGlmICghaGFzRXJyb3JNc2cpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZEVtYWlsID0gdGhpcy51c2VyLmhhc0VtYWlsKCkgJiYgdGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgbGV0IGhhc0Vycm9yID0gaGFzRXJyb3JNc2cgfHwgIWlzVmFsaWRFbWFpbDtcblxuICAgICAgICBpZiAoaXNWYWxpZEVtYWlsKSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSBcIlwiXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGFzRXJyb3I7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc1Bhc3N3b3JkRXJyb3JzKCkge1xuICAgICAgICBjb25zdCBoYXNFcnJvck1zZyA9ICEhdGhpcy5wYXNzRXJyb3I7XG4gICAgICAgIGlmICghaGFzRXJyb3JNc2cpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA+IDA7XG4gICAgICAgIGxldCBoYXNFcnJvciA9IGhhc0Vycm9yTXNnIHx8ICFpc1ZhbGlkUGFzc3dvcmQ7XG5cbiAgICAgICAgaWYgKGlzVmFsaWRQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5wYXNzRXJyb3IgPSBcIlwiXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGFzRXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0RW1haWxFcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1haWxFcnJvcjtcbiAgICB9XG5cbiAgICBnZXRQYXNzd29yZEVycm9yKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3NFcnJvcjtcbiAgICB9XG5cbiAgICBvbkVtYWlsRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZW1haWxIYXNGb2N1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25QYXNzd29yZEZvY3VzKCkge1xuICAgICAgICB0aGlzLnBhc3NIYXNGb2N1cyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcnMoZmFsc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVycm9ycyhjaGVja1Bhc3MpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlci5oYXNFbWFpbCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiSW52YWxpZCBFbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSBcIkVtYWlsIGNhbm5vdCBiZSBibGFua1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hlY2tQYXNzKSB7XG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFzc0Vycm9yID0gXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzRXJyb3IgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzTG9naW5FcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMubG9naW5FcnJvcjtcbiAgICB9XG5cbiAgICBnZXRMb2dpbkVycm9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbkVycm9yO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNWYWxpZEZvcm0oKSB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gISF0aGlzLmVtYWlsRXJyb3IgfHwgISF0aGlzLnBhc3NFcnJvcjtcbiAgICAgICAgcmV0dXJuICFpc1ZhbGlkO1xuICAgIH1cblxuICAgIHNob3dIaWRlUGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICAgICAgICB0aGlzLnNob3dIaWRlSWNvbiA9IHRoaXMuc2hvd1Bhc3N3b3JkID8gdGhpcy5zaG93SWNvbiA6IHRoaXMuaGlkZUljb247XG4gICAgICAgIGxldCBwYXNzRmllbGQ6IFRleHRGaWVsZCA9IHRoaXMucGFzc3dvcmRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwYXNzRmllbGQuc2VjdXJlID0gIXBhc3NGaWVsZC5zZWN1cmU7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3JzKHRydWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRGb3JtKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIGJhY2tlbmQgc2VydmljZSB0byBsb2dpblxuICAgICAgICAgICAgLyp0aGlzLmJhY2tlbmRTZXJ2aWNlLmxvZ2luV2l0aEtpbnZleSh0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0pOyovXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUxc2FtcmFuZVwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2VuZFNlcnZpY2UubG9naW4yKHRoaXMudXNlcilcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2FtcmFuZVwiK0pTT04uc3RyaW5naWZ5KGRhdGEuY2hlY2twYXNzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShkYXRhLmNoZWNrcGFzcykgPT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZSB0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5pbnNjcmlwdGlvbl9pZCA9IEpTT04uc3RyaW5naWZ5KGRhdGEuaW5zY3JpcHRpb25faWQpIDsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90ZXN0XCIgLHRoaXMudXNlci5pbnNjcmlwdGlvbl9pZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoSlNPTi5zdHJpbmdpZnkoZGF0YS5jaGVja3Bhc3MpID09IFwiZmFsc2VcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIGZhbHNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvciA9IFwiaW5jb3JlY3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoSlNPTi5zdHJpbmdpZnkoZGF0YS5jaGVja3Bhc3MpID09IFwiXFxcImZhbHNlMlxcXCJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIGZhbHNlMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gXCJpbmNvcmVjdDJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2FtcmFuZUVycm9yIFwiKyBKU09OLnN0cmluZ2lmeShlcnJvci5lcnJvcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICk7IFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUzc2FtcmFuZVwiKTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgaXNTdWJtaXRFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNBdXRoZW50aWNhdGluZyAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xuICAgIH1cblxuICAgIGlzVGFibGV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsaXR5U2VydmljZS5pc1RhYmxldCgpO1xuICAgIH1cblxuICAgIC8vIGZvciB0aGlzIHRvIHdvcmssIHlvdSBtdXN0IGNvbmZpZ3VyZSBlbWFpbCBmaWVsZCBpbiBLaW52ZXkgVXNlcnNcbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGlucHV0VHlwZS5lbWFpbFxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2aWNlLmZvcmdldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsIGFkZHJlc3MuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=