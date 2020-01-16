class Person{
    constructor(name){
        this.firstName=name;
    }
    demo(){
        console.log("Name : "+this.firstName);
    }
}
class Mike extends Person{
    constructor(age,name){
        super(name);
        this.age=age;
    }
    demo(){
        super.demo();
        console.log("Age : "+this.age);
    }
}
class Medals extends Mike{
    constructor(name,age,noOfMedals){
        super(age,name);
        super.demo();
        this.noOfMedals=noOfMedals;
    }
    wonMedals(){
        console.log("No of Medals Won : "+this.noOfMedals);
    }
}
// const p = new Person("abc");
// p.demo();
// const mike= new Mike(23,"abc");
// mike.demo();
const medals = new Medals("john",23,5);
medals.wonMedals();

// var Person=function(name){
//     this.firstName=name;
//     console.log(this.firstName);
// }
// Person.prototype.demo=function(){
//     console.log("This is a demo function : "+this.firstName);
// }
// var Medals=function(name,noOfMedals){
//     Person.call(this,name);
//     this.noOfMedals=noOfMedals;
//     console.log(noOfMedals);
// }
// Medals.prototype=Object.create(Person.prototype);

// var GetAge =function(name,noOfMedals,age){
//     Medals.call(this,name,noOfMedals);
//     this.age=age;
//     console.log(age);
// }
// GetAge.prototype=Object.create(Medals.prototype);

// var mike = new GetAge("mike",3,24);

// mike.demo();
// var john = new Person("john");
// john.demo();