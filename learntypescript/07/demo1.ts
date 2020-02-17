interface Person{
   readonly name:string;
   sex?:string;
   age?:number;
   [propName: string] : any;
   run():string
}


let obj: Person = {
    name:"老张",
    sex:'男',
    a:1,
    b:2,
    c:3,
    d:[1,2,3],
    run(){
        return '老张真帅';
    }
}

obj.name
