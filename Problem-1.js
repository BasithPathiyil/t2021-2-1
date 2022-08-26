class Calculator {
    constructor(a,b,type_of_operation){
        this.a=a
        this.b=b
        this.type_of_operation=type_of_operation
    }  
     calc(){
        return eval(this.a+this.type_of_operation+this.b)
    }
}
//Pass your values to the line below
let problem=new Calculator(10.5,20.7665,"*")
console.log(problem.calc())