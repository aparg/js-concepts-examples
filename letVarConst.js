function letVarConst(){
    const constVariable = "constVariableValue"
    // constVariable = "newValue" //can't be reassigned
    console.log(varVariable) //can be accessed but value is undefined(var is function-scoped)
    // console.log(newConstVariable)//can't be accessed as const is block-scoped
    // console.log(letVariable)//can be accessed as let is block-scoped
    {
        var varVariable = "varVariableValue"
        let letVariable = "letVariableValue"
        const newConstVariable = "newConstVariableValue"
        console.log(letVariable)
    }
}

letVarConst()