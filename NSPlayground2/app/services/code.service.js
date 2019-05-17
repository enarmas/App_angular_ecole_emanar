"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var _CURRENT_USER = "_CURRENT_USER";
var CodeService = /** @class */ (function () {
    function CodeService(http) {
        this.http = http;
    }
    CodeService.prototype.getFileJson = function (codeSchool) {
        var code = '[{"codeSchool": "' + codeSchool + '"}]';
        return this.http.post("http://10.1.0.48:8080/projects/slimTest/index.php/checkCodeschool", code);
        //return this.http.post("http://10.1.0.98:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        //return this.http.post("http://192.168.1.13:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        // return this.http.get("http://10.1.0.98:8080/projects/slimTest/ecole2.json") ;
        //---- azzden-----//
        //return this.http.post("http://192.168.1.13:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        // return this.http.get("http://10.1.0.98:8080/projects/slimTest/ecole2.json") 
    };
    CodeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CodeService);
    return CodeService;
}());
exports.CodeService = CodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBVzNDLDZDQUFnRTtBQUVoRSxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFLdEM7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsVUFBaUI7UUFFaEMsSUFBSSxJQUFJLEdBQUcsbUJBQW1CLEdBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpHLG1HQUFtRztRQUNuRyxzR0FBc0c7UUFDNUcsZ0ZBQWdGO1FBQ2hGLG9CQUFvQjtRQUVwQixzR0FBc0c7UUFDdEcsK0VBQStFO0lBQzdFLENBQUM7SUFqQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixXQUFXLENBa0J2QjtJQUFELGtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge2dldEJvb2xlYW4sc2V0Qm9vbGVhbixnZXROdW1iZXIsc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5jb25zdCBfQ1VSUkVOVF9VU0VSID0gXCJfQ1VSUkVOVF9VU0VSXCI7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvZGVTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpe1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGaWxlSnNvbihjb2RlU2Nob29sOnN0cmluZykgOiAgT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGxldCBjb2RlID0gJ1t7XCJjb2RlU2Nob29sXCI6IFwiJytjb2RlU2Nob29sKydcIn1dJztcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTAuMS4wLjQ4OjgwODAvcHJvamVjdHMvc2xpbVRlc3QvaW5kZXgucGhwL2NoZWNrQ29kZXNjaG9vbFwiLCBjb2RlKTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTAuMS4wLjk4OjgwODAvcHJvamVjdHMvc2xpbVRlc3QvaW5kZXgucGhwL2NoZWNrQ29kZXNjaG9vbFwiLGNvZGUpIDtcclxuICAgICAgICAvL3JldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly8xOTIuMTY4LjEuMTM6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9pbmRleC5waHAvY2hlY2tDb2Rlc2Nob29sXCIsY29kZSkgO1xyXG4gIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovLzEwLjEuMC45ODo4MDgwL3Byb2plY3RzL3NsaW1UZXN0L2Vjb2xlMi5qc29uXCIpIDtcclxuICAvLy0tLS0gYXp6ZGVuLS0tLS0vL1xyXG5cclxuICAvL3JldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly8xOTIuMTY4LjEuMTM6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9pbmRleC5waHAvY2hlY2tDb2Rlc2Nob29sXCIsY29kZSkgO1xyXG4gIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovLzEwLjEuMC45ODo4MDgwL3Byb2plY3RzL3NsaW1UZXN0L2Vjb2xlMi5qc29uXCIpIFxyXG4gICAgfVxyXG59ICJdfQ==