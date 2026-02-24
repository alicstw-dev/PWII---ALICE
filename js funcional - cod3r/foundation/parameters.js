function logParams(a,b,c){
    console.log(a,b,c)
};

logParams(1,2,2);

function defaultParams(a,b,c=0 ){
    console.log(a,b,c)
};
defaultParams(1)

//spread/rest
function logNums(...nums){
    for(let n of nums){
        console.log(n);
    }
}

logNums(1,2,3,4,5,6)