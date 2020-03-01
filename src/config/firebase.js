import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('serviceAccount.json'),
  storageBucket: 'tinder-itb.appspot.com',
});


export default admin.storage().bucket();
