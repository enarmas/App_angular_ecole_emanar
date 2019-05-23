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
        var question_idJson = '[{ "test_id": "' + idTest + '" ,"dbHost":"localhost","dbName":"' + config_1.Config.database + '","dbUser":"' + config_1.Config.user + '","dbPass":"' + config_1.Config.password + '"}]';
        return this.http.post("http://" + config_1.Config.ip + config_1.Config.api + "index.php/quetions", question_idJson);
    };
    QuestionSlidesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestionSlidesService);
    return QuestionSlidesService;
}());
exports.QuestionSlidesService = QuestionSlidesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tc2xpZGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbi1zbGlkZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFDbEQsa0RBQWlEO0FBSWpEO0lBSUksK0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFFcEMsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQUksZUFBZSxHQUFHLGlCQUFpQixHQUFDLE1BQU0sR0FBQyxvQ0FBb0MsR0FBQyxlQUFNLENBQUMsUUFBUSxHQUFDLGNBQWMsR0FBQyxlQUFNLENBQUMsSUFBSSxHQUFDLGNBQWMsR0FBQyxlQUFNLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztRQUNwSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxlQUFNLENBQUMsRUFBRSxHQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUMsb0JBQW9CLEVBQUMsZUFBZSxDQUFDLENBQUU7SUFDaEcsQ0FBQztJQVhRLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQUtpQixpQkFBVTtPQUozQixxQkFBcUIsQ0FZakM7SUFBRCw0QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3F1ZXN0aW9uXCJcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25TbGlkZXNTZXJ2aWNlIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RRdWVzdGlvbnMoaWRUZXN0IDpudW1iZXIpOk9ic2VydmFibGU8YW55PntcclxuICAgICAgICBsZXQgcXVlc3Rpb25faWRKc29uID0gJ1t7IFwidGVzdF9pZFwiOiBcIicraWRUZXN0KydcIiAsXCJkYkhvc3RcIjpcImxvY2FsaG9zdFwiLFwiZGJOYW1lXCI6XCInK0NvbmZpZy5kYXRhYmFzZSsnXCIsXCJkYlVzZXJcIjpcIicrQ29uZmlnLnVzZXIrJ1wiLFwiZGJQYXNzXCI6XCInK0NvbmZpZy5wYXNzd29yZCsnXCJ9XSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL1wiK0NvbmZpZy5pcCtDb25maWcuYXBpK1wiaW5kZXgucGhwL3F1ZXRpb25zXCIscXVlc3Rpb25faWRKc29uKSA7IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==