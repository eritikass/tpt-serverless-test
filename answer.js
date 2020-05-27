function getAnswer(a, b, operator) {
    if(operator === "+") return a+b;
    else if (operator === "-") return a-b;
    else if (operator === "/") return a/b;
    else if (operator === "*") return a*b;
    else if (operator === ">") return a>b;
    else if (operator === "<") return a<b;
    else if (operator === ">=") return a>=b;
    else if (operator === "<=") return a<=b;
    else if (operator === "=") return a===b;
    else return "wat";
}

exports.getAnswer = getAnswer;