class GetMin<T>{
    arr: T[] = [];
    add(ele: T){
        this.arr.push(ele);
    }
    min(): T{
        let min = this.arr[0];
        this.arr.forEach((value)=>{
            if(value<min){
                min = value;
            }
        })
        return min;
    }
}

//这是数值

let getMinNumber = new GetMin<number>();
getMinNumber.add(1);
getMinNumber.add(3);
getMinNumber.add(5);
console.log(  getMinNumber.min()  );


//这是字符串

let getMinString = new GetMin<string>();
getMinString.add("a");
getMinString.add("bb");
getMinString.add("ccc");
console.log(  getMinString.min()  );
