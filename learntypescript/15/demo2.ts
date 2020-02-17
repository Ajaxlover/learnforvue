//any    任意类型

function fn( arg:any ) : any { 

    return 1111;
}

fn(   "123"  );

//fn( arg:any ) ===>字符串
// : any  


function Fn1<T>(  arg:T ) : T {

    return arg;
}

let fn1 = Fn1<string>('aaaa');
let fn2 = Fn1(111111);




