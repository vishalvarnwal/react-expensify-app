import * as firebase from 'firebase';

  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const database = firebase.database();

  export { firebase, database as default };


  // // database.ref('expenses')
  // //   .once('value')
  // //   .then((snapshot) => {
  // //     const expenses = [];
  // //     snapshot.forEach((childSnapshot) => {
  // //       expenses.push ({
  // //       id: childSnapshot.key,
  // //       ...childSnapshot.val()
  // //     })
  // //   })
  // //   console.log(expenses);
  // // })

  // // database.ref('expenses').on('value', (snapshot) => {
  // //   const expenses = [];
  // //   snapshot.forEach((childSnapshot) => {
  // //     expenses.push({
  // //       id: childSnapshot.key,
  // //       ...childSnapshot.val()
  // //     })
  // //   })
  // //   console.log(expenses);
  // // })

  // //child-removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child-changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child-added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  

  // // database.ref('expenses').push({
  // //   description: 'my first description',
  // //   note: 'yearly bill',
  // //   amount: 2500,
  // //   createdAt: 1454000
  // // });

  // // database.ref('expenses').push({
  // //   description: 'my 2nd description',
  // //   note: 'monthly bill',
  // //   amount: 25,
  // //   createdAt: 1000
  // // });

  // // database.ref('expenses').push({
  // //   description: 'my 3rd description',
  // //   note: 'gas bill',
  // //   amount: 250,
  // //   createdAt: 7000
  // // });


  // // database.ref().on('value', (snapshot) => {
  // //   const value = snapshot.val();
  // //   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`)
  // // })

  // // setTimeout(() => {
  // //   database.ref('name').set('Ravi'
  // // },3000)


  // // const onValueChange = database.ref()
  // // .on('value', (snapshot) => {
  // //   const value = snapshot.val();
  // //   console.log(value);
  // // }, (e) => {
  // //   console.log("error in data fatchinh: ", e)
  // // });

  // // setTimeout(() => {
  // //   database.ref('age').set(29);
  // // }, 3500) ;

  // // setTimeout(() => {
  // //   database.ref().off(onValueChange);
  // // }, 7000) ;

  // // setTimeout(() => {
  // //   database.ref('age').set(30);
  // // }, 10500) ;

  // // database.ref()
  // // .once('value')
  // // .then((snapshot) => {
  // //   const value = snapshot.val();
  // //   console.log(value);
  // // })
  // // .catch((e) => {
  // //   console.log("error in fetching data: ",e);
  // // })

  
//==========================================================
//crud


  // // database.ref().set({
  // //     name: "vishal",
  // //     age: 25,
  // //     stressLevel: 6,
  // //     job: {
  // //       title: 'software engineer',
  // //       company: 'Google'
  // //     },
  // //     location: {
  // //         city: 'hyderabad',
  // //         country: 'india'
  // //     }
  // // }).then(() => {
  // //     console.log('data is saved');
  // // }, ()=> {
  // //     console.log('something went wrong')
  // // });

  // // database.ref().update({
  // //   stressLevel: 9,
  // //   'job/company': 'amazon',
  // //   'location/city': 'hyderabad'
  // // })

  // // database.ref('isSingle')
  // // .remove()
  // // .then(() => {
  // //     console.log('data is removed')
  // // }, (e) => {
  // //     console.log('data is not removed: ',e)
  // // })


  // //console.log('data changed')
