function fn( {num1,str1}:{num1:number,str1:string} ) : string{

    return num1+str1;

}

fn( {num1:10,str1:"老张"} )


function fn1( {str} : {str:string} ) : string{
    return str;
}
fn1( {str:"老张"} )
