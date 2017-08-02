interface Drivable{
    model:number;
    color:string;
}
 class Car implements Drivable{
 constructor(public model:number,public color:string){

 }
start(){
       return `the model is  ${this.model} and   name  is  ${this.color}  started`;
   }
   drive(){
       return `the model is  ${this.model} and   name  is  ${this.color} drived`;
   }
   getPosition() {
       return `the model is  ${this.model} and   name  is  ${this.color} psoition`;
   }
}
let car = new  Car(25, "red");
let output1 =  car.start();
let output2 =  car.drive();
let output3 =  car.getPosition();
console.log(output1 )// method  for  start
console.log(output2 )// method  for  drive
console.log(output3 )// method  for  getposition
alert(output1);
alert(output2);
alert(output3);