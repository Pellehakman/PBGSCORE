import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import type { playerModel } from "@/models/models";
import $pubgService from "@/services/pubgService";
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "go-pro",
  components: { PlayerName },
  setup() {
    const date: playerModel = $pubgService.playerData();

    // HÄR SLUTADE DU
    const playerName = ref("");
    const handlePlayerName = (fromPlayerName: string) => {
      playerName.value = fromPlayerName;
    };
    const handleSerach = () => {
      $pubgService.GetPlayer(playerName.value);
    };

    return { handleSerach, handlePlayerName, date };
  },
});
