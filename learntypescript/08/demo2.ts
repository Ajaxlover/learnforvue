class Parent{
    name = '张三';
    run(){
        return this.name+"aaaa";
    }
}

class Child extends Parent{
    name = '老张';
    run(){
        return super.run();
    }
}

let obj = new Child();
console.log(obj.name);
console.log(obj.run());


// let obj = new Parent();
// console.log( obj.name );
// console.log( obj.run() );