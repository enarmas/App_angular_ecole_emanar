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
        // return this.http.post("http://10.1.0.48:8080/projects/slimTest/index.php/checkCodeschool", code);
        //return this.http.post("http://10.1.0.98:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        //return this.http.post("http://192.168.1.13:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        // return this.http.get("http://10.1.0.98:8080/projects/slimTest/ecole2.json") ;
        //---- azzden-----//
        return this.http.post("http://192.168.1.5:8080/projects/slimTest/index.php/checkCodeschool", code); //dar
        // return this.http.post("http://10.1.0.104:8080/projects/slimTest/index.php/checkCodeschool", code);//ista
        // return this.http.get("http://10.1.0.98:8080/projects/slimTest/ecole2.json") 
    };
    CodeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CodeService);
    return CodeService;
}());
exports.CodeService = CodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBVzNDLDZDQUFnRTtBQUVoRSxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFLdEM7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsVUFBa0I7UUFFakMsSUFBSSxJQUFJLEdBQUcsbUJBQW1CLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNwRCxvR0FBb0c7UUFFcEcsbUdBQW1HO1FBQ25HLHNHQUFzRztRQUN0RyxnRkFBZ0Y7UUFDaEYsb0JBQW9CO1FBRXJCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUVBQXFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQSxLQUFLO1FBQ3pHLDJHQUEyRztRQUN6RywrRUFBK0U7SUFDbkYsQ0FBQztJQWxCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLFdBQVcsQ0FtQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuY29uc3QgX0NVUlJFTlRfVVNFUiA9IFwiX0NVUlJFTlRfVVNFUlwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb2RlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZpbGVKc29uKGNvZGVTY2hvb2w6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIGxldCBjb2RlID0gJ1t7XCJjb2RlU2Nob29sXCI6IFwiJyArIGNvZGVTY2hvb2wgKyAnXCJ9XSc7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzEwLjEuMC40ODo4MDgwL3Byb2plY3RzL3NsaW1UZXN0L2luZGV4LnBocC9jaGVja0NvZGVzY2hvb2xcIiwgY29kZSk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzEwLjEuMC45ODo4MDgwL3Byb2plY3RzL3NsaW1UZXN0L2luZGV4LnBocC9jaGVja0NvZGVzY2hvb2xcIixjb2RlKSA7XHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4xLjEzOjgwODAvcHJvamVjdHMvc2xpbVRlc3QvaW5kZXgucGhwL2NoZWNrQ29kZXNjaG9vbFwiLGNvZGUpIDtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly8xMC4xLjAuOTg6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9lY29sZTIuanNvblwiKSA7XHJcbiAgICAgICAgLy8tLS0tIGF6emRlbi0tLS0tLy9cclxuXHJcbiAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4xLjU6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9pbmRleC5waHAvY2hlY2tDb2Rlc2Nob29sXCIsIGNvZGUpOy8vZGFyXHJcbiAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly8xMC4xLjAuMTA0OjgwODAvcHJvamVjdHMvc2xpbVRlc3QvaW5kZXgucGhwL2NoZWNrQ29kZXNjaG9vbFwiLCBjb2RlKTsvL2lzdGFcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly8xMC4xLjAuOTg6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9lY29sZTIuanNvblwiKSBcclxuICAgIH1cclxufSAiXX0=