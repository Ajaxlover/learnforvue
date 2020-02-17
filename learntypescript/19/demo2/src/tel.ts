//验证手机号
//验证用户名
namespace TelComponent{
    let regTel = /^1[3456789]\d{9}$/;
    export class UserTel{
        regTelVal(val:string){
            return regTel.test( val );
        }
    }
}