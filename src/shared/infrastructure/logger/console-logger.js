"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.info = function (message) {
        console.log(message);
    };
    ConsoleLogger.prototype.error = function (message) {
        console.error(message);
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
