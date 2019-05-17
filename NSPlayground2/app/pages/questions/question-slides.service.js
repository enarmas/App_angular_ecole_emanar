"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_1 = require("../../parameters/config");
var QuestionSlidesService = /** @class */ (function () {
    function QuestionSlidesService(http) {
        this.http = http;
    }
    QuestionSlidesService.prototype.getListQuestions = function (idTest) {
        var question_idJson = '[{ "test_id": "' + idTest + '" }]';
        return this.http.post("http://" + config_1.Config.ip + config_1.Config.api + "index.php/quetions", question_idJson);
    };
    QuestionSlidesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestionSlidesService);
    return QuestionSlidesService;
}());
exports.QuestionSlidesService = QuestionSlidesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tc2xpZGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbi1zbGlkZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFDbEQsa0RBQWlEO0FBR2pEO0lBSUksK0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFFcEMsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQUksZUFBZSxHQUFHLGlCQUFpQixHQUFDLE1BQU0sR0FBQyxNQUFNLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsZUFBTSxDQUFDLEVBQUUsR0FBQyxlQUFNLENBQUMsR0FBRyxHQUFDLG9CQUFvQixFQUFDLGVBQWUsQ0FBQyxDQUFFO0lBQ2hHLENBQUM7SUFYUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IscUJBQXFCLENBWWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25TbGlkZXNTZXJ2aWNlIHtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0TGlzdFF1ZXN0aW9ucyhpZFRlc3QgOm51bWJlcik6T2JzZXJ2YWJsZTxhbnk+e1xuICAgICAgICBsZXQgcXVlc3Rpb25faWRKc29uID0gJ1t7IFwidGVzdF9pZFwiOiBcIicraWRUZXN0KydcIiB9XSc7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9cIitDb25maWcuaXArQ29uZmlnLmFwaStcImluZGV4LnBocC9xdWV0aW9uc1wiLHF1ZXN0aW9uX2lkSnNvbikgOyBcbiAgICB9XG59XG4iXX0=