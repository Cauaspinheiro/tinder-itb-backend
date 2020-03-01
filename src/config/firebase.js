import dotenv from 'dotenv';
import admin from 'firebase-admin';

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert('serviceAccount.json'),
  storageBucket: process.env.FIREBASE_BUCKET,
});

export default admin.storage().bucket();
