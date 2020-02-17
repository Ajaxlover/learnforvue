interface Fn1Inter{

    <T>(arg:T) : T;
   
}


function fn1<T> (arg:T) : T{

    return arg;

}

let Fn1:Fn1Inter = fn1;

//默认：<T>(arg: T) => T
//咱们也可以写成对象字面量：  { <T>(arg:T):T   }




interface Fn2Inter <T>{
   (arg:T) : T;
}

function fn2<T> (arg:T) : T{

    return arg;

}

let Fn2:Fn2Inter<string> = fn2;



