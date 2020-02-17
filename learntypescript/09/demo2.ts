class Parent{

    protected name : string;
    constructor(){
        this.name = '张3';
    }

}

class Child extends Parent{

    run(){
        return this.name;
    }

}

let child = new Child();
console.log(  child.run() );