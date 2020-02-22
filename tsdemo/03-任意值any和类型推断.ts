var num1:any = 1;

num1 = true;

num1 = '111';

// 变量声明未赋值就会被认为是任意值类型  等价于 var num2:any 
var num2;
//类型推断  如果未指定类型,则根据初始值推断数据类型
var b = 1; //此时b被推断成number类型 不能赋值为非number类型
// b = '2'  报错
