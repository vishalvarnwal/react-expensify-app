console.log("destructuring application is running!");

//object destructuring ======================================

/*const person = {
    name: 'vishal',
    age: 20,
    location: {
        city: 'india',
        temp: 34
    }
}*/

//const name = person.name;
//const age = person.age;
//console.log(`${name} is ${age}.`);

/*
    1.  ES6 object destructuring: We can make all property variable in one line.
    2.  We can give the default value as well in this destructuring.
    3.  We can rename the variable in this destructuring.
*/

/*const {name, age} = person;               //ES6 destructuring
console.log(`${name} is ${age}.`);*/

/*const {city, temp} = person.location;
console.log(`it is ${temp} degree celcius temperature in ${city}.`);*/

/*const {name: FirstName = 'Anonymous', age} = person;     //changing the variable name and giving default value
if(FirstName && age){
    console.log(`${FirstName} is ${age}.`)
}*/

/*const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`it is ${temperature} degree celcius temperature in ${city}`);
}*/


//Array destructuring ==================================================

/*
    1.  ES6 Array destructuring: We can define variables in one line for all array values.
    2.  We can give the default value as well in this destructuring.
*/

const address = ['mahaveer muhalla', 'koderma', 'jharkhand', '825410'];

/*const [ ,city = 'dhanbad', state ] = address;
console.log(`i am at ${city} in ${state}`);*/

const [, city , , zip] = address;
console.log(`Zip code of ${city} is ${zip}`);