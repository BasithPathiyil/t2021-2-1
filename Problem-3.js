//This is done using function.
//Pass your value to the function in line number 14
function series(num) {
    for(let i=num-1;i<=num;i++){
       if(i % 2 == 1){
            let series=1
            for(let j=1;j<=i;j++){
                console.log(series)
                series+=2
            }
        }        
    }
}
series(7)