/**
 * Cypress is promise aware so if you return a promise from inside of commands like . then() , 
 * Cypress will not continue until those promises resolve.
 */

function getNumber(currency){
    return new Promise((resolve,reject)=>{
        if(typeof currency != "number"){
            reject(new Error('Currency is NOT a Number'))
        }else{
            resolve(currency)
        }
    })
}

getNumber(1000).then((val)=>{
    console.log('val ', val)
})