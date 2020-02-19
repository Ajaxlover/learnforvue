// 联合类型: 变量可以支持多种数据类型  如同是 number和string类型

// var a:number | string = 'hello';
//   a = 2;
// console.log(a.toString());

// 对象类型接口 强约束
interface Istate {
  name:string,
  age:number
}

var obj1:Istate;
obj1 = {
  name:'小明',
  age:18
}

// 可选属性
interface Istate2 {
  name:string,
  age?:number //? 表示属性可选
}

var obj2:Istate2 = {
  name:'小红',
}


//属性个数不确定时
interface Istate3 {
  name:string,
  age?:number,
  [propName:string]:any
}

var obj3:Istate3 = {
  name:'小王',
  age:23,
  sex:'男',
  height:178
}



//只读属性
interface Istate4 {
  name:string,
  readonly age:number
}

var obj4:Istate4 = {
  name:'星星',
  age:18
}
// obj4.age = 20 //报错  只读属性不能修改
console.log(obj4.age)