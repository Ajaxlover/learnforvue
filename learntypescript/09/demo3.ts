class Parent{

    constructor(  public name : string ){
        this.name = name;
    }

}

class Child extends Parent{
    constructor( public age:number ){
        super('张三');
    }
}

let obj = new Child(18);
console.log( obj.name, obj.age );