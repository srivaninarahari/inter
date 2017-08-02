var Car = (function () {
    function Car(model, color) {
        this.model = model;
        this.color = color;
    }
    Car.prototype.start = function () {
        return "the model is  " + this.model + " and   name  is  " + this.color + "  started";
    };
    Car.prototype.drive = function () {
        return "the model is  " + this.model + " and   name  is  " + this.color + " drived";
    };
    Car.prototype.getPosition = function () {
        return "the model is  " + this.model + " and   name  is  " + this.color + " psoition";
    };
    return Car;
}());
var car = new Car(25, "red");
var output1 = car.start();
var output2 = car.drive();
var output3 = car.getPosition();
console.log(output1);
console.log(output2);
console.log(output3);
alert(output1);
alert(output2);
alert(output3);