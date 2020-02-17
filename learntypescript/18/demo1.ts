//(insert 、 delete 、 update、select)方法 ===》规范interface

interface Db<T>{
    insert(data:T):boolean;
    delete(data:T,id:number):boolean;
    update(data:T,id:number):boolean;
    select(data:T,id:number):any[];
}   


class Sql<T> implements Db<T>{
    
    insert(data:T) : boolean {
        console.log(data);
        return true;
    };

    delete(data:T,id:number):boolean{
        return true;
    };
    update(data:T,id:number):boolean{
        return true;
    };

    select(data:T,id:number):any[]{
        return [1,2,3];
    };

}

class User{
    userName:string;
    userPwd:string;
}

let mySql = new Sql<User>();
mySql.insert({
    userName:'admin',
    userPwd:'123456'
});
