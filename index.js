function saturdayFun(plans="roller-skate"){
    return `This Saturday, I want to ${plans}!`
}
function mondayWork(monday="go to the office"){
    return `This Monday, I will ${monday}.`
}
function wrapAdjective(result="*",){ 
    return function innerFunc(highlight="special"){
        return `You are ${result}${highlight}${result}!`
    }
}

