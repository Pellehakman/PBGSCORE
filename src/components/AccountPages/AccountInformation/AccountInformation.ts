import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import type { userModel } from "@/models/models";
import $apiAccount from "@/services/account/apiAccount";
import $fireAccount from "@/services/account/fireAccount";
import $fireUser from "@/services/account/fireUser";
import { getAuth } from "firebase/auth";

import { defineComponent, handleError, onMounted, ref } from "vue";

export default defineComponent({
  name: "account-information",
  components: { Email, PlayerName, Password },

  setup() {
    const auth = getAuth();
    const user = auth.currentUser;
    const data = ref<userModel>();
    const pubgError = ref("");
    const fireError = ref<string | undefined>("");
    const handleError = (fromError: string) => {
      pubgError.value = fromError;
    };

    onMounted(async () => {
      await $fireUser.getUser();
      data.value = $fireUser.User;
    });

    const email = ref<any>(user?.email);
    const handleEmail = (fromEmail: string) => {
      email.value = fromEmail;
      console.log(email.value);
    };
    const password = ref("");
    const handlePassword = (fromPassword: string) => {
      console.log(fromPassword);
      password.value = fromPassword;
    };

    const handleUpdate = async () => {
      disable.value = !disable.value;
      if (disable.value === false) {
        editText.value = "SAVE";
      } else {
        editText.value = "EDIT";
        handleSave();
      }
    };

    const handleSave = async () => {
      await $fireAccount.UpdatePassword(password.value);
      await $fireAccount.UpdateEmail(email.value);
      fireError.value = $fireAccount.Error;
      await $fireAccount.UpdatePlayerName($apiAccount);
    };

    const disable = ref(true);
    const editText = ref("EDIT");
    return {
      pubgError,
      fireError,
      handleError,
      editText,
      disable,
      user,
      email,
      handleEmail,
      data,
      handlePassword,
      handleUpdate,
    };
  },
});
