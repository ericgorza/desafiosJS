/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!
 */

const responses = {
    div3 : ":(",
    div5 : "$100,000 bonus!",
    div3and5 : "JACKPOT! 1 Million and a Yacht!" ,
    notdiv : ":("
}

const employeeList = [3,5,15,1]

function fizzBuzz(list) {
    for(let i = 0; i < list.length; i++){
        if(list[i] % 3 == 0 && list[i] % 5 == 0){
            console.log(responses.div3and5)
        } else if(list[i] % 3 == 0 && list[i] % 5 != 0){
            console.log(responses.div3)
        } else if(list[i] % 5 == 0 && list[i] % 3 != 0){
            console.log(responses.div5)
        } else if(list[i] % 5 != 0 && list[i] % 3 != 0){
            console.log(responses.notdiv)
        }
    }
    return
}

fizzBuzz(employeeList)

// OR //


function fizzBuzz(list) {
    for (let i = 0; i < list.length; i++) {
        const num = list[i];

        if (num % 3 === 0 && num % 5 === 0) {
            console.log(responses.div3and5);
        } else if (num % 3 === 0) {
            console.log(responses.div3);
        } else if (num % 5 === 0) {
            console.log(responses.div5);
        } else {
            console.log(responses.notdiv);
        }
    }
}

fizzBuzz(employeeList);