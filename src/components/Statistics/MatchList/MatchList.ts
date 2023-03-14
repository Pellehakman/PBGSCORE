import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName";
import $matchlist from "@/services/statistics/matchlist";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, onBeforeMount, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "PlayerStats",
  async setup() {
    const auth = getAuth();
    const loading = ref(false);
    const matchlist = ref();

    const getPlayerNameFromAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        const name: any = user?.photoURL;
        handleMatches(name);
      });
    };

    const handleMatches = async (name: string) => {
      loading.value = true;
      await $matchlist.GetMatchlist(name);
      loading.value = false;
      nextStep();
    };
    const nextStep = async () => {
      if (localStorage.getItem("_matches")) {
        matchlist.value = localStorage.getItem("_matches");
      } else {
        matchlist.value = $matchlist.state;
      }
    };

    getPlayerNameFromAuth();
    return {
      loading,
      matchlist,
    };
  },
});
