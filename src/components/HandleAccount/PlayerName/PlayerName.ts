import $pubgService from "@/services/pubgService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: {},
  emits: ["onPlayerName"],

  setup(props, { emit }) {
    const loading = ref(false);
    const playerName = ref("");
    const date = ref();
    const warning = ref();
    const success = ref();

    const handlePlayerName = async (playerName: string) => {
      loading.value = true;
      success.value = false;
      warning.value = false;
      await $pubgService.GetPlayer(playerName);
      loading.value = false;

      if ($pubgService.FetchPlayer) {
        success.value = true;
        warning.value = false;
      }
      if ($pubgService.isError) {
        warning.value = true;
        success.value = false;
      }

      emit("onPlayerName", playerName);
    };

    return { playerName, handlePlayerName, loading, date, warning, success };
  },
});
