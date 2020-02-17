//动物类
abstract class Animal{

    age:number;
    getType(){
        return 'Animal';
    }
    //抽象方法===》每一个东西都会叫，但是叫起来都声音又不一样
    abstract call():string;

}

//狗
class Dog extends Animal{
    call(){
        return '旺旺';
    }
}
//猫
class Cat extends Animal{
    call(){
        return '喵喵';
    }
}


let dog = new Dog();
let cat = new Cat();

console.log( dog.getType() );
console.log( dog.call() );
console.log( cat.call() );

