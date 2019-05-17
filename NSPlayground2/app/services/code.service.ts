import { Injectable } from "@angular/core";

import { Kinvey } from 'kinvey-nativescript-sdk';

import { User } from "./user.model";
import { Config } from "../parameters/config";
import {getBoolean,setBoolean,getNumber,setNumber, getString, setString, hasKey, remove, clear} from "tns-core-modules/application-settings";


import { Observable } from "rxjs";

import { HttpClient, HttpResponse } from "@angular/common/http";

const _CURRENT_USER = "_CURRENT_USER";



@Injectable()
export class CodeService {

    constructor(private http: HttpClient){
    }

    public getFileJson(codeSchool:string) :  Observable<any>{
           
        let code = '[{"codeSchool": "'+codeSchool+'"}]';

        //return this.http.post("http://10.1.0.98:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        //return this.http.post("http://192.168.1.13:8080/projects/slimTest/index.php/checkCodeschool",code) ;
  // return this.http.get("http://10.1.0.98:8080/projects/slimTest/ecole2.json") ;
  //---- azzden-----//

  return this.http.post("http://10.1.0.152:8080/projects/slimTest/index.php/checkCodeschool", code);
  //return this.http.post("http://192.168.1.104:8080/projects/slimTest/index.php/checkCodeschool", code);
  //return this.http.post("http://192.168.1.13:8080/projects/slimTest/index.php/checkCodeschool",code) ;
  // return this.http.get("http://10.1.0.98:8080/projects/slimTest/ecole2.json") 
    }
} 