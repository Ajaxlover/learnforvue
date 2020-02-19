// let word:number|string = '哈哈'
// word = 20
// console.log(word.length)

// 类型断言 两种方式  在jsx语法中只能使用as的方式
function getStr(name:string|number) {
  // return (<string>name).length

  return (name as string).length  
}
