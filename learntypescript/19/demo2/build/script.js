"use strict";
//验证用户名
var NameComponent;
(function (NameComponent) {
    var regName = /^\w{5,8}$/;
    var UserName = /** @class */ (function () {
        function UserName() {
        }
        UserName.prototype.regNameVal = function (val) {
            return regName.test(val);
        };
        return UserName;
    }());
    NameComponent.UserName = UserName;
})(NameComponent || (NameComponent = {}));
//验证手机号
//验证用户名
var TelComponent;
(function (TelComponent) {
    var regTel = /^1[3456789]\d{9}$/;
    var UserTel = /** @class */ (function () {
        function UserTel() {
        }
        UserTel.prototype.regTelVal = function (val) {
            return regTel.test(val);
        };
        return UserTel;
    }());
    TelComponent.UserTel = UserTel;
})(TelComponent || (TelComponent = {}));
///<reference path="name.ts" />
///<reference path="tel.ts" />
var Init = /** @class */ (function () {
    function Init() {
        this.userValue = ['abc', '18511773322'];
        var nameValue = new NameComponent.UserName;
        console.log(nameValue.regNameVal(this.userValue[0]));
        var telValue = new TelComponent.UserTel;
        console.log(telValue.regTelVal(this.userValue[1]));
    }
    return Init;
}());
new Init();
