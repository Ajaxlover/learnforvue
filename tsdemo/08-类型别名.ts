// 给一个类型取一个新名字  
// type 关键字

// let str:string|number = '15'

type newType = string|number|boolean

let str1:newType = 10
let str2:newType = '10'
let str3:newType = true

//接口采用类型别名

interface Istate1 {
  name:string
}

interface Istate2 {
  age:number
}

type newType2 = Istate1|Istate2
var obj:newType2 = {
  name:'1222'
}
var obj2:newType2 = {
  age:18
}
var obj3:newType2 = {
  name:'zzzzz',
  age:56
}

console.log(obj)
console.log(obj2)
console.log(obj3)


//限制字符串的选择
type sex = '男'|'女'
function getSex(s:sex):string {
  return s
}
getSex('男')