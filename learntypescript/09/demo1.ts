class Parent{

    private name:string;
    constructor(){
        this.name = '张三';
    }
    run(){
        //内部
        return this.name+"这是一个run方法";
    }

}

let parents = new Parent();
console.log( parents.name );//外部
console.log( parents.run() );//外部


