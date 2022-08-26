// Problem is done using function.
//Change your values inside the array of line number 3.
console.log(counts([1,2,3,5,8,10,12,23,27,35,44]))
function counts(array) {
    let count_1=0,count_2=0,count_3=0,count_4=0,count_5=0
    let count_6=0,count_7=0,count_8=0,count_9=0
    for(let i=0;i<array.length;i++){
        
        if(array[i] % 1 == 0) count_1+=1
        if(array[i] % 2 == 0) count_2+=1
        if(array[i] % 3 == 0) count_3+=1
        if(array[i] % 4 == 0) count_4+=1
        if(array[i] % 5 == 0) count_5+=1
        if(array[i] % 6 == 0) count_6+=1
        if(array[i] % 7 == 0) count_7+=1
        if(array[i] % 8 == 0) count_8+=1
        if(array[i] % 9 == 0) count_9+=1

    }
    return {
        1 : count_1,
        2 : count_2,
        3 : count_3,
        4 : count_4,
        5 : count_5,
        6 : count_6,
        7 : count_7,
        8 : count_8,
        9 : count_9,
    }
}

