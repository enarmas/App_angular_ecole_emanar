"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./services/backend.service");
var router_1 = require("nativescript-angular/router");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(backendService, routerExtensions) {
        this.backendService = backendService;
        this.routerExtensions = routerExtensions;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.backendService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.routerExtensions.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_service_1.BackendService, router_1.RouterExtensions])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDhEQUE0RDtBQUM1RCxzREFBK0Q7QUFHL0Q7SUFDSSxtQkFBb0IsY0FBOEIsRUFBVSxnQkFBa0M7UUFBMUUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFbkcsK0JBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUUzQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFYUSxTQUFTO1FBRHJCLGlCQUFVLEVBQUU7eUNBRTJCLGdDQUFjLEVBQTRCLHlCQUFnQjtPQURyRixTQUFTLENBWXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5iYWNrZW5kU2VydmljZS5pc1VzZXJMb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==