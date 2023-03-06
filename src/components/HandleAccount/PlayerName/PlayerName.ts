import $apiAccount from "@/services/account/apiAccount";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: {},
  emits: ["onError"],

  setup(props, { emit }) {
    const loading = ref(false);
    const playerName = ref("");
    const error = ref<string | undefined>("");

    const handlePlayerName = async (playerName: string) => {
      loading.value = true;
      await $apiAccount.GetPlayer(playerName);
      error.value = $apiAccount.Error;
      loading.value = false;
      emit("onError", $apiAccount.Error);
    };

    return {
      playerName,
      handlePlayerName,
      loading,
      error,
    };
  },
});
