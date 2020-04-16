import dotenv from 'dotenv';
import admin from 'firebase-admin';

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: process.env.FIREBASE_PK.replace(/\\n/g, '\n'),
    projectId: process.env.FIREBASE_PJ,
    clientEmail: process.env.FIREBASE_EMAIL,
  }),
  storageBucket: process.env.FIREBASE_BUCKET,
});

export default admin.storage().bucket();
