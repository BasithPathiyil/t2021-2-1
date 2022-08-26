//This problem is done using function.
//Pass your values to the function in line number 10.
function series(num) {
    let series=1
    for(let i =1;i<=num;i++){
        console.log(series)
        series=series+2
    }
}
series(4);