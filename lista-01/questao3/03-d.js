const arrayList = [
    3, 4, 7, 9, 10, 56, 33, 44, 16, 81,
]

const newArray = []

function impares (arrayList){
    for(let num of arrayList){
        if(num % 2 !== 0 ){
            newArray.push(num);
        }
    }
    if(newArray.length === 0){
        console.log('Não há números ímpares');
        }
    return newArray
}

console.log(impares(arrayList))