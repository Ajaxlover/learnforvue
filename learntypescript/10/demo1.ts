
class Person{

    private _name:string;
    constructor(_name){
        this._name = _name;
    }
    //是一个属性
    get name(){
        return Math.random()+this._name+"aaaa";
    }
    set name(name){
        this._name = name;
    }

}

let obj = new Person('老张');
//老张
console.log(  obj.name  );


obj.name = '小李';
//小李
console.log(  obj.name  );
