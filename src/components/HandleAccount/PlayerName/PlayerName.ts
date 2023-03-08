import type { userModel } from "@/models/models";
import $apiAccount from "@/services/account/apiAccount";
import $fireUser from "@/services/account/fireUser";
import { getAuth } from "firebase/auth";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: { edit: Boolean, editStyle: Boolean },
  emits: ["onError"],

  setup(props, { emit }) {
    const auth = getAuth();
    // onMounted(async () => {
    //   loading.value = true;

    // await $fireUser.getUser();
    // if (auth.currentUser?.displayName) {
    //   playerName.value = $fireUser.User.pubgname;
    // }
    //   loading.value = false;
    // });
    const loadingGood = ref(false);
    const loadingBad = ref(false);

    const loading = ref(false);
    const playerName = ref<any | string>(auth.currentUser?.photoURL);

    const error = ref<string | undefined>("");

    const handlePlayerName = async (playerName: string) => {
      loadingGood.value = false;
      loadingBad.value = false;
      loading.value = true;
      await $apiAccount.GetPlayer(playerName);
      error.value = $apiAccount.Error;
      if (error.value) {
        loadingGood.value = false;
        loadingBad.value = true;
      } else {
        loadingGood.value = true;
        loadingBad.value = false;
      }
      loading.value = false;

      emit("onError", $apiAccount.Error);
    };

    // const disable = ref(false);

    // if (auth.currentUser) {
    //   disable.value = true;
    // }

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
