enum GetterSex{
    up,
    down,
    left,
    right
}

console.log(GetterSex.up, GetterSex.left   );


function getSex(sex){
    if(sex==0){
        console.log('女士');
    }else if(sex==1){
        console.log('男士');
    }else{
        console.log('未知');
    }
}
getSex(GetterSex.up);

