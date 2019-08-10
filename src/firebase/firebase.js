import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  'prompt': 'select_account'
});

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//       });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Laptop',
//   note: 'for work',
//   amount: '1000',
//   createdAt: ''
// });

// database.ref('notes/-Ll8ltwPVHLUyCbyTklK').remove();

// database.ref('notes').push({
//   title: 'List',
//   body: 'Buy Laptop'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} as a ${val.job.company}`);
// });

// database.ref(
//   'location/city'
//   ).once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set({
//   name: 'Salvador Martinez Jr',
//   age: 26,
//   job: {
//     title: 'Software Developer',
//     company: 'Self-Employed'
//   },
//   stressLevel: 6,
//   location: {
//     country: 'United States',
//     state: 'Texas',
//     city: 'Austin'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 8,
//   'job/company': 'Freelancer',
//   'location/city': 'San Antonio'
// });

// database.ref().remove(
// ).then(() => {
//   console.log('Remove successful');
// }).catch((e) => {
//   console.log('Remove failed', e);
// });
