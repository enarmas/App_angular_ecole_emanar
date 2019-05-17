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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tc2xpZGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbi1zbGlkZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFDbEQsa0RBQWlEO0FBSWpEO0lBSUksK0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFFcEMsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQUksZUFBZSxHQUFHLGlCQUFpQixHQUFDLE1BQU0sR0FBQyxNQUFNLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsZUFBTSxDQUFDLEVBQUUsR0FBQyxlQUFNLENBQUMsR0FBRyxHQUFDLG9CQUFvQixFQUFDLGVBQWUsQ0FBQyxDQUFFO0lBQ2hHLENBQUM7SUFYUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IscUJBQXFCLENBWWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcXVlc3Rpb25cIlxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uU2xpZGVzU2VydmljZSB7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldExpc3RRdWVzdGlvbnMoaWRUZXN0IDpudW1iZXIpOk9ic2VydmFibGU8YW55PntcbiAgICAgICAgbGV0IHF1ZXN0aW9uX2lkSnNvbiA9ICdbeyBcInRlc3RfaWRcIjogXCInK2lkVGVzdCsnXCIgfV0nO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vXCIrQ29uZmlnLmlwK0NvbmZpZy5hcGkrXCJpbmRleC5waHAvcXVldGlvbnNcIixxdWVzdGlvbl9pZEpzb24pIDsgXG4gICAgfVxufVxuIl19