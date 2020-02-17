//对象
const obj: {
    "name":string,
    "age":number
} = {
    "name":'老张',
    "age":18
}

//数组 ==》arr是一个数组，数组中的值都是number类型
const arr: number[] = [1,2,3];

//class
class Person{}
const obj1:Person = new Person();

//函数===>fn是一个函数，最后返回值的类型是number类型
const fn: ()=> number = ()=>{
    return 123;
}

