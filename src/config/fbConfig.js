import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDN1OehnLoc7iNkLc9_l80iffCrbNfUMHs',
  authDomain: 'mario-plan-233ac.firebaseapp.com',
  databaseURL: 'https://mario-plan-233ac.firebaseio.com',
  projectId: 'mario-plan-233ac',
  storageBucket: 'mario-plan-233ac.appspot.com',
  messagingSenderId: '553273360544',
  appId: '1:553273360544:web:12e7b3615769975c6c49c5',
  measurementId: 'G-2ZGQQH2DNC',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
