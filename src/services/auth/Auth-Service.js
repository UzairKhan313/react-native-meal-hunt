import app from "../../app/firebase";

export const loginRequest = (email, password) => {
  app.auth().signInWithEmailAndPassword(email, password);
};
