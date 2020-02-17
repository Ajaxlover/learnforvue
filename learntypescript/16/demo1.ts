//非泛型函数

function fn1(arg){
    return arg;
}
let Fn1 : (arg: any) => any = fn1; 


//泛型函数

function fn2<T>( arg:T ) :T {
    return arg;
}
let Fn2: <T>(arg: T) => T = fn2;


//类型参数也可以有多个

function fn3 <T,U> ( first:T, last:U  ) {

}

let Fn3 = fn3;


//不同的参数名
function fn4 <T>(arg:T) : T{
    return arg;
}
let Fn4:<P>(arg: P) => P = fn4;


//对象字面量写法

function fn5<T>(arg:T):T{
    return arg;
}

let Fn5: { <T>(arg:T):T } = fn5;

//默认：<T>(arg: T) => T


interface aa{
    (arg:string) : string
}


     