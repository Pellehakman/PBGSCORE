import $pubgService from "@/services/pubgService";
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: {},
  emits: ["onPlayerName"],

  setup(props, { emit }) {
    const playerName = ref("");

    const handlePlayerName = (playerName: string) => {
      emit("onPlayerName", playerName);
    };

    return { playerName, handlePlayerName };
  },
});
