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
        //return this.http.post("http://10.1.0.98:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        //return this.http.post("http://192.168.1.13:8080/projects/slimTest/index.php/checkCodeschool",code) ;
        // return this.http.get("http://10.1.0.98:8080/projects/slimTest/ecole2.json") ;
        //---- azzden-----//
        return this.http.post("http://10.1.0.152:8080/projects/slimTest/index.php/checkCodeschool", code);
        //return this.http.post("http://192.168.1.104:8080/projects/slimTest/index.php/checkCodeschool", code);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBVzNDLDZDQUFnRTtBQUVoRSxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFLdEM7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsVUFBaUI7UUFFaEMsSUFBSSxJQUFJLEdBQUcsbUJBQW1CLEdBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztRQUVoRCxtR0FBbUc7UUFDbkcsc0dBQXNHO1FBQzVHLGdGQUFnRjtRQUNoRixvQkFBb0I7UUFFcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvRUFBb0UsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyx1R0FBdUc7UUFDdkcsc0dBQXNHO1FBQ3RHLCtFQUErRTtJQUM3RSxDQUFDO0lBbEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsV0FBVyxDQW1CdkI7SUFBRCxrQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tICdraW52ZXktbmF0aXZlc2NyaXB0LXNkayc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vcGFyYW1ldGVycy9jb25maWdcIjtcclxuaW1wb3J0IHtnZXRCb29sZWFuLHNldEJvb2xlYW4sZ2V0TnVtYmVyLHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuY29uc3QgX0NVUlJFTlRfVVNFUiA9IFwiX0NVUlJFTlRfVVNFUlwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb2RlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmlsZUpzb24oY29kZVNjaG9vbDpzdHJpbmcpIDogIE9ic2VydmFibGU8YW55PntcclxuICAgICAgICAgICBcclxuICAgICAgICBsZXQgY29kZSA9ICdbe1wiY29kZVNjaG9vbFwiOiBcIicrY29kZVNjaG9vbCsnXCJ9XSc7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzEwLjEuMC45ODo4MDgwL3Byb2plY3RzL3NsaW1UZXN0L2luZGV4LnBocC9jaGVja0NvZGVzY2hvb2xcIixjb2RlKSA7XHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4xLjEzOjgwODAvcHJvamVjdHMvc2xpbVRlc3QvaW5kZXgucGhwL2NoZWNrQ29kZXNjaG9vbFwiLGNvZGUpIDtcclxuICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly8xMC4xLjAuOTg6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9lY29sZTIuanNvblwiKSA7XHJcbiAgLy8tLS0tIGF6emRlbi0tLS0tLy9cclxuXHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzEwLjEuMC4xNTI6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9pbmRleC5waHAvY2hlY2tDb2Rlc2Nob29sXCIsIGNvZGUpO1xyXG4gIC8vcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMS4xMDQ6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9pbmRleC5waHAvY2hlY2tDb2Rlc2Nob29sXCIsIGNvZGUpO1xyXG4gIC8vcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMS4xMzo4MDgwL3Byb2plY3RzL3NsaW1UZXN0L2luZGV4LnBocC9jaGVja0NvZGVzY2hvb2xcIixjb2RlKSA7XHJcbiAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vMTAuMS4wLjk4OjgwODAvcHJvamVjdHMvc2xpbVRlc3QvZWNvbGUyLmpzb25cIikgXHJcbiAgICB9XHJcbn0gIl19