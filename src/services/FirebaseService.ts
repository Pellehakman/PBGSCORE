import database from "@/firebase/config";
import { ref } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const db = ref(database, "calender");
const auth = getAuth();
class FirebaseService {
  async RegisterSubmit(email: string, password: string) {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: { user: any }) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error: { code: any; message: any }) => {
        console.log(error);
      });
  }
}

const $firebaseService = new FirebaseService();
export default $firebaseService;
