import $pubgService from "@/services/pubgService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: {},
  emits: ["onError"],

  setup(props, { emit }) {
    const loading = ref(false);
    const playerName = ref("");
    const error = ref("");

    const handlePlayerName = async (playerName: string) => {
      loading.value = true;
      await $pubgService.GetPlayer(playerName);
      error.value = $pubgService.isError;
      loading.value = false;
      emit("onError", $pubgService.isError);
    };

    return {
      playerName,
      handlePlayerName,
      loading,
      error,
    };
  },
});
