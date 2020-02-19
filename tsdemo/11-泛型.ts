// 泛型:限定约束规范   提高代码的健壮性和可维护性
// 定义函数,接口或类时,不预先指定具体类型,而在使用时再指定类型

// 问题:此时生成数组每一项都可以是any类型
// function createArray (length:number,value:any):Array<any> {
//   var arr = []
//   for(var i=0;i<length;i++) {
//     arr[i] = value
//   }
//   return arr
// }
// createArray(3,1);

//1.使用泛型改造
// function createArray<T>(length:number,value:T):Array<T> {
//   var arr = []
//   for(var i=0;i<length;i++) {
//     arr[i] = value
//   }
//   return arr
// }

// var strArr:string[] = createArray<string>(3,'1')  指定数组每一项为string
// var numArr:number[] = createArray(3,1)   指定数组每一项为 number  根据类型倒推

// 2.接口中使用泛型约束
interface ICreate {
  <T>(name: string, value: T): Array<T>;
}

let func: ICreate;
func = function<T>(name: string, value: T): Array<T> {
  return [];
};

var strArr:string [] = func('张三','12')
var numArr:number [] = func('张三',6)
