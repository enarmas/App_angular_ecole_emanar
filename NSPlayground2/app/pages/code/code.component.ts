import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { TextField } from "ui/text-field/text-field";
import { Page } from "ui/page";
import { prompt, inputType } from "ui/dialogs";

import { isAndroid, device } from "platform";
import * as app from "application";

import { CodeService } from "../../services/code.service";
import { UtilityService } from '../../services/utility.service';
import { User } from "../../services/user.model";
import { Config } from "../../parameters/config";
import {getBoolean,setBoolean,getNumber,setNumber, getString, setString, hasKey, remove, clear} from "tns-core-modules/application-settings";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { parse } from "tns-core-modules/css/reworkcss";

declare var android: any;


@Component({
    selector: "code",
    moduleId: module.id,
    templateUrl: "./code.component.html",
    styleUrls:['./code.component.css']
})
export class CodeComponent implements OnInit {

    @ViewChild('email') emailField: ElementRef;

    user: User;

    codeSchool='';
    IsArFr=0;
    
    dialogOpen = true;

    isAuthenticating = false;

    public hideIcon = String.fromCharCode(0xf070);
    public showIcon = String.fromCharCode(0xf06e);
    public showHideIcon: any;

    emailError = "";
    passError = "";
    loginError = "";

    emailHasFocus = false;
    passHasFocus = false;

    constructor(
        private codeService: CodeService,
        private utilityService: UtilityService,
        private page: Page,
        private routerExtensions: RouterExtensions,
    ) {
        this.user = new User();
        this.user.email = "";
    }

    ngOnInit() {

        setString('IsArFr',this.IsArFr.toString());
        
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;

        if (isAndroid && device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);

            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }

        this.codeSchool = "x46";

        
    }

    closeDialog(option){
        this.dialogOpen = false;

        this.IsArFr = option;
        setString('IsArFr',this.IsArFr.toString());

        console.log("samrane : "+ option);
    }

    public hasEmailErrors() {
        const hasErrorMsg = !!this.emailError;
        if (!hasErrorMsg)
            return false;

        const isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
        let hasError = hasErrorMsg || !isValidEmail;

        if (isValidEmail) {
            this.emailError = ""
            return false;
        }

        return hasError;
    }

   

    getEmailError() {
        return this.emailError;
    }

    getPasswordError() {

        return this.passError;
    }

    onEmailFocus() {
        this.emailHasFocus = true;
    }


    hasLoginErrors() {
        return !!this.loginError;
    }

    getLoginError() {
        return this.loginError;
    }

    private isValidForm() {
        let isValid = !!this.emailError;
        return !isValid;
    }

  

    checkCodeschool() {

        if (this.isValidForm()) {
            this.isAuthenticating = true; 
            console.log("samrane1code");

            this.loginError ="";

        
            this.codeService.getFileJson(this.codeSchool)
            .subscribe(
                data=>{
                    
                    /*let school = data;
                    school = JSON.parse(school);
                    console.log("samrane2scode1 : "+JSON.stringify(school));
                    console.log("samrane2scode2 : "+school);
                    this.routerExtensions.navigate(["/login"]);*/

                    console.log( JSON.stringify(data));
                    console.log("samrane2scode2 : "+data.verifierEcole );

                    if(data.verifierEcole == true){
                        setString('connectionString',JSON.stringify(data.ecole));
                        //console.log( getString('connectionString'));
                        let connectionString = JSON.parse(getString("connectionString"));
                        let IsArFr = getString("IsArFr");
            
                        Config.ip = connectionString[0].ip;
                        Config.api = connectionString[0].api;
                        Config.nom = connectionString[0].nom ;
                        Config.photos = connectionString[0].photos ;
                        Config.database = connectionString[0].database;
                        Config.user = connectionString[0].user;
                        Config.password = connectionString[0].password;
                        Config.IsArFr = IsArFr ;

                        this.isAuthenticating = false; 
                        this.routerExtensions.navigate(["/login"]);
                    }else if(data.verifierEcole == false){
                        this.isAuthenticating = false;
                        this.loginError = "le code est incorrect ";
                    }
                },
                error=>{
                    console.log("samrane2codeError "+ JSON.stringify(error.error));
                    this.isAuthenticating = false;
                    this.loginError = "chemin est incorrect : "+ error.message;
                } 
            ); 
    
            console.log("samrane3code"); 
        
        }
    } 

    isSubmitEnabled() {
        return this.codeSchool !== '';
    }

    isTablet() {
        return this.utilityService.isTablet();
    }

    
}