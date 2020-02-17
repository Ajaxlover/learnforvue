"use strict";
var initFrom;
(function (initFrom) {
    var userFrom;
    (function (userFrom) {
        var Name = /** @class */ (function () {
            function Name() {
                console.log('Name运行了');
            }
            return Name;
        }());
        userFrom.Name = Name;
        var Tel = /** @class */ (function () {
            function Tel() {
                console.log('Tel运行了');
            }
            return Tel;
        }());
        userFrom.Tel = Tel;
    })(userFrom || (userFrom = {}));
    var Init = /** @class */ (function () {
        function Init() {
            console.log('init运行了');
            new userFrom.Name();
            new userFrom.Tel();
        }
        return Init;
    }());
    new Init();
})(initFrom || (initFrom = {}));
