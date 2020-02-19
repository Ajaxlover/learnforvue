// 函数
// 1.声明式函数

function funcType(name:string,age:number):number {
  return age
}

var ageNum:number = funcType('张三',15);

// 函数参数不确定时
function funcType2(name:string,age:number,sex?:string):string {
  return sex
}

var ageNum2:string = funcType2('李四',12,'男')

console.log(ageNum2)

// 函数参数默认值
function funcType3(name:string='张三',age:number=18):number {
  return age
}

var ageNum3 = funcType3();
console.log(ageNum3)


//表达式函数
var funcType4 = function(name:string,age:number):number {
  return age
}
//对funcType5约束
var funcType5:(name:string,age:number)=>number  = function(name:string,age:number):number {
  return age
}

//使用接口约束
interface funcType6 {
  (name:string,age:number):number
}

var funcType6:funcType6 = function(name:string,age:number):number {
  return age
}



//参数是联合类型的函数,可采用函数重载

// 输入number类型,输出也是number类型
// 输入string类型,输出也是string类型

function getValue(value:number):number;
function getValue(value:string):string;
function getValue(value:string | number):string | number {
  return  value
}

var a:number = getValue(1);
var c:string = getValue('1');

console.log(a,c)
