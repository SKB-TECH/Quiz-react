import app from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'

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
    this.db=app.firestore();
  }

  //Stockage dans la base des donnees
  users=(uid)=>this.db.doc(`users/${uid}`)
  //Inscription vers la plat-form
  SignupUser = (email, password, pseudo,verification, invalidation) => {
    this.auth
      .createUserWithEmailAndPassword(email,password,pseudo)
      .then((authUser)=>{
          this.users(authUser.user.uid).set(
            pseudo,
            email
          )
      })
      .then(()=> {
        verification();
      })
      .catch((error) => {
        invalidation(error);
      });
  };

  // Connexion a la plat-form

  logineUser = (email, password, validation, invalidation) => {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        validation();
      })
      .catch((error) => {
        invalidation(error);
      });
  };

  //Pour la deconnexion a la plat-form
  SignOut = () => this.auth.signOut();

  //recuperation du mot de passe
  passwordReset = (email, reussi, echec) =>
    this.auth
      .sendPasswordResetEmail(email)
      .then((user) => {
        reussi();
      })
      .catch((faild) => {
        echec(faild);
      });
      
    
}


export default Firebase;
