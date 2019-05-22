import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../../parameters/config";
import { Observable } from "rxjs";
import {Question} from "../../services/question"
@Injectable()
export class QuestionSlidesService {



    constructor(private http: HttpClient) {
        
    }

    getListQuestions(idTest :number):Observable<any>{
        let question_idJson = '[{ "test_id": "'+idTest+'" ,"dbHost":"localhost","dbName":"'+Config.database+'","dbUser":"'+Config.user+'","dbPass":"'+Config.password+'"}]';
        return this.http.post("http://"+Config.ip+Config.api+"index.php/quetions",question_idJson) ; 
    }
}
