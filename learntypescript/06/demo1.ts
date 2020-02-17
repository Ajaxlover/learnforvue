//arr1是一个数组，其中每一项都必须是数值类型
let arr1: number[] = [1,2,3];
let arr2: string[] = ['a','b','c'];

//我有一个需求： 数组中既有数值还有字符串?
let arr3: (number|string)[] = ['a','b',3];

//又一个需求，任何类型
let arr4: any[] = ['a',2,true,{},[]];


//类型别名
type ObjName = {
    name:string,
    age:number,
    sex:string
};
//放入对象
let obj: ObjName[] = [
    {
        "name":'老张',
        "age":18,
        "sex":"男"
    },
    {
        "name":"小李",
        "age":20,
        "sex":"男"
    }
]

//元组
let arr5: [string,string,number] = ['a','b',3];

//二维
let arr6: [string,string,number][] = [
    ["a",'b',3],
    ["a",'b',3],
    ["a",'b',3]
]


