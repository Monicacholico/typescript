// class User {
//   name: string;
//   age: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    return User;
}());
var user = new User('Max', 30);
console.log(user.name);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, permissions) {
        var _this = _super.call(this, name, age) || this;
        _this.permissions = permissions;
        return _this;
    }
    return Admin;
}(User));
var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
var OutPutMode;
(function (OutPutMode) {
    OutPutMode[OutPutMode["CONSOLE"] = 0] = "CONSOLE";
    OutPutMode[OutPutMode["ALERT"] = 1] = "ALERT";
})(OutPutMode || (OutPutMode = {}));
;
function printResult(result, printMode) {
    if (printMode === OutPutMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutPutMode.ALERT) {
        alert(result);
    }
}
// type CalculationResults = { res: number, print: () => void }[]
var results = [];
// const results: CalculationResults  = [];
var names = ['Max'];
buttonElement.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // results.push(5);
    // printResult(results);
    // results[0].print();
    printResult(result, OutPutMode.CONSOLE);
    printResult(result, OutPutMode.ALERT);
});
// Generic Types
function logAdEcho(val) {
    console.log(val);
    return val;
}
logAdEcho('Hi there!').split(' ');
