interface Len{
    length : number;
}

function fn<T extends Len>( arg: T ) : T {

    console.log(arg.length);

    return arg;
}

fn( "abcd" );
