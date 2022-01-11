// code your solution here


function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}// end of function


const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`;
}// end of function


function wrapAdjective(parameter = "*") {
    return function (shinyWords = "special") {
        return `You are ${parameter}${shinyWords}${parameter}!`
    }//end of inner fucntion
     
}// end of 

