import type { userModel } from "@/models/models";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

class FireUser {
  async getUsers() {
    const firestore = getFirestore();
    const userQuery = query(collection(firestore, "users"));
    const snapshots = await getDocs(userQuery);
    const fetchUsers = snapshots.docs.map((doc) => {
      const data = doc.data() as userModel;
      return data;
    });
    return fetchUsers;
  }
}

const $fireUser = new FireUser();
export default $fireUser;
