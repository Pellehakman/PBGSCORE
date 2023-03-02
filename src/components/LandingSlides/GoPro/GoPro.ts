import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import type { playerModel } from "@/models/models";
import $firebaseService from "@/services/FirebaseService";
import $pubgService from "@/services/pubgService";
import { computed, defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "go-pro",
  components: { PlayerName },
  setup() {
    // const playerData = computed(() => $pubgService.playerData().value);

    const playerName = ref("");
    const handlePlayerName = (fromPlayerName: string) => {
      playerName.value = fromPlayerName;
    };
    const handleSerach = () => {
      $pubgService.GetPlayer(playerName.value);
    };

    return {
      handleSerach,
      handlePlayerName,
    };
  },
});
