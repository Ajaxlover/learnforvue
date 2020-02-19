// 数组表示
// 1. 类型+方括号
var arr : number [] = [1,2,3]
// console.log(arr)
var arr1 : string [] = ['哈哈','嘻嘻','呵呵']
// console.log(arr1)
var arr3 : any [] = [1,'22',true]
// console.log(arr3)

// 2. 数组泛型表示 Array<elemType>
var arr4:Array<number> = [1,2,3,4]
// console.log(arr4)
var arr5:Array<string> = ['1','2','3','4']
// console.log(arr5)
var arr6:Array<any> = [1,'2',true]
// console.log(arr6)

// 接口表示法 最常用
interface Istate {
  name:string,
  age:number
}

interface IArr {
  [index:number]:Istate
}

var arr7:IArr = [
  {name:'张1',age:17},
  {name:'张2',age:18},
  {name:'张3',age:19},
  {name:'张4',age:20}
]
console.log(arr7)

var arr8:Array<Istate> = [
  {name:'张5',age:17},
  {name:'张6',age:18},
  {name:'张7',age:19}
]

console.log(arr8)

var arr9 : Istate [] = [
  {name:'张8',age:17},
  {name:'张9',age:18},
  {name:'张10',age:19}
]

console.log(arr9)

