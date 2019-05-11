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
        var isValid = !!this.emailError || !!this.passError;
        return !isValid;
    };
    CodeComponent.prototype.checkCodeschool = function () {
        if (this.isValidForm()) {
            this.isAuthenticating = true;
            console.log("samrane1code");
            /* dialogs.action({
                 message: "Choisissez une langue",
                 cancelButtonText: "Cancel text",
                 actions: ["fالعربية", "Francais"]
             }).then(function (result) {
                 console.log("Dialog result: " + result);
                 if(result == "fالعربية"){
                     //Do action1
                 }else if(result == "Francais"){
                     //Do action2
                 }
             });*/
            /*this.codeService.getFileJson(this.codeSchool)
            .subscribe(
                data=>{
                   
                    /*let school = data;
                    school = JSON.parse(school);
                    console.log("samrane2scode1 : "+JSON.stringify(school));
                    console.log("samrane2scode2 : "+school);
                    this.routerExtensions.navigate(["/login"]);

                    console.log( JSON.stringify(data));
                    console.log("samrane2scode2 : "+data.verifierEcole );

                    if(data.verifierEcole == true){
                        setString('connectionString',JSON.stringify(data.ecole));
                       //console.log( getString('connectionString'));
                       let connectionString = JSON.parse(getString("connectionString"));
           
                       Config.ip = connectionString[0].ip;
                       Config.api = connectionString[0].api;
                       Config.nameSchool = connectionString[0].nameSchool ;
                       Config.photosUrl = connectionString[0].photosUrl ;
                       Config.nameDB = connectionString[0].nameDB;
                       Config.userDB = connectionString[0].userDB;
                       Config.passDB = connectionString[0].passDB;

                        this.routerExtensions.navigate(["/login"]);
                    }else if(data.verifierEcole == false){
                        this.loginError = "le code est incorrect ";
                    }
                },
                error=>{
                    console.log("samrane2codeError "+ JSON.stringify(error.error));
                    this.isAuthenticating = false;
                    this.loginError = error.message;
                }
            ); */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsNERBQTBEO0FBQzFELGtFQUFnRTtBQUNoRSx3REFBaUQ7QUFhakQ7SUFzQkksdUJBQ1ksV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsSUFBVSxFQUNWLGdCQUFrQztRQUhsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFwQjlDLGVBQVUsR0FBQyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVsQixhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUc5QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBUWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFD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VUFBVSxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBL0ttQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUZsQyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNyQyxDQUFDO3lDQXdCMkIsMEJBQVc7WUFDUixnQ0FBYztZQUN4QixXQUFJO1lBQ1EseUJBQWdCO09BMUJyQyxhQUFhLENBb0x6QjtJQUFELG9CQUFDO0NBQUEsQUFwTEQsSUFvTEM7QUFwTFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgcHJvbXB0LCBpbnB1dFR5cGUgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBDb2RlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb2RlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY29kZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb2RlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOlsnLi9jb2RlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2VtYWlsJykgZW1haWxGaWVsZDogRWxlbWVudFJlZjtcblxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBjb2RlU2Nob29sPScnO1xuICAgIGRpYWxvZ09wZW4gPSB0cnVlO1xuXG4gICAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuXG4gICAgcHVibGljIGhpZGVJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNzApO1xuICAgIHB1YmxpYyBzaG93SWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZlKTtcbiAgICBwdWJsaWMgc2hvd0hpZGVJY29uOiBhbnk7XG5cbiAgICBlbWFpbEVycm9yID0gXCJcIjtcbiAgICBwYXNzRXJyb3IgPSBcIlwiO1xuICAgIGxvZ2luRXJyb3IgPSBcIlwiO1xuXG4gICAgZW1haWxIYXNGb2N1cyA9IGZhbHNlO1xuICAgIHBhc3NIYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY29kZVNlcnZpY2U6IENvZGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuY3NzQ2xhc3Nlcy5hZGQoXCJsb2dpbi1wYWdlLWJhY2tncm91bmRcIik7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93SGlkZUljb24gPSB0aGlzLmhpZGVJY29uO1xuXG4gICAgICAgIGlmIChpc0FuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgICAgICAgICAgdmFyIFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgICAgIHZhciB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKDB4MDAwMDAwKTtcblxuICAgICAgICAgICAgdmFyIGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcbiAgICAgICAgICAgIGRlY29yVmlldy5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoXG4gICAgICAgICAgICAgICAgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvZGVTY2hvb2wgPSBcIng0NlwiO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNsb3NlRGlhbG9nKG9wdGlvbil7XG4gICAgICAgIHRoaXMuZGlhbG9nT3BlbiA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUgOiBcIisgb3B0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzRW1haWxFcnJvcnMoKSB7XG4gICAgICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLmVtYWlsRXJyb3I7XG4gICAgICAgIGlmICghaGFzRXJyb3JNc2cpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZEVtYWlsID0gdGhpcy51c2VyLmhhc0VtYWlsKCkgJiYgdGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgbGV0IGhhc0Vycm9yID0gaGFzRXJyb3JNc2cgfHwgIWlzVmFsaWRFbWFpbDtcblxuICAgICAgICBpZiAoaXNWYWxpZEVtYWlsKSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSBcIlwiXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGFzRXJyb3I7XG4gICAgfVxuXG4gICBcblxuICAgIGdldEVtYWlsRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsRXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0UGFzc3dvcmRFcnJvcigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzRXJyb3I7XG4gICAgfVxuXG4gICAgb25FbWFpbEZvY3VzKCkge1xuICAgICAgICB0aGlzLmVtYWlsSGFzRm9jdXMgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgaGFzTG9naW5FcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMubG9naW5FcnJvcjtcbiAgICB9XG5cbiAgICBnZXRMb2dpbkVycm9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbkVycm9yO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNWYWxpZEZvcm0oKSB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gISF0aGlzLmVtYWlsRXJyb3IgfHwgISF0aGlzLnBhc3NFcnJvcjtcbiAgICAgICAgcmV0dXJuICFpc1ZhbGlkO1xuICAgIH1cblxuICBcblxuICAgIGNoZWNrQ29kZXNjaG9vbCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRm9ybSgpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUxY29kZVwiKTtcblxuICAgICAgICAgICAgICAgLyogZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNob2lzaXNzZXogdW5lIGxhbmd1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCB0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcImbYp9mE2LnYsdio2YrYqVwiLCBcIkZyYW5jYWlzXCJdXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT0gXCJm2KfZhNi52LHYqNmK2KlcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RvIGFjdGlvbjFcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0ID09IFwiRnJhbmNhaXNcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RvIGFjdGlvbjJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyovXG5cblxuICAgICAgICAgICAgICAgIC8qdGhpcy5jb2RlU2VydmljZS5nZXRGaWxlSnNvbih0aGlzLmNvZGVTY2hvb2wpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YT0+e1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qbGV0IHNjaG9vbCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hvb2wgPSBKU09OLnBhcnNlKHNjaG9vbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2NvZGUxIDogXCIrSlNPTi5zdHJpbmdpZnkoc2Nob29sKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2NvZGUyIDogXCIrc2Nob29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMnNjb2RlMiA6IFwiK2RhdGEudmVyaWZpZXJFY29sZSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnZlcmlmaWVyRWNvbGUgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RyaW5nKCdjb25uZWN0aW9uU3RyaW5nJyxKU09OLnN0cmluZ2lmeShkYXRhLmVjb2xlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBnZXRTdHJpbmcoJ2Nvbm5lY3Rpb25TdHJpbmcnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ubmVjdGlvblN0cmluZyA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwiY29ubmVjdGlvblN0cmluZ1wiKSk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5pcCA9IGNvbm5lY3Rpb25TdHJpbmdbMF0uaXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWcuYXBpID0gY29ubmVjdGlvblN0cmluZ1swXS5hcGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWcubmFtZVNjaG9vbCA9IGNvbm5lY3Rpb25TdHJpbmdbMF0ubmFtZVNjaG9vbCA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWcucGhvdG9zVXJsID0gY29ubmVjdGlvblN0cmluZ1swXS5waG90b3NVcmwgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLm5hbWVEQiA9IGNvbm5lY3Rpb25TdHJpbmdbMF0ubmFtZURCO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnVzZXJEQiA9IGNvbm5lY3Rpb25TdHJpbmdbMF0udXNlckRCO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnBhc3NEQiA9IGNvbm5lY3Rpb25TdHJpbmdbMF0ucGFzc0RCO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhLnZlcmlmaWVyRWNvbGUgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvciA9IFwibGUgY29kZSBlc3QgaW5jb3JyZWN0IFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1yYW5lMmNvZGVFcnJvciBcIisgSlNPTi5zdHJpbmdpZnkoZXJyb3IuZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICApOyAqL1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUzY29kZVwiKTsgXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgfSBcblxuICAgIGlzU3VibWl0RW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZVNjaG9vbCAhPT0gJyc7XG4gICAgfVxuXG4gICAgaXNUYWJsZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVGFibGV0KCk7XG4gICAgfVxuXG4gICAgXG59Il19