import $apiAccount from "@/services/account/apiAccount";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: { edit: Boolean, editStyle: Boolean },
  emits: ["onError", "onLoading"],

  setup(props, { emit }) {
    const loadingGood = ref(false);
    const loadingBad = ref(false);

    const loading = ref(false);
    const playerName = ref<any | string>("");

    const error = ref<string>("");
    const ifDisable = ref(false);
    const handlePlayerName = async () => {
      loadingGood.value = false;
      loadingBad.value = false;
      loading.value = true;
      if (playerName.value.length <= 0) {
        error.value = "Please search for player";
        console.log(error.value);
      } else {
        await $apiAccount.GetPlayer(playerName.value);
        ifDisable.value = true;
      }
      if (error.value) {
        loadingGood.value = false;
        loadingBad.value = true;
      } else {
        loadingGood.value = true;
        loadingBad.value = false;
      }
      loading.value = false;
      emit("onLoading", loading.value);
      emit("onError", error.value);
    };

    return {
      props,
      playerName,
      handlePlayerName,
      loading,
      loadingGood,
      loadingBad,
      error,
    };
  },
});
