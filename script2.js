
const a = 5
const b = 15

a != b // true

const c = 10
const d = '10'

c != d // false

console.log( c >= d);


const expression = 'bye'
switch(expression){
    case 'hello':
        console.log('hello');
        break
    case 'bye':
        console.log('bye');
        break
    default:
        console.log('no-input');
}

const day = 'sunday'

if(day === 'monday'){
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);

}else if(day === 'tuesday'){
    console.log(`Prepare theory videos`);
    
}else if(day === 'wednesday' || day === 'thursday'){
    console.log(`Write code examples`);

}else if(day === 'friday'){
    console.log(`Record videos`);

}else if(day === 'saturday' || day === 'sunday'){
    console.log(`Enjoy the weekend :D`);

} else{
    console.log(`Not a valid day!`);
}


const age = 21

let drink

if(age >= 18) {
    drink = `Wine`
} else{
    drink = `Water`
}

console.log(drink);


console.log(`I'd like to drink ${age >= 18 ? 'Wine' : 'Water'}`)