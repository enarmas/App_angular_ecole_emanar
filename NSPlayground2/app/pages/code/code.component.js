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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsNERBQTBEO0FBQzFELGtFQUFnRTtBQUNoRSx3REFBaUQ7QUFjakQ7SUFzQkksdUJBQ1ksV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsSUFBVSxFQUNWLGdCQUFrQztRQUhsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFwQjlDLGVBQVUsR0FBQyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVsQixhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUc5QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBUWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFD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VUFBVSxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBL0ttQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUZsQyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNyQyxDQUFDO3lDQXdCMkIsMEJBQVc7WUFDUixnQ0FBYztZQUN4QixXQUFJO1lBQ1EseUJBQWdCO09BMUJyQyxhQUFhLENBb0x6QjtJQUFELG9CQUFDO0NBQUEsQUFwTEQsSUFvTEM7QUFwTFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgcHJvbXB0LCBpbnB1dFR5cGUgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBDb2RlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb2RlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjb2RlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvZGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6WycuL2NvZGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnZW1haWwnKSBlbWFpbEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gICAgdXNlcjogVXNlcjtcblxuICAgIGNvZGVTY2hvb2w9Jyc7XG4gICAgZGlhbG9nT3BlbiA9IHRydWU7XG5cbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgaGlkZUljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA3MCk7XG4gICAgcHVibGljIHNob3dJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNmUpO1xuICAgIHB1YmxpYyBzaG93SGlkZUljb246IGFueTtcblxuICAgIGVtYWlsRXJyb3IgPSBcIlwiO1xuICAgIHBhc3NFcnJvciA9IFwiXCI7XG4gICAgbG9naW5FcnJvciA9IFwiXCI7XG5cbiAgICBlbWFpbEhhc0ZvY3VzID0gZmFsc2U7XG4gICAgcGFzc0hhc0ZvY3VzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb2RlU2VydmljZTogQ29kZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5jc3NDbGFzc2VzLmFkZChcImxvZ2luLXBhZ2UtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dIaWRlSWNvbiA9IHRoaXMuaGlkZUljb247XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XG4gICAgICAgICAgICB2YXIgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuXG4gICAgICAgICAgICB2YXIgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29kZVNjaG9vbCA9IFwieDQ2XCI7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2xvc2VEaWFsb2cob3B0aW9uKXtcbiAgICAgICAgdGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZSA6IFwiKyBvcHRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNFbWFpbEVycm9ycygpIHtcbiAgICAgICAgY29uc3QgaGFzRXJyb3JNc2cgPSAhIXRoaXMuZW1haWxFcnJvcjtcbiAgICAgICAgaWYgKCFoYXNFcnJvck1zZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCBpc1ZhbGlkRW1haWwgPSB0aGlzLnVzZXIuaGFzRW1haWwoKSAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xuICAgICAgICBsZXQgaGFzRXJyb3IgPSBoYXNFcnJvck1zZyB8fCAhaXNWYWxpZEVtYWlsO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRW1haWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiXCJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoYXNFcnJvcjtcbiAgICB9XG5cbiAgIFxuXG4gICAgZ2V0RW1haWxFcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1haWxFcnJvcjtcbiAgICB9XG5cbiAgICBnZXRQYXNzd29yZEVycm9yKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3NFcnJvcjtcbiAgICB9XG5cbiAgICBvbkVtYWlsRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZW1haWxIYXNGb2N1cyA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBoYXNMb2dpbkVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5sb2dpbkVycm9yO1xuICAgIH1cblxuICAgIGdldExvZ2luRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luRXJyb3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1ZhbGlkRm9ybSgpIHtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSAhIXRoaXMuZW1haWxFcnJvciB8fCAhIXRoaXMucGFzc0Vycm9yO1xuICAgICAgICByZXR1cm4gIWlzVmFsaWQ7XG4gICAgfVxuXG4gIFxuXG4gICAgY2hlY2tDb2Rlc2Nob29sKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRGb3JtKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTFjb2RlXCIpO1xuXG4gICAgICAgICAgICAgICAvKiBkaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hvaXNpc3NleiB1bmUgbGFuZ3VlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsIHRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1wiZtin2YTYudix2KjZitipXCIsIFwiRnJhbmNhaXNcIl1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBcImbYp9mE2LnYsdio2YrYqVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRG8gYWN0aW9uMVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQgPT0gXCJGcmFuY2Fpc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRG8gYWN0aW9uMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7Ki9cblxuXG4gICAgICAgICAgICAgICAgLyp0aGlzLmNvZGVTZXJ2aWNlLmdldEZpbGVKc29uKHRoaXMuY29kZVNjaG9vbClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhPT57XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLypsZXQgc2Nob29sID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaG9vbCA9IEpTT04ucGFyc2Uoc2Nob29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJzY29kZTEgOiBcIitKU09OLnN0cmluZ2lmeShzY2hvb2wpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTJzY29kZTIgOiBcIitzY2hvb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyc2NvZGUyIDogXCIrZGF0YS52ZXJpZmllckVjb2xlICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEudmVyaWZpZXJFY29sZSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHJpbmcoJ2Nvbm5lY3Rpb25TdHJpbmcnLEpTT04uc3RyaW5naWZ5KGRhdGEuZWNvbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIGdldFN0cmluZygnY29ubmVjdGlvblN0cmluZycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25uZWN0aW9uU3RyaW5nID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJjb25uZWN0aW9uU3RyaW5nXCIpKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLmlwID0gY29ubmVjdGlvblN0cmluZ1swXS5pcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5hcGkgPSBjb25uZWN0aW9uU3RyaW5nWzBdLmFwaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5uYW1lU2Nob29sID0gY29ubmVjdGlvblN0cmluZ1swXS5uYW1lU2Nob29sIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5waG90b3NVcmwgPSBjb25uZWN0aW9uU3RyaW5nWzBdLnBob3Rvc1VybCA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWcubmFtZURCID0gY29ubmVjdGlvblN0cmluZ1swXS5uYW1lREI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWcudXNlckRCID0gY29ubmVjdGlvblN0cmluZ1swXS51c2VyREI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWcucGFzc0RCID0gY29ubmVjdGlvblN0cmluZ1swXS5wYXNzREI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEudmVyaWZpZXJFY29sZSA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gXCJsZSBjb2RlIGVzdCBpbmNvcnJlY3QgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXJhbmUyY29kZUVycm9yIFwiKyBKU09OLnN0cmluZ2lmeShlcnJvci5lcnJvcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICk7ICovXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtcmFuZTNjb2RlXCIpOyBcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgaXNTdWJtaXRFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RlU2Nob29sICE9PSAnJztcbiAgICB9XG5cbiAgICBpc1RhYmxldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNUYWJsZXQoKTtcbiAgICB9XG5cbiAgICBcbn0iXX0=