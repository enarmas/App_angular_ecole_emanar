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
        return this.http.post("http://10.1.0.98:8080/projects/slimTest/index.php/checkCodeschool", code);
        //        return this.http.post("http://192.168.1.13:8080/projects/slimTest/index.php/checkCodeschool",code) ;
    };
    CodeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CodeService);
    return CodeService;
}());
exports.CodeService = CodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBVzNDLDZDQUFnRTtBQUVoRSxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFLdEM7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsVUFBaUI7UUFFaEMsSUFBSSxJQUFJLEdBQUcsbUJBQW1CLEdBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztRQUVoRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxFQUFDLElBQUksQ0FBQyxDQUFFO1FBQ3pHLDhHQUE4RztJQUU5RyxDQUFDO0lBWlksV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixXQUFXLENBYXZCO0lBQUQsa0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL3BhcmFtZXRlcnMvY29uZmlnXCI7XHJcbmltcG9ydCB7Z2V0Qm9vbGVhbixzZXRCb29sZWFuLGdldE51bWJlcixzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmNvbnN0IF9DVVJSRU5UX1VTRVIgPSBcIl9DVVJSRU5UX1VTRVJcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29kZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZpbGVKc29uKGNvZGVTY2hvb2w6c3RyaW5nKSA6ICBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvZGUgPSAnW3tcImNvZGVTY2hvb2xcIjogXCInK2NvZGVTY2hvb2wrJ1wifV0nO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTAuMS4wLjk4OjgwODAvcHJvamVjdHMvc2xpbVRlc3QvaW5kZXgucGhwL2NoZWNrQ29kZXNjaG9vbFwiLGNvZGUpIDtcclxuLy8gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly8xOTIuMTY4LjEuMTM6ODA4MC9wcm9qZWN0cy9zbGltVGVzdC9pbmRleC5waHAvY2hlY2tDb2Rlc2Nob29sXCIsY29kZSkgO1xyXG4gICAgXHJcbn1cclxufSAiXX0=