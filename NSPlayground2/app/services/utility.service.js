"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enums_1 = require("ui/enums");
var platform_1 = require("platform");
// From https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression/201378#201378
//const regex: any = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
var regex = /./;
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.isValidEmail = function (email) {
        if (!email)
            return false;
        return regex.test(email);
    };
    UtilityService.prototype.isTablet = function () {
        return platform_1.device.deviceType === enums_1.DeviceType.Tablet;
    };
    UtilityService = __decorate([
        core_1.Injectable()
    ], UtilityService);
    return UtilityService;
}());
exports.UtilityService = UtilityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGtDQUFzQztBQUN0QyxxQ0FBa0M7QUFFbEMsNEhBQTRIO0FBQzVILHFkQUFxZDtBQUNyZCxJQUFNLEtBQUssR0FBUSxHQUFHLENBQUE7QUFHdEI7SUFBQTtJQVlBLENBQUM7SUFWVSxxQ0FBWSxHQUFuQixVQUFvQixLQUFhO1FBQzdCLElBQUksQ0FBQyxLQUFLO1lBQ04sT0FBTyxLQUFLLENBQUM7UUFFakIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQ0ksT0FBTyxpQkFBTSxDQUFDLFVBQVUsS0FBSyxrQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUNuRCxDQUFDO0lBWFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQVkxQjtJQUFELHFCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERldmljZVR5cGUgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcblxyXG4vLyBGcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMTMyMy9ob3ctdG8tdmFsaWRhdGUtYW4tZW1haWwtYWRkcmVzcy11c2luZy1hLXJlZ3VsYXItZXhwcmVzc2lvbi8yMDEzNzgjMjAxMzc4XHJcbi8vY29uc3QgcmVnZXg6IGFueSA9IC8oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86KDIoNVswLTVdfFswLTRdWzAtOV0pfDFbMC05XVswLTldfFsxLTldP1swLTldKSlcXC4pezN9KD86KDIoNVswLTVdfFswLTRdWzAtOV0pfDFbMC05XVswLTldfFsxLTldP1swLTldKXxbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pL1xyXG5jb25zdCByZWdleDogYW55ID0gLy4vXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWRFbWFpbChlbWFpbDogU3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFlbWFpbClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVGFibGV0KCkge1xyXG4gICAgICAgIHJldHVybiBkZXZpY2UuZGV2aWNlVHlwZSA9PT0gRGV2aWNlVHlwZS5UYWJsZXQ7XHJcbiAgICB9XHJcbn0iXX0=