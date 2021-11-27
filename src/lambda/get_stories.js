import * as admin from 'firebase-admin';

//global.self = {fetch: require('node-fetch')}

var serviceAccount = {
    //.....
}

   const firebaseConfig = {
    apiKey: "AIzaSyCpsac9VVt5uE0AF2MVk8kSVMAWFcewFfM",
    authDomain: "auth-practice-4b9a7.firebaseapp.com",
    databaseURL: "https://auth-practice-4b9a7-default-rtdb.firebaseio.com",
    projectId: "auth-practice-4b9a7",
    storageBucket: "auth-practice-4b9a7.appspot.com",
    messagingSenderId: "677785265170",
    appId: "1:677785265170:web:a3a6f44134e47c836fa4cb",
    measurementId: "G-PYBLC4DJX2"
  };
  
const app = admin.initializeApp(
firebaseConfig
);

exports.handler = async (event, context,)=>{
    
    try{
        let ref = await app.database().ref("/stories/");
         ref.on("value", (snapshot) => {
         const storiesArray = snapshot.val();
          return {
            statusCode: 200,
            body: storiesArray
          }
}
        
/*
                return {
            statusCode: 200,
            body: `new note contains ${note}`}
*/
    }catch(err){
        
        return {
            statusCode: 200,
            body: `err ${err.message}`
        }
    }

};
  