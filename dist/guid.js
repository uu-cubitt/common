"use strict";
var Guid = (function () {
    function Guid(g) {
        this.guid = g;
    }
    Guid.prototype.toString = function () {
        return this.guid;
    };
    Guid.parse = function (guid) {
        var pattern = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
        if (pattern.test(guid)) {
            return new Guid(guid);
        }
        return null;
    };
    Guid.newGuid = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return new Guid(uuid);
    };
    return Guid;
}());
exports.Guid = Guid;
