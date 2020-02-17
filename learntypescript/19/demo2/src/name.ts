//验证用户名
namespace NameComponent{
    let regName = /^\w{5,8}$/;
    export class UserName{
        regNameVal(val:string){
            return regName.test( val );
        }
    }
}