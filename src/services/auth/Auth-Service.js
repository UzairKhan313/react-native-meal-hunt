import { auth } from "../../app/firebase-two";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
