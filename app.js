//
//
//
//
//
//
let cash = 30
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - the change is $${difference}`)
} else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
} else {
    console.log(`you are $${-difference} short`)
}