function evenOdd (a) {
    let even = [];
    let odd = [];

    for (let i = 1; i<= a; i ++){
        if (i%2 ===0) {
            even.push (i)
        }else{
            odd.push(i)
        }
    }
    return even;
}
console.log(evenOdd(60))