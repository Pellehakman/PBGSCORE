import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import router from "@/router";
import { setDoc, doc, getFirestore } from "firebase/firestore";
const db = getFirestore();
const auth: any = getAuth();
class FireAccount {
  error: string | undefined;

  get Error() {
    return this.error;
  }

  async RegisterSubmit(email: string, password: string, $apiAccount: any) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: $apiAccount.FetchPlayer.data[0].id,
        });
        setDoc(doc(db, "users", auth.currentUser.uid), {
          uid: auth.currentUser.uid,
          pubgid: $apiAccount.FetchPlayer.data[0].id,
          pubgname: $apiAccount.FetchPlayer.data[0].attributes.name,
          teams: {},
          favourites: {},
        });
        router.push("/statistics");
        this.error = "";
      })

      .catch((error) => {
        console.log(error);
        this.error = error;
      });
  }

  async LoginSubmit(password: string, email: string) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          this.error = "";
          router.push("/statistics");
        }
        // return user;
      })

      .catch((error) => {
        this.error = error;
      });
  }

  async UpdateEmail(email: string) {
    await updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        console.log("Email updated!");
        // ...
      })
      .catch((error) => {
        // An error occurredc
        console.log(error);
        // ...
      });
  }
}

const $fireAccount = new FireAccount();
export default $fireAccount;
