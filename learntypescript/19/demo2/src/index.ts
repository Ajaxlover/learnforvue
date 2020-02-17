///<reference path="name.ts" />
///<reference path="tel.ts" />

class Init{
    userValue : string[];
    constructor(){
        this.userValue = ['abc','18511773322'];
        

        let nameValue = new NameComponent.UserName;
        console.log(   nameValue.regNameVal( this.userValue[0] )   );

        let telValue = new TelComponent.UserTel;
        console.log(   telValue.regTelVal( this.userValue[1] )     );

    }
}

new Init();