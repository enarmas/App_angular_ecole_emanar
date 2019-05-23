import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../../parameters/config";
import { Observable } from "rxjs";
import {Question} from "../../services/question"
import {AffectControle} from "../../services/affectControle"
@Injectable()
export class QuestionSlidesService {



    constructor(private http: HttpClient) {
        
    }

    getListQuestions(idTest :number):Observable<any>{
        let question_idJson = '[{ "test_id": "'+idTest+'" }]';
        return this.http.post("http://"+Config.ip+Config.api+"index.php/quetions",question_idJson) ; 
    }

    setAffectationControle(affControle:AffectControle):Observable<any>{
        let affControle_Json = `[{ "test_id": "`+affControle.idTest+`" },
                                { "test_id": "`+affControle.seance_id+`" },
                                { "test_id": "`+affControle.inscription_id+`" },
                                { "test_id": "`+affControle.datepassation+`" },
                                { "test_id": "`+affControle.heuredebutpassation+`" },
                                { "test_id": "`+affControle.heurefinpassation+`" },
                                { "test_id": "`+affControle.termine+`" },
                                { "test_id": "`+affControle.minRestant+`" },
                                { "test_id": "`+affControle.secRestant+`" },
                                { "test_id": "`+affControle.score+`" }]`;
        return this.http.post("http://"+Config.ip+Config.api+"index.php/affectationControle",affControle_Json) ; 
    }
}
