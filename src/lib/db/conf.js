import firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey            : 'AIzaSyDk46WJMoFVFoMmXdFFh0CvcL6FUYwXVp0',
    authDomain        : 'puhsd-course-catalog.firebaseapp.com',
    databaseURL       : 'https://puhsd-course-catalog.firebaseio.com',
    projectId         : 'puhsd-course-catalog',
    storageBucket     : 'puhsd-course-catalog.appspot.com',
    messagingSenderId : '1007390762081',
    appId             : '1:1007390762081:web:926e2ba636264194c77620',
    measurementId     : 'G-TSNT525M48'
};
if ( !firebase.apps.length ) {
    firebase.initializeApp( config );
}
export default firebase;