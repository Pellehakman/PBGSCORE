import type { userModel } from "@/models/models";
import $apiAccount from "@/services/account/apiAccount";
import $fireUser from "@/services/account/fireUser";
import { getAuth } from "firebase/auth";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: { editable: Boolean },
  emits: ["onError"],

  setup(props, { emit }) {
    const auth = getAuth();
    onMounted(async () => {
      loading.value = true;
      await $fireUser.getUser();
      if (auth.currentUser) {
        playerName.value = $fireUser.User.pubgname;
      }
      loading.value = false;
    });
    const loading = ref(false);
    const playerName = ref<userModel | string>("");

    const error = ref<string | undefined>("");

    const handlePlayerName = async (playerName: string) => {
      loading.value = true;
      await $apiAccount.GetPlayer(playerName);
      error.value = $apiAccount.Error;
      loading.value = false;
      emit("onError", $apiAccount.Error);
    };

    // const disable = ref(false);
  
    // if (auth.currentUser) {
    //   disable.value = true;
    // }

    return {
      playerName,
      handlePlayerName,
      loading,
      error,
    };
  },
});
