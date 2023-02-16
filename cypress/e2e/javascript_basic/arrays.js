//creating array
var scores=new Array() //empty
var numbers=new Array(10) // array with initial size 10
var myNumber=new Array(9,5,10,3) // array with initial elements
var athletes=Array(3)// array with initial size 3
var sing=Array("red") // array with one element

//array examples
let tools=["jest","selenium","cypress","testCafe","phantomjs","protractor"]

//accessing array elements
console.log(tools)
console.log(tools.toString()) //jest,selenium,cypress,testCafe,phantomjs,protractor
console.log(tools[0]) // index[0]-->jest

const String=tools.toString() //toString-->jest,selenium,cypress,testCafe,phantomjs,protractor
console.log(String)

const join=tools.join(" * ") // .join--> jest * selenium * cypress * testCafe * phantomjs * protractor
console.log(join)

const pop=tools.pop() // removes an element from the end of array
console.log(tools) // -->[ 'jest', 'selenium', 'cypress', 'testCafe', 'phantomjs' ]
console.log(pop) // --> protractor

const push=tools.push("Slimerjs") // add an element to end of the array
console.log(tools) // --> [ 'jest', 'selenium', 'cypress', 'testCafe', 'phantomjs', 'Slimerjs' ]
console.log(push) // 6 

const shift=tools.shift() // removes an element from the start of array
console.log(tools) // [ 'selenium', 'cypress', 'testCafe', 'phantomjs', 'Slimerjs' ]
console.log(shift)

const unShift=tools.unshift("selenoid") // add element to beginning of array
console.log(tools) // added selenoid to beginning
console.log(unShift)

const sort=tools.sort() 
console.log(tools) // 
console.log(sort)

const reverse=tools.reverse() // 
console.log(tools) // 
console.log(reverse)

tools.forEach((value)=>{
    if(value=="cypress"){
        console.log("cypress is trending noe")
    }else{
        console.log("element not found")
    }
})
/**element not found
element not found
element not found
element not found
cypress is trending noe
element not found */


