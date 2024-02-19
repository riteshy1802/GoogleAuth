import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBQTk3JZyBUFh6SmJ62PCvbUOA7d2eut30",
    authDomain: "authentication-50382.firebaseapp.com",
    projectId: "authentication-50382",
    storageBucket: "authentication-50382.appspot.com",
    messagingSenderId: "1005714116978",
    appId: "1:1005714116978:web:77ad026ff35a40b9c50deb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = "en";
  const provider = new GoogleAuthProvider();


  const googleLogin = document.getElementById("google");
  if(googleLogin){
    
    googleLogin.addEventListener("click",function(){
  
     signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "./loggedIn.html"
  
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    })
  }

  function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    let username = document.getElementById("userName")
    let email = document.getElementById("userEmail")
    let pic = document.getElementById("userProfilePicture")
    username.innerHTML = userName;
    email.innerHTML = userEmail;
    pic.src = userProfilePicture;
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      updateUserProfile(user);
    } else {
      // User is signed out
      console.log("User is signed out");
    }
  });
  // updateUserProfile(user);
