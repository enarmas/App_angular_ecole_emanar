import { Injectable } from "@angular/core";

import { Kinvey } from 'kinvey-nativescript-sdk';

import { getString, setString } from "application-settings";

import { User } from "./user.model";
import { Config } from "../parameters/config";

import { Observable } from "rxjs";

import { HttpClient, HttpResponse } from "@angular/common/http";

const _CURRENT_USER = "_CURRENT_USER";



@Injectable()
export class BackendService {

    constructor(private http: HttpClient){
    }

    public isUserLoggedIn(): boolean {
        let loggedIn = !!this.user;

        return loggedIn;
    }

    public login2(user:User) :  Observable<any>{
           
            let userJson = '[{"email": "'+user.email+'","password": "'+user.password+'"}]';
    
            return this.http.post("http://"+Config.ip+Config.api+"index.php/login",userJson) ;
        
    }

    public ListTest(inscription_id:string) :  Observable<any>{
           
        let inscription_idJson = '[{"inscription_id": '+inscription_id+' }]';

        return this.http.post("http://"+Config.ip+Config.api+"index.php/tests",inscription_idJson) ;
    
    }


    public login(user: User) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (user.email === user.password) { 
                    resolve();
                } else {
                    reject({ message: 'Invalid Email/Password, For this example both should be same' })
                }
            }, 1000)
        });
    }

    public loginWithKinvey(user: User): Promise<any> {
        let _user: Kinvey.User = Kinvey.User.getActiveUser();
        if (_user) {
            return _user.logout()
                .then(() => this.performLogin(user));
        } else { 
            return this.performLogin(user);
        }
    }

    logout() {
        return Kinvey.User.logout().then(() => {
            this.user = "";
        });
    }

    private performLogin(user: User) {
        return Kinvey.User.login(user.email, user.password).then((_user: any) => {
            this.user = JSON.stringify(_user)
        });
    }

    private get user(): string {
        return getString(_CURRENT_USER);
    }

    private set user(theToken: string) {
        setString(_CURRENT_USER, theToken);
    }

    public forgetPassword(email: string) {
        return Kinvey.User.resetPassword(email)
            .then((data) => {
                console.debug('Data', data)
            })
            .catch((error: Kinvey.BaseError) => {
                console.debug('Error', error)
            });
    }
}