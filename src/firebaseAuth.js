import { firebase } from "./firebaseIni";

const authMethods = {
  // firebase helper methods go here...

  signup: (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      //make res asynchonous so that we can make grab the token before saving it.
      .then(async (res) => {
        console.log(res);
        //grab token from local storage and set to state.
        console.log(firebase.auth().currentUser);
      });
  },
  signin: (email, password, setState) => {
    //change from create users to...
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      //everything is almost exactly the same as the function above
      .then((res) => {
        console.log(res);
        //grab token from local storage and set to state.
        console.log("currentUser", firebase.auth().currentUser);
      })
      .catch((err) => {});
  },
  //no need for email and password
  signout: (setErrors, setToken) => {
    // signOut is a no argument function
    firebase
      .auth()
      .signOut()
      .then((res) => {
        //remove the token
        localStorage.removeItem("token");
        //set the token back to original state
        setToken(null);
      })
      .catch((err) => {
        //there shouldn't every be an error from firebase but just in case
        setErrors((prev) => [...prev, err.message]);
        //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem("token");
        setToken(null);
        console.error(err.message);
      });
  },
};
export default authMethods;
