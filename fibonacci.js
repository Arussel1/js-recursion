function fibonacci(number,res = [0,1]){

    if(number < res.length){
        return res.slice(0,number);
    }
    res.push(res.at(-1) + res.at(-2));
    return fibonacci(number,res);
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(8));