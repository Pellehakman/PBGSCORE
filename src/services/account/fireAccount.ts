import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import router from "@/router";

const auth: any = getAuth();
class FireAccount {
  error: string | undefined;

  get Error() {
    return this.error;
  }

  async RegisterSubmit(email: string, password: string, $apiAccount: any) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: { user: any }) => {
        const user = userCredential.user;
        console.log(user);
      })
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: $apiAccount.FetchPlayer.data[0].id,
        })
      )
      .then(() => {
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
}

const $fireAccount = new FireAccount();
export default $fireAccount;
