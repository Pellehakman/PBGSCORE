import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SeasonStats",
  setup() {
    const auth = getAuth();
    const playerName = ref<any | undefined>("LOADING...");

    onAuthStateChanged(auth, (user) => {
      if (user) {
        playerName.value = user.photoURL;
      } else {
        // User is signed out
      }
    });
    return { playerName };
  },
});
