import app from "firebase/compat/app";
import "firebase/compat/auth";


const config = {
  apiKey: "AIzaSyCqhlOvOde5uTrlf26iPbSSPviX05q5_No",
  authDomain: "skb-quiz.firebaseapp.com",
  projectId: "skb-quiz",
  storageBucket: "skb-quiz.appspot.com",
  messagingSenderId: "53145973632",
  appId: "1:53145973632:web:61caf1db01660401e64765",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  //Inscription vers la plat-form
  SignupUser = (email, password,verification,invalidation) => {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then(e=>{
        verification()
    })
    .catch(error=>{
      invalidation(error)
    })
  };

  // Connexion a la plat-form

  logineUser = (email, password,validation,invalidation) => {
    this.auth.signInWithEmailAndPassword(email, password)
    .then(e=>{
      validation()
    })
    .catch(error=>{
      invalidation(error)
    })
  };

  //Pour la deconnexion a la plat-form
  SignOut = () => this.auth.signOut();
}

export default Firebase;
