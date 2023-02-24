import database from "@/firebase/config";
import { ref } from "firebase/database";

import {
  collection,
  orderBy,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  doc,
} from "firebase/firestore";

class FirebaseService {
  // async firebaseLogin() {
  //   const firestore = getFirestore();
  //   const dateRef = query(collection(firestore, "calender"), orderBy("timeID"));
  //   const snapshots = await getDocs(dateRef);
  //   const fetchFirebase = snapshots.docs.map((doc) => {
  //     const data = doc.data();
  //     return data;
  //   });
  // }
}

const $firebaseService = new FirebaseService();
export default $firebaseService;
