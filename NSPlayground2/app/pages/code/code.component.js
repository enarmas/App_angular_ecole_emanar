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
        this.IsArFr = 0;
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
        application_settings_1.setString('IsArFr', this.IsArFr.toString());
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
        this.IsArFr = option;
        application_settings_1.setString('IsArFr', this.IsArFr.toString());
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
            this.loginError = "";
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
                    var IsArFr = application_settings_1.getString("IsArFr");
                    config_1.Config.ip = connectionString[0].ip;
                    config_1.Config.api = connectionString[0].api;
                    config_1.Config.nom = connectionString[0].nom;
                    config_1.Config.photos = connectionString[0].photos;
                    config_1.Config.database = connectionString[0].database;
                    config_1.Config.user = connectionString[0].user;
                    config_1.Config.password = connectionString[0].password;
                    config_1.Config.IsArFr = IsArFr;
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
                _this.loginError = "chemin est incorrect : " + error.message;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsNERBQTBEO0FBQzFELGtFQUFnRTtBQUNoRSx3REFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELDhFQUE2STtBQWE3STtJQXdCSSx1QkFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixJQUFVLEVBQ1YsZ0JBQWtDO1FBSGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXRCOUMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBQyxDQUFDLENBQUM7UUFFVCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVsQixhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUc5QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBUWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBRUksZ0NBQVMsQ0FBQyxRQUFRLEVBQUMsSUFB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Q1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFDLENBQUMsc0JBQXNCLENBQUM7U0FDckMsQ0FBQzt5Q0EwQjJCLDBCQUFXO1lBQ1IsZ0NBQWM7WUFDeEIsV0FBSTtZQUNRLHlCQUFnQjtPQTVCckMsYUFBYSxDQXNMekI7SUFBRCxvQkFBQztDQUFBLEFBdExELElBc0xDO0FBdExZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZC90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBwcm9tcHQsIGlucHV0VHlwZSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBDb2RlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb2RlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nzcy9yZXdvcmtjc3NcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNvZGVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvZGUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbJy4vY29kZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2VtYWlsJykgZW1haWxGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgICB1c2VyOiBVc2VyO1xyXG5cclxuICAgIGNvZGVTY2hvb2w9Jyc7XHJcbiAgICBJc0FyRnI9MDtcclxuICAgIFxyXG4gICAgZGlhbG9nT3BlbiA9IHRydWU7XHJcblxyXG4gICAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBoaWRlSWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDcwKTtcclxuICAgIHB1YmxpYyBzaG93SWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZlKTtcclxuICAgIHB1YmxpYyBzaG93SGlkZUljb246IGFueTtcclxuXHJcbiAgICBlbWFpbEVycm9yID0gXCJcIjtcclxuICAgIHBhc3NFcnJvciA9IFwiXCI7XHJcbiAgICBsb2dpbkVycm9yID0gXCJcIjtcclxuXHJcbiAgICBlbWFpbEhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgICBwYXNzSGFzRm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNvZGVTZXJ2aWNlOiBDb2RlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICBzZXRTdHJpbmcoJ0lzQXJGcicsdGhpcy5Jc0FyRnIudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlLmNzc0NsYXNzZXMuYWRkKFwibG9naW4tcGFnZS1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dIaWRlSWNvbiA9IHRoaXMuaGlkZUljb247XHJcblxyXG4gICAgICAgIGlmIChpc0FuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xyXG4gICAgICAgICAgICB2YXIgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xyXG4gICAgICAgICAgICB2YXIgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKDB4MDAwMDAwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWNvclZpZXcgPSB3aW5kb3cuZ2V0RGVjb3JWaWV3KCk7XHJcbiAgICAgICAgICAgIGRlY29yVmlldy5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoXHJcbiAgICAgICAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcclxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXHJcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cclxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29kZVNjaG9vbCA9IFwieDQ2XCI7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRGlhbG9nKG9wdGlvbil7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuSXNBckZyID0gb3B0aW9uO1xyXG4gICAgICAgIHNldFN0cmluZygnSXNBckZyJyx0aGlzLklzQXJGci50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lIDogXCIrIG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc0VtYWlsRXJyb3JzKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLmVtYWlsRXJyb3I7XHJcbiAgICAgICAgaWYgKCFoYXNFcnJvck1zZylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkRW1haWwgPSB0aGlzLnVzZXIuaGFzRW1haWwoKSAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xyXG4gICAgICAgIGxldCBoYXNFcnJvciA9IGhhc0Vycm9yTXNnIHx8ICFpc1ZhbGlkRW1haWw7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkRW1haWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gXCJcIlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGFzRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBnZXRFbWFpbEVycm9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFzc3dvcmRFcnJvcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzc0Vycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1haWxGb2N1cygpIHtcclxuICAgICAgICB0aGlzLmVtYWlsSGFzRm9jdXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYXNMb2dpbkVycm9ycygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmxvZ2luRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9naW5FcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbkVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNWYWxpZEZvcm0oKSB7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSAhIXRoaXMuZW1haWxFcnJvcjtcclxuICAgICAgICByZXR1cm4gIWlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICAgIGNoZWNrQ29kZXNjaG9vbCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEZvcm0oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlOyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMWNvZGVcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPVwiXCI7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvZGVTZXJ2aWNlLmdldEZpbGVKc29uKHRoaXMuY29kZVNjaG9vbClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGE9PntcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvKmxldCBzY2hvb2wgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbCA9IEpTT04ucGFyc2Uoc2Nob29sKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2NvZGUxIDogXCIrSlNPTi5zdHJpbmdpZnkoc2Nob29sKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMnNjb2RlMiA6IFwiK3NjaG9vbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7Ki9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2NvZGUyIDogXCIrZGF0YS52ZXJpZmllckVjb2xlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEudmVyaWZpZXJFY29sZSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RyaW5nKCdjb25uZWN0aW9uU3RyaW5nJyxKU09OLnN0cmluZ2lmeShkYXRhLmVjb2xlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIGdldFN0cmluZygnY29ubmVjdGlvblN0cmluZycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbm5lY3Rpb25TdHJpbmcgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcImNvbm5lY3Rpb25TdHJpbmdcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgSXNBckZyID0gZ2V0U3RyaW5nKFwiSXNBckZyXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLmlwID0gY29ubmVjdGlvblN0cmluZ1swXS5pcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLmFwaSA9IGNvbm5lY3Rpb25TdHJpbmdbMF0uYXBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcubm9tID0gY29ubmVjdGlvblN0cmluZ1swXS5ub20gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcucGhvdG9zID0gY29ubmVjdGlvblN0cmluZ1swXS5waG90b3MgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcuZGF0YWJhc2UgPSBjb25uZWN0aW9uU3RyaW5nWzBdLmRhdGFiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWcudXNlciA9IGNvbm5lY3Rpb25TdHJpbmdbMF0udXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnBhc3N3b3JkID0gY29ubmVjdGlvblN0cmluZ1swXS5wYXNzd29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLklzQXJGciA9IElzQXJGciA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEudmVyaWZpZXJFY29sZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBcImxlIGNvZGUgZXN0IGluY29ycmVjdCBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyY29kZUVycm9yIFwiKyBKU09OLnN0cmluZ2lmeShlcnJvci5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvciA9IFwiY2hlbWluIGVzdCBpbmNvcnJlY3QgOiBcIisgZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTNjb2RlXCIpOyBcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGlzU3VibWl0RW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2RlU2Nob29sICE9PSAnJztcclxuICAgIH1cclxuXHJcbiAgICBpc1RhYmxldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51dGlsaXR5U2VydmljZS5pc1RhYmxldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19