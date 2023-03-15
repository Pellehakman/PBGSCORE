import $seasons from "@/services/seasons/seasons";
import $lifetime from "@/services/statistics/alltime";
import type { seasonStats } from "@/models/models";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "SeasonStats",
  setup() {
    const seasonStats = ref();

    const auth = getAuth();
    const loading = ref(false);
    const playerName = ref<any | undefined>("LOADING...");
    // const seasonStatsError = ref("");

    const getPlayerNameFromAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        const ign_id: any = user?.displayName;
        playerName.value = user?.photoURL;
        handleMatches(ign_id);
      });
    };

    const handleMatches = async (ign_id: string) => {
      loading.value = true;
      await $seasons.GetSeasonsStats(ign_id);
      loading.value = false;
      nextStep();
    };
    const nextStep = async () => {
      // if (!auth.currentUser) {
      //   seasonStats.value = "please enter user to see matches";
      // }
      // if (localStorage.getItem("_user_season_stats")) {
      //   seasonStats.value = localStorage.getItem("_user_season_stats");
      // } else {
      seasonStats.value = $seasons.state;
      const data: seasonStats = seasonStats.value;
      // for (const hej in data.duo) {
      //   console.log(hej);
      // }
      // const obj = {
      //   name: "Luke Skywalker",
      //   title: "Jedi Knight",
      //   age: 23,
      // };

      // Convert `obj` to a key/value array
      // `[['name', 'Luke Skywalker'], ['title', 'Jedi Knight'], ...]`
      const asArray = Object.entries(data["duo-fpp"]);
      console.log(asArray);

      const filtered = asArray.filter(
        ([key, value]) => typeof value === "numbers"
      );

      // Convert the key/value array back to an object:
      // `{ name: 'Luke Skywalker', title: 'Jedi Knight' }`
      const justStrings = Object.fromEntries(filtered);
      console.log(justStrings);
    };

    getPlayerNameFromAuth();
    return { playerName };
  },
});
