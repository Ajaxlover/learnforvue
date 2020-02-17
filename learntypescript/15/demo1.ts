//  数组  ===》  取最小值

function getMinArray( arr:number[] ) : number {
    let min = arr[0];
    arr.forEach((value)=>{
        if(value<min){
            min = value;
        }
    })
    return min;
}

console.log(   getMinArray(  [1,3,5,7,9,20]  )    );

//字符串 ===》取最小值

function getMinString( arr:string[] ) : string {
    let min = arr[0];
    arr.forEach((value)=>{
        if(value<min){
            min = value;
        }
    })
    return min;
}

console.log(   getMinString(  ['a','bbb',"ccccc","dddd"]  )    );

//泛型


function getMin<T>( arr:T[] ):T{
    let min = arr[0];
    arr.forEach((value)=>{
        if(value<min){
            min = value;
        }
    })
    return min;
}
console.log(  getMin([1,3,5,7,9,20])  )
console.log(  getMin(['a','bbb',"ccccc","dddd"])  )

