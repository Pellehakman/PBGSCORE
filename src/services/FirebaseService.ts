import database from "@/firebase/config";
import { ref } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const db = ref(database, "calender");
const auth = getAuth();
class FirebaseService {
  async RegisterSubmit(password: string, email: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: { user: any }) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error: { code: any; message: any }) => {
        console.log(error);
      });
  }

  async LoginSubmit(password: string, email: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          console.log(user.email);
          console.log(user.uid);
          sessionStorage.setItem("uid", JSON.stringify(user.uid));
        }
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  }
}

const $firebaseService = new FirebaseService();
export default $firebaseService;
