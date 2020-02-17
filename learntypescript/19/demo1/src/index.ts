// namespace userFrom{
//     export class Name{  //验证用户名

//     }
//     export class Tel{  //验证手机号
    
//     }
// }

// class Init{ //初始化==》运行以上2个类的
//     constructor(){
//         new userFrom.Name();
//         new userFrom.Tel();
//     }
// }



namespace initFrom{
    namespace userFrom{
        export class Name{  //验证用户名
            constructor(){
                console.log('Name运行了');
            }
        }
        export class Tel{  //验证手机号
            constructor(){
                console.log('Tel运行了');
            }
        }
    }
    
    class Init{ //初始化==》运行以上2个类的
        constructor(){
            console.log('init运行了');
            new userFrom.Name();
            new userFrom.Tel();
        }
    }
    new Init();
}

