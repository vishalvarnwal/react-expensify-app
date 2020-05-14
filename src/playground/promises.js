const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
        //reject('something went wrong!');
    }, 5000);
});

console.log('before');

//promise chaining, what value will be returned by first promise can be shown in the second promise passing arguments
promise.then((data) => {
    console.log(data);
    return 'some data';
}).then((str)=>{
    console.log(str, 'did it run?');
}).catch((error) => {
    console.log("error: ",error)
});

console.log('after');